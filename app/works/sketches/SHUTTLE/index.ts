//  SHUTTLE ! © 2023-02-08 by Zaron Chen is licensed under CC BY-NC-SA 3.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/3.0/

import p5Types from "p5"
import { frag, vert } from "./shader"

const SHUTTLE = (p: p5Types, parentId: string) => {
	const parent = document.getElementById(parentId) as HTMLDivElement
	let theShader: p5Types.Shader
	let Canvas: p5Types.Graphics
	let Buffer: any
	let delta = 0
	let random_seed: number

	p.setup = () => {
		p.createCanvas(1200, 600, p.WEBGL)
		p.flex({
			container: { parent },
			canvas: { fit: p.COVER },
			stylePage: false,
		})
		p.pixelDensity(1)
		Canvas = p.createGraphics(p.width, p.height)
		Buffer = p.createFramebuffer({ format: p.FLOAT })
		theShader = p.createShader(vert, frag)

		p.noStroke()
		p.imageMode(p.CENTER)

		Canvas.noStroke()
		Canvas.background(0)
		Canvas.rectMode(p.CENTER)

		random_seed = p.random(0, 30)

		let step = 0
		for (let y = 2.5; y < p.height; y += 5) {
			for (let x = 2.5; x < p.width; x += 5) {
				if (p.random(0, 1) < 0.01) Canvas.fill(255, 0, 0)
				else Canvas.fill(p.random(255))
				Canvas.rect(x, y, Canvas.noise(step) * 5)
				step += 0.08
			}
		}
		p.noLoop()
	}

	p.draw = () => {
		p.background(255, 0, 0)
		delta += p.map(p.mouseX, 0, p.width, 0.01, -0.01)
		Buffer.draw(() => {
			p.background(0)
			p.shader(theShader)
			theShader.setUniform("iResolution", [p.width, p.height])
			theShader.setUniform("iPixelDensity", p.pixelDensity())
			theShader.setUniform("iCanvas", Canvas)
			theShader.setUniform("iDelta", delta)
			theShader.setUniform("iRandomSeed", random_seed)
			p.rect(0, 0, p.width, p.height)
		})

		p.image(Buffer, 0, 0)
	}

	p.mouseMoved = () =>
		p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height
			? p.loop()
			: p.noLoop()
}

export default SHUTTLE
