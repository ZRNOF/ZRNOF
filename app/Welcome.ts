/**
 * Author: Zaron Chen
 * LICENSE: Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
 * See the full text of the license here:
 * https://creativecommons.org/licenses/by-nc-sa/3.0/
 */

import p5Types from "p5"
import { createNoise4D } from "simplex-noise"

const Welcome = (p: p5Types, parentId: string) => {
	const simplexNoiseSeed = p.random()
	const noise4D = createNoise4D(() => simplexNoiseSeed)
	const speed = 0.01
	const radius = 150
	const amount = 200
	const weiRange = 100
	const circleSize = 10
	const isCurve = true
	let isShowCircle = false
	const parent = document.getElementById(parentId) as HTMLDivElement

	const getTheme = () => ({
		fgColor: getComputedStyle(document.documentElement).getPropertyValue(
			"--fg-color"
		),
		bgColor: getComputedStyle(document.documentElement).getPropertyValue(
			"--bg-color"
		),
	})

	p.setup = () => {
		p.createCanvas(600, 600)

		p.noFill()
		p.flex({
			container: { parent },
			canvas: { fit: p.COVER },
			stylePage: false,
		})
	}

	p.draw = () => {
		const t = p.frameCount * speed
		const { fgColor, bgColor } = getTheme()
		p.background(bgColor)
		p.stroke(fgColor)
		const noiseWeight = p.map(p.mouseX, 0, p.width, -weiRange, weiRange, true)

		const angle =
			t <= 3 ? p.PI : p.map(p.mouseY, 0, p.height, -p.PI, p.PI, true)
		p.translate(p.width / 2, p.height / 2)
		p.rotate(angle)
		drawNobo(radius, noiseWeight, amount, circleSize, t)
	}

	const drawNobo = (
		radius: number,
		noiseWeight: number,
		amount: number,
		circleSize: number,
		t: number
	) => {
		p.push()
		p.beginShape()
		for (
			let i = 0;
			i < (p.TWO_PI / amount) * (amount + 3);
			i += p.TWO_PI / amount
		) {
			const x = p.cos(i) * radius
			const y = p.sin(i) * radius
			const nx = noise4D(x + 100, y + 200, p.cos(t), p.sin(t)) * noiseWeight
			const ny = noise4D(x + 300, y + 400, p.cos(t), p.sin(t)) * noiseWeight
			if (isCurve) p.curveVertex(x + nx, y + ny)
			else p.vertex(x + nx, y + ny)
			if (isShowCircle) p.circle(x + nx, y + ny, circleSize)
		}
		p.endShape()
		p.pop()
	}

	p.mousePressed = () => {
		isShowCircle = !isShowCircle
	}
}

export default Welcome
