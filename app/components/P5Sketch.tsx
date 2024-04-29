"use client"

import p5Types from "p5"
import { mountFlex } from "p5.flex"
import { useEffect, useRef, useState } from "react"

interface P5SketchProps {
	sketch: (p: p5Types, parentId: string) => void
	id: string
	className?: string
	p5flex?: boolean
}

const P5Sketch = ({ sketch, id, className, p5flex = false }: P5SketchProps) => {
	const p5Ref = useRef<HTMLDivElement>(null)
	const sketchInstance = useRef<p5Types | null>(null)
	const [isMounted, setIsMounted] = useState<boolean>(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (!isMounted) return
		const init = async () => {
			try {
				const p5 = (await import("p5")).default
				mountFlex(p5)
				const instance = p5flex
					? new p5((p) => sketch(p, id))
					: new p5((p) => sketch(p, id), p5Ref.current!)
				sketchInstance.current = instance
			} catch (error) {
				console.log(error)
			}
		}
		init()
		return () => {
			sketchInstance.current && sketchInstance.current.remove()
		}
	}, [isMounted, sketch, p5flex, id])

	return <div {...{ id, className }} ref={p5flex ? undefined : p5Ref}></div>
}

export default P5Sketch
