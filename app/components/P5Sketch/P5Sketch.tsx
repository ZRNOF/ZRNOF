"use client"

import { useEffect, useRef, useState } from "react"
import p5Types from "p5"
import { mountFlex } from "p5.flex"

interface P5SketchProps {
	sketch: (p: p5Types, parentId: string) => void
	id: string
	className?: string
	p5flex?: boolean
}

const P5Sketch = ({ sketch, id, className, p5flex = false }: P5SketchProps) => {
	const p5Ref = useRef<HTMLDivElement>(null)
	const sketchInitialized = useRef(false)
	const [isMounted, setIsMounted] = useState<boolean>(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (!isMounted) return
		const init = async () => {
			try {
				sketchInitialized.current = true
				const p5 = (await import("p5")).default
				mountFlex(p5)
				p5flex
					? new p5((p) => sketch(p, id))
					: new p5((p) => sketch(p, id), p5Ref.current!)
			} catch (error) {
				console.log(error)
			}
		}
		init()
	}, [isMounted, sketch, p5flex, id])

	return <div {...{ id, className }} ref={p5flex ? undefined : p5Ref}></div>
}

export default P5Sketch
