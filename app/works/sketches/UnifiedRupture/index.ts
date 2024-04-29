// Unified Rupture © 2023-04-15 by Zaron Chen is licensed under CC BY-NC-SA 3.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/3.0/

import p5Types from "p5"
import { frag, vert } from "./shader"

const UnifiedRupture = (p: p5Types, parentId: string) => {
	const parent = document.getElementById(parentId) as HTMLDivElement

	const [WIDTH, HEIGHT] = [600, 600]
	const PIXEL_DENSITY = 2
	const CANVAS_SIZE = [WIDTH, HEIGHT]
	let theShader: p5Types.Shader

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, p.WEBGL)
		p.flex({
			container: { parent },
			canvas: { fit: p.COVER },
			stylePage: false,
		})

		p.pixelDensity(PIXEL_DENSITY)

		theShader = p.createShader(vert, frag)

		p.noStroke()
		p.imageMode(p.CENTER)

		p.describe(`"Unified Rupture" by Zaron Chen`)
		p.noLoop()
	}

	p.draw = () => {
		p.background(255)
		p.shader(theShader)
		theShader.setUniform("canvasSize", CANVAS_SIZE)
		theShader.setUniform("mouse", [p.mouseX / WIDTH, p.mouseY / HEIGHT])
		theShader.setUniform("time", p.frameCount)
		p.quad(-1, 1, 1, 1, 1, -1, -1, -1)
	}

	p.mouseMoved = () => {
		p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height
			? p.loop()
			: p.noLoop()
	}
}

export default UnifiedRupture
