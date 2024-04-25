"use client"

import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import infos, { Infos } from "./infos"
import P5Sketch from "../components/P5Sketch"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { PropsWithChildren } from "react"
import Container from "../components/Container"

const WorksPage = () => {
	return (
		<Container>
			{infos.map((info, index) => (
				<Section key={info.id}>
					<Grid
						columns="repeat(10, 1fr)"
						rows="repeat(1, 1fr)"
						align="center"
						width="100%"
						height="100dvh"
						py="7rem"
						px="7"
					>
						<Description info={info} />
						<Display index={index} info={info} />
					</Grid>
				</Section>
			))}
		</Container>
	)
}

const Section = ({ children }: PropsWithChildren) => (
	<Flex position="sticky" justify="center" align="center" height="100dvh">
		<Flex
			position="absolute"
			top="0"
			left="0"
			justify="center"
			align="center"
			minHeight="100%"
			py="7rem"
			className="full"
		>
			{children}
		</Flex>
	</Flex>
)

const Description = ({ info }: { info: Infos }) => {
	return (
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
}

const Display = ({ index, info }: { index: number; info: Infos }) => {
	return (
		<Box
			gridColumnStart={{ initial: "1", sm: "6" }}
			gridColumnEnd="11"
			gridRow="1"
			width="100%"
			maxHeight={{ initial: "", xs: "80%" }}
			className="relative aspect-square overflow-hidden outline outline-8 outline-[#ccc]"
		>
			<Preview src={info.preview} index={index} />
			<P5Sketch
				className="w-full h-full"
				sketch={info.sketch}
				id={info.id}
				p5flex
			/>
			<ViewCodeButton href={info.href} />
		</Box>
	)
}

const Preview = ({ src, index }: { src: StaticImport; index: number }) => {
	return (
		<Image
			src={src}
			alt=""
			width={1024}
			height={1024}
			priority={index === 0}
			className="absolute w-full h-full object-cover transition-opacity duration-500 hover:opacity-0"
		/>
	)
}

const ViewCodeButton = ({ href }: { href: string }) => {
	return (
		<Link
			className="text-xs px-2 py-1 bg-black text-white source-button bottom-0 right-0 absolute"
			href={href}
			target="_blank"
		>
			View code
		</Link>
	)
}

export default WorksPage
