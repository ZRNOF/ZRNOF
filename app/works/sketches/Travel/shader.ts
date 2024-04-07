import * as Shox from "shox"

export const frag = `#version 300 es
	precision mediump float;

	uniform vec2 iResolution;
	uniform float iPixelDensity;
	uniform sampler2D iImage0;
	uniform sampler2D iImage1;
	uniform sampler2D iImage2;
	uniform vec2 iMouse;
	uniform float iTime;
	uniform vec2 iDelta;

	${Shox.displace}
	${Shox.noiseMath}
	${Shox.snoise3D}
	${Shox.snoise3DImage}
	${Shox.extend}

	vec4 noiseImage(vec2 uv, float scal, float gain, float ofst, vec3 move) {
		vec4 dimg = 1.0*snoise3DImage((uv-vec2(421., 132))*1., scal, gain, ofst, move);
		dimg +=    0.25*snoise3DImage((uv-vec2(834., 724))*4., scal, gain, ofst, move);
		dimg +=  0.0625*snoise3DImage((uv-vec2(387., 99))*16., scal, gain, ofst, move);
		return dimg/1.3125;
	}

	in vec2 vTexCoord;
	out vec4 fragColor;
	void main() {
		vec2 uv = vTexCoord;
		vec2 mouse = iMouse.xy/iResolution.xy;

		vec3 trans = vec3(iDelta.x, iDelta.y, iTime*0.002);
		vec4 dimg = noiseImage(uv, 1., 1., .5, trans);

		vec2 duv = displace(uv, dimg.rb, .5, 3.);
		duv = mirror(duv, 1.);

		vec4 img0 = texture(iImage0, duv);
		vec4 img1 = texture(iImage1, duv);
		vec4 img2 = texture(iImage2, duv);

		// fade slideshow
		vec4 col;
		float time = iTime*.005;
		float it = floor(time);
		float grad = .5+.5*sin((fract(time)-.5)*3.14159);
		if (mod(it, 3.) == 0.) { col = mix(img0, img1, grad); }
		if (mod(it, 3.) == 1.) { col = mix(img1, img2, grad); }
		if (mod(it, 3.) == 2.) { col = mix(img2, img0, grad); }

		fragColor = col;
	}
`

export const vert = `#version 300 es

	in vec3 aPosition;
	in vec2 aTexCoord;

	out vec2 vTexCoord;

	void main() {
		vTexCoord = aTexCoord;
		gl_Position = vec4(aPosition.xy*2.-1., aPosition.z, 1.);
	}
`
