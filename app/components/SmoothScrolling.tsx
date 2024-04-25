"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { PropsWithChildren } from "react"

const SmoothScrolling = ({ children }: PropsWithChildren) => {
	const lenis = useLenis(({ scroll }) => {
		console.log("scroll", scroll)
	})

	return <ReactLenis root>{children}</ReactLenis>
}

export default SmoothScrolling
