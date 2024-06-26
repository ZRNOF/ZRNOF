"use client"

import { Box, Grid, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import { PropsWithChildren, useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Center, P5Sketch } from "../components"
import infos, { Infos } from "./infos"

const Works = () => (
	<>
		{infos.map((info, index) => (
			<Section key={info.id}>
				<Grid columns="10" rows="1" align="center" px="7" className="full">
					<Description info={info} />
					<Display index={index} info={info} />
				</Grid>
			</Section>
		))}
	</>
)

const Section = ({ children }: PropsWithChildren) => (
	<Center position="sticky" height="100%">
		<Center
			position="absolute"
			top="0"
			left="0"
			minHeight="100%"
			py="7rem"
			className="full"
		>
			{children}
		</Center>
	</Center>
)

const Description = ({ info }: { info: Infos }) => (
	<Box
		gridColumnStart="1"
		gridColumnEnd={{ initial: "11", sm: "6" }}
		gridRow="1"
		p="2"
		pr={{ initial: "0", sm: "7" }}
		className="z-10 bg-[#000000E7] md:bg-transparent text-white md:text-[var(--fg-color)] pointer-events-none"
	>
		<Heading size={{ initial: "3", xs: "5", sm: "7" }} align="center">
			{info.title}
		</Heading>
		<hr className="my-2 hidden md:block" />
		<Text className="hidden md:inline">{info.desc}</Text>
	</Box>
)

const Display = ({ index, info }: { index: number; info: Infos }) => {
	const isSmallScreen = useMediaQuery({ maxWidth: 640 })
	const [enableP5Sketch, setEnableP5Sketch] = useState(true)
	useEffect(() => setEnableP5Sketch(!isSmallScreen), [isSmallScreen])

	return (
		<Box
			gridColumnStart={{ initial: "1", sm: "6" }}
			gridColumnEnd="11"
			gridRow="1"
			width="100%"
			maxHeight={{ initial: "", xs: "80%" }}
			className="relative aspect-square overflow-hidden outline outline-8 outline-[#ccc]"
		>
			<Image
				src={info.preview}
				alt=""
				width={0}
				height={0}
				placeholder="blur"
				priority={index === 0}
				className="absolute full object-cover sm:transition-opacity sm:duration-500 sm:hover:opacity-0"
			/>
			{enableP5Sketch && (
				<P5Sketch className="full" sketch={info.sketch} id={info.id} p5flex />
			)}
			<Link
				className="text-xs px-2 py-1 bg-black text-white source-button bottom-0 right-0 absolute"
				href={info.href}
				target="_blank"
			>
				View code
			</Link>
		</Box>
	)
}

export default Works
