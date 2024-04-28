"use client"

import { useEffect } from "react"

const smoothstep = (edge0: number, edge1: number, x: number) => {
	x = Math.max(0, Math.min((x - edge0) / (edge1 - edge0), 1))
	return x * x * (3 - 2 * x)
}

const smoothlerp = (start: number, end: number, t: number) => {
	const s = smoothstep(0, 1, t)
	return start + s * (end - start)
}

const ResizeHeight = ({ duration }: { duration: number }) => {
	useEffect(() => {
		const resizeElementsHeight = () => {
			const targetHeight = window.innerHeight
			let currentHeight = document.body.clientHeight

			let startTime: number | null = null

			const animate = (timestamp: number) => {
				if (!startTime) startTime = timestamp
				const progress = timestamp - startTime
				const t = Math.min(progress / duration, 1)
				const newHeight = smoothlerp(currentHeight, targetHeight, t)
				document.documentElement.style.height = newHeight + "px"
				document.body.style.height = newHeight + "px"
				if (t < 1) requestAnimationFrame(animate)
			}

			requestAnimationFrame(animate)
		}

		resizeElementsHeight()
		window.addEventListener("resize", resizeElementsHeight)

		return () => window.removeEventListener("resize", resizeElementsHeight)
	}, [duration])

	return null
}

export default ResizeHeight
