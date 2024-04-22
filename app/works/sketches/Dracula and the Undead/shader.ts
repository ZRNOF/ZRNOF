import * as Shox from "shox"

export const FRAG = `#version 300 es
	precision mediump float;

	uniform sampler2D tex0;
	uniform vec2 canvasSize;
	uniform vec2 mouse;
	uniform float time;

	${Shox.noiseMath}
	${Shox.snoise3D}
	${Shox.snoise3DImage}
	${Shox.displace}
	${Shox.hash}

	float circle(vec2 uv, vec2 pos, float r, float blur) {
		return smoothstep(r+blur, r-blur, length(uv-pos));
	}

	vec4 noise(vec2 uv, float scal, float gain, float ofst, float expo, vec3 move) {
		vec4 noise;
		noise  =     1.*snoise3DImage((uv-vec2(421., 132))*1., scal, gain, ofst, move);
		noise +=     .5*snoise3DImage((uv-vec2(913., 687))*2., scal, gain, ofst, move);
		noise +=    .25*snoise3DImage((uv-vec2(834., 724))*4., scal, gain, ofst, move);
		noise +=   .125*snoise3DImage((uv-vec2(125., 209))*8., scal, gain, ofst, move);
		noise +=  .0625*snoise3DImage((uv-vec2(387., 99))*16., scal, gain, ofst, move);
		noise /= 1.9375;
		return noise;
	}

	in vec2 vTexCoord;
	out vec4 fragColor;
	void main() {
		vec2 uv = vTexCoord;

		float scal = 5.;
		float gain = 1.;
		float ofst = .5;
		float expo = 1.;
		vec3  move = vec3(0., 0., time*.06);
		vec4 dimg = noise(uv, scal, gain, ofst, expo, move);

		float wei = .005;
		vec2 duv = displace(uv, dimg.rg, ofst, wei);

		float cursor = circle(uv, mouse, .0001, .05);
		vec4 color = vec4(texture(tex0, duv).rgb, 1.);
		color += cursor;

		// fade out
		color -= .001;

		fragColor = color;
	}
`

export const FILTER_FRAG = `#version 300 es
	precision mediump float;

	uniform sampler2D tex0;
	uniform vec2 texelSize;
	uniform vec2 canvasSize;
	uniform vec2 mouse;
	uniform float time;
	uniform float iStyle;
	uniform bool iMonochrome;

	${Shox.zcPalette(3)}

	vec4 invert(vec4 color) {
		vec3 ivrt = vec3(1.-color);
		return vec4(ivrt, 1.);
	}

	in vec2 vTexCoord;
	out vec4 fragColor;
	void main() {
		vec2 uv = vTexCoord;
		vec4 color = texture(tex0, uv);

		if (!iMonochrome) {
			vec4 colors[] = vec4[](
				vec4(1., 1., 1., 1.),
				vec4(1., 0., 0., 1.),
				vec4(0., 0., 0., 1.)
			);
			float positions[] = float[](
				0.0,
				0.5,
				1.0
			);
			color = palette(color.x, colors, positions);
		}

		if (iStyle == 1.) {
			color = invert(color);
		}
		else if (iStyle == 2.) {
			if (uv.x < 0.5) {
				color = invert(color);
			}
		}
		else if (iStyle == 3.) {
			if (uv.x > 0.5) {
				color = invert(color);
			}
		}

		fragColor = color;
	}
`

export const VERT = `#version 300 es

	in vec4 aPosition;
	in vec2 aTexCoord;

	out vec2 vTexCoord;

	void main() {
		vTexCoord = aTexCoord;
		gl_Position = aPosition;
	}
`
