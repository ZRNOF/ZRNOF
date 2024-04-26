"use client"

import { Box, Flex, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import { PropsWithChildren } from "react"
import P5Sketch from "../components/P5Sketch"
import { Infos } from "./infos"

export const Section = ({ children }: PropsWithChildren) => (
	<Flex position="sticky" justify="center" align="center" height="100%">
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

export const Description = ({ info }: { info: Infos }) => {
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

export const Display = ({ index, info }: { index: number; info: Infos }) => {
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
				width={512}
				height={512}
				priority={index === 0}
				className="absolute full object-cover transition-opacity duration-500 hover:opacity-0"
			/>
			<P5Sketch className="full" sketch={info.sketch} id={info.id} p5flex />
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
