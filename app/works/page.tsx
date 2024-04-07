"use client"

import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import infos from "./infos"

const WorksPage = () => {
	return (
		<Flex
			position="fixed"
			top="0"
			left="0"
			width="100dvw"
			height="100dvh"
			justify="center"
			overflowY="scroll"
		>
			<Box width="100%" height="100%" maxWidth="1136px">
				{infos.map((info) => {
					return (
						<Grid
							key={info.id}
							columns="repeat(10, 1fr)"
							rows="repeat(1, 1fr)"
							align="center"
							width="100%"
							height="100%"
							py="7rem"
							px="4rem"
						>
							<Box
								gridColumnStart="1"
								gridColumnEnd={{ initial: "11", sm: "6" }}
								gridRow="1"
								p="2"
								pr={{ initial: "0", sm: "7" }}
								className="z-10 bg-[#000000E7] md:bg-transparent text-white md:text-[var(--fg-color)] pointer-events-none"
							>
								<Heading as="h2" align="center">
									{info.title}
								</Heading>
								<hr className="my-2 hidden md:block" />
								<Text className="hidden md:inline">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Adipisci ea necessitatibus quod eaque, laudantium, odit
									consequuntur illo quia corporis reprehenderit saepe explicabo
									assumenda libero eveniet commodi, natus perspiciatis facere
									maiores?
								</Text>
							</Box>
							<Box
								gridColumnStart={{ initial: "1", sm: "6" }}
								gridColumnEnd="11"
								gridRow="1"
								id={info.id}
								width="100%"
								maxHeight={{ initial: "", xs: "80%" }}
								className="relative aspect-square overflow-hidden outline outline-8 outline-[#ccc]"
							>
								<Preview src={info.preview} />
								<ViewCodeButton href={info.href} />
							</Box>
						</Grid>
					)
				})}
			</Box>
		</Flex>
	)
}

const Preview = ({ src }: { src: string }) => {
	return (
		<Image
			src={src}
			loading="lazy"
			alt=""
			width={1024}
			height={1024}
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
