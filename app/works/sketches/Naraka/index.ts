// Naraka © 2023-04-30 by Zaron Chen is licensed under CC BY-NC-SA 3.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/3.0/

import p5Types, { Graphics } from "p5"
import { FRAG, VERT } from "./shader"

const Naraka = (p: p5Types, parentId: string) => {
	const parent = document.getElementById(parentId) as HTMLDivElement
	const [WIDTH, HEIGHT] = [600, 600]
	const PIXEL_DENSITY = 2
	const CANVAS_SIZE = [WIDTH, HEIGHT]
	let Canvas: p5Types.Renderer, gfx: Graphics, theShader: p5Types.Shader

	let mode = "d"
	let px = 1
	let isBorder = false
	let stop = false

	p.setup = () => {
		Canvas = p.createCanvas(WIDTH, HEIGHT)
		p.flex({
			container: { parent },
			canvas: { fit: p.COVER },
			stylePage: false,
		})
		p.pixelDensity(PIXEL_DENSITY)

		gfx = p.createGraphics(WIDTH, HEIGHT, p.WEBGL)
		theShader = p.createShader(VERT, FRAG)

		p.noStroke()
		gfx.noStroke()
		p.background(0)
		gfx.background(0)
	}

	p.draw = () => {
		const t = p.frameCount / 60

		p.background(255, 10)
		gfx.background(0)

		drawLines()

		gfx.shader(theShader)
		theShader.setUniform("tex0", Canvas as Graphics)
		theShader.setUniform("canvasSize", CANVAS_SIZE)
		theShader.setUniform("mouse", [p.mouseX / WIDTH, p.mouseY / HEIGHT])
		theShader.setUniform("time", t)
		gfx.quad(-1, 1, 1, 1, 1, -1, -1, -1)

		p.image(gfx, 0, 0)

		if (isBorder) Border("#FFF", 5)
	}

	const drawLines = () => {
		if (mode == "m") Lines()
		if (mode == "d") dropLines()
		if (mode == "n") return
	}

	const Lines = () => {
		p.push()
		p.stroke(255)
		p.line(p.width / 5, 0, p.width / 5, p.height)
		p.line(p.width / 2, 0, p.width / 2, p.height)
		p.line((p.width / 5) * 4, 0, (p.width / 5) * 4, p.height)
		p.pop()
	}

	let y1off = 0
	let y2off = 0
	const dropLines = () => {
		p.push()
		p.stroke(255)
		p.line(p.width / 5, y1off, p.width / 5, y2off)
		p.line(p.width / 2, y1off, p.width / 2, y2off)
		p.line((p.width / 5) * 4, y1off, (p.width / 5) * 4, y2off)
		p.pop()

		y2off += 3
		if (y1off > 0 || y2off >= p.height) {
			y2off = p.height
			y1off += 5
			if (y1off >= p.height) {
				y2off = 0
				y1off = 0
			}
		}
	}

	// Draw border for canvas
	const Border = (color: string, weight: number) => {
		p.push()
		p.noFill()
		p.stroke(color)
		p.strokeWeight(weight * 2)
		p.rectMode(p.CENTER)
		p.rect(p.width / 2, p.height / 2, p.width, p.height)
		p.pop()
	}

	p.keyPressed = () => {
		switch (p.key) {
			case "m":
				mode = "m"
				break
			case "d":
				mode = "d"
				break
			case "n":
				mode = "n"
				break
			case "s":
				p.save("Naraka.png")
				break
			case "b":
				isBorder = !isBorder
				break
			case " ":
				stop = !stop
				stop ? p.noLoop() : p.loop()
				break
			default:
				px = Number(p.key)
				if (px > 0) p.pixelDensity(px)
				break
		}
	}

	p.mouseMoved = () =>
		p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height
			? p.loop()
			: p.noLoop()
}

export default Naraka
