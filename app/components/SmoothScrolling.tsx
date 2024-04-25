"use client"

import gsap from "gsap"
import { ReactLenis } from "lenis/react"
import { PropsWithChildren, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SmoothScrolling = ({ children }: PropsWithChildren) => {
	useEffect(() => {
		// from https://codepen.io/akapowl/pen/JjxVVMP by akapowl
		gsap.registerPlugin(ScrollTrigger)
		let direction = 0
		const scroll = ScrollTrigger.create({
			onUpdate: (self) => {
				if (self.direction !== direction) {
					direction = self.direction
					gsap.to("#header", { autoAlpha: direction === 1 ? 0 : 1 })
				}
			},
		})

		return () => {
			scroll.kill()
		}
	}, [])

	return (
		<ReactLenis root options={{ lerp: 0.05 }}>
			{children}
		</ReactLenis>
	)
}

export default SmoothScrolling
