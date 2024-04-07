import * as Shox from "shox"

export const frag = `#version 300 es
	precision mediump float;

	uniform vec2 iResolution;
	uniform float iPixelDensity;
	uniform sampler2D iCanvas;
	uniform float iDelta;
	uniform float iRandomSeed;

	${Shox.displace}
	${Shox.extend}
	${Shox.hash}

	in vec2 vTexCoord;
	out vec4 fragColor;
	void main() {
		vec2 uv = vTexCoord;

		vec4 randomImage = vec4(hash12(uv*314159.26+iRandomSeed));

		vec2 iYuv = floor( vec2( uv.x, uv.y*(iResolution.y/5.) ) );
		vec4 dimg = vec4(hash12(iYuv*314159.26+iRandomSeed));

		vec2 duv = displace(uv, dimg.rg, 0.5, iDelta);
		duv = displace(duv, randomImage.rg, .5, .005);
		duv = repeat(duv, 1.);

		fragColor = texture(iCanvas, vec2(duv.x, uv.y))/(dimg.x*4.);
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
