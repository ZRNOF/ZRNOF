// Travel © 2023-02-08 by Zaron Chen is licensed under CC BY-NC-SA 3.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/3.0/

import p5Types from "p5"
import { frag, vert } from "./shader"

const Travel = (p: p5Types, parentId: string) => {
	const parent = document.getElementById(parentId) as HTMLDivElement

	let theShader: p5Types.Shader
	let Buffer: any
	let img0: p5Types.Image, img1: p5Types.Image, img2: p5Types.Image
	let [resW, resH] = [512, 512]
	let [deltaX, deltaY] = [0, 0]

	p.preload = () => {
		img0 = p.loadImage("/Rain_Window_01.jpg")
		img1 = p.loadImage("/Tunnel_01.jpg")
		img2 = p.loadImage("/The_Dome_of_Light_02.jpg")
	}

	p.setup = () => {
		if (p.windowWidth < p.windowHeight) [resW, resH] = [resH, resW]
		p.createCanvas(resW, resH, p.WEBGL)
		p.flex({
			container: { parent },
			canvas: { fit: p.COVER },
			stylePage: false,
		})
		p.pixelDensity(1)
		Buffer = p.createFramebuffer({ format: p.FLOAT })
		theShader = p.createShader(vert, frag)
		p.noStroke()
		p.imageMode(p.CENTER)
		p.background(51)

		p.noLoop()
	}

	p.draw = () => {
		deltaX += p.map(p.mouseX, 0, p.width, 0.005, -0.005)
		deltaY += p.map(p.mouseY, 0, p.height, 0.005, -0.005)
		Buffer.draw(() => {
			p.shader(theShader)
			theShader.setUniform("iResolution", [p.width, p.height])
			theShader.setUniform("iPixelDensity", p.pixelDensity())
			theShader.setUniform("iImage0", img0)
			theShader.setUniform("iImage1", img1)
			theShader.setUniform("iImage2", img2)
			theShader.setUniform("iMouse", [p.mouseX, p.mouseY])
			theShader.setUniform("iTime", p.frameCount)
			theShader.setUniform("iDelta", [deltaX, deltaY])
			p.rect(0, 0, p.width, p.height)
		})

		p.image(Buffer, 0, 0)
	}

	const Border = (color: string, weight: number) => {
		p.push()
		p.noFill()
		p.stroke(color)
		p.strokeWeight(weight * 2)
		p.rectMode(p.CENTER)
		p.rect(0, 0, p.width, p.height)
		p.pop()
	}

	p.mouseMoved = () => {
		p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height
			? p.loop()
			: p.noLoop()
	}
}

export default Travel
