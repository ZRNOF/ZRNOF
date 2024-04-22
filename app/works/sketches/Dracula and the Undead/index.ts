// Dracula and the Undead © 2023-04-07 by Zaron Chen is licensed under CC BY-NC-SA 3.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/3.0/

import p5Types from "p5"
import { VERT, FRAG, FILTER_FRAG } from "./shader"

const DraculaAndTheUndead = (p: p5Types, parentId: string) => {
	const parent = document.getElementById(parentId) as HTMLDivElement
	const [WIDTH, HEIGHT] = [1024, 576]
	const PIXEL_DENSITY = 1
	const CANVAS_SIZE = [WIDTH, HEIGHT]
	let gfx: p5Types.Graphics,
		res: p5Types.Graphics,
		theShader: p5Types.Shader,
		filterShader: p5Types.Shader

	let STYLE = 3
	let MONOCHROME = false

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT)
		p.flex({
			container: { parent },
			canvas: { fit: p.COVER },
			stylePage: false,
		})
		p.pixelDensity(PIXEL_DENSITY)

		gfx = p.createGraphics(WIDTH, HEIGHT, p.WEBGL)
		res = p.createGraphics(WIDTH, HEIGHT, p.WEBGL)
		theShader = p.createShader(VERT, FRAG)
		filterShader = p.createShader(VERT, FILTER_FRAG)

		p.noStroke()
		gfx.noStroke()
	}

	p.draw = () => {
		const t = p.frameCount / 60

		gfx.shader(theShader)
		theShader.setUniform("tex0", gfx)
		theShader.setUniform("canvasSize", CANVAS_SIZE)
		theShader.setUniform("mouse", [p.mouseX / WIDTH, p.mouseY / HEIGHT])
		theShader.setUniform("time", t)
		gfx.quad(-1, 1, 1, 1, 1, -1, -1, -1)

		res.shader(filterShader)
		filterShader.setUniform("tex0", gfx)
		filterShader.setUniform("canvasSize", CANVAS_SIZE)
		filterShader.setUniform("mouse", [p.mouseX / WIDTH, p.mouseY / HEIGHT])
		filterShader.setUniform("time", t)
		filterShader.setUniform("iStyle", STYLE)
		filterShader.setUniform("iMonochrome", MONOCHROME)
		res.quad(-1, 1, 1, 1, 1, -1, -1, -1)

		p.image(res, 0, 0)
	}
	p.mouseMoved = () => {
		p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height
			? p.loop()
			: p.noLoop()
	}
}

export default DraculaAndTheUndead
