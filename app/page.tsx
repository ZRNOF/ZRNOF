"use client"

import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes"
import P5Sketch from "./components/P5Sketch"
import Welcome from "./sketch"
import "./theme-config.css"
import styled, { keyframes } from "styled-components"

const Main = styled(Grid)`
	@media screen and (max-width: 1023px) {
		// display: flex;
	}
`

const IntroFadeInShift = keyframes`
	to {
		opacity: 1;
		transform: translateY(0);
	}
`

const introFadeIn = keyframes`
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`

const Intro = styled(Box)`
	opacity: 0;
	transform: translateY(3rem);
	animation: ${IntroFadeInShift} 2s ease 3s forwards;

	@media screen and (max-width: 1023px) {
		animation: ${introFadeIn} 2s ease 3s forwards;
	}
`

const CanvasFadeInShiftRotate = keyframes`
	33% {
		top: 50%;
		left: 33.333%;
		opacity: 1;
		transform: translate(-50%, -50%) rotate(-90deg);
	}
	100% {
		top: 50%;
		left: 100%;
		opacity: 1;
		transform: translate(-90%, -50%);
	}
`

const canvasBlur = keyframes`
	33% {
		opacity: 1;
		filter: blur(0px);
	}
	100% {
		opacity: 1;
		filter: blur(5px);
	}
`

const Canvas = styled(P5Sketch)`
	position: relative;
	top: 50%;
	left: 33.333%;
	transform: translate(-50%, -50%) rotate(-90deg);
	opacity: 0;
	animation: ${CanvasFadeInShiftRotate} 6s forwards;

	@media screen and (max-width: 1023px) {
		position: relative;
		top: 50%;
		left: 33.333%;
		transform: translate(-50%, -50%) rotate(-90deg);
		animation: ${canvasBlur} 6s forwards;
	}
`

const intro1 = `
	Hi there! My name is Zaron Chen and I come from Taiwan, a beautiful
	island surrounded by the sea. I am a Creative Coder and Generative
	Artist, and have been exploring the world of Creative Coding and
	Generative Art since 2022. My main tools for creating art are p5.js,
	processing, glsl, and touchdesigner.
`

const intro2 = `
	Recently, I have been working on developing tools and contribute to
	the Creative Coding and Generative Art community. I am excited to
	continue exploring and pushing the boundaries of what is possible
	with these technologies. Thanks for taking the time to get to know
	me and my work!
`

export default function Home() {
	return (
		<Flex
			px={{ initial: "0", xs: "7" }}
			width="100%"
			height="100%"
			justify="center"
			align="center"
		>
			<Main
				width="100%"
				maxWidth="1136px"
				height="100%"
				columns="20"
				rows="1"
				overflow="hidden"
				align="center"
			>
				<Box gridColumnStart="6" gridColumnEnd="21" gridRow="1" height="600px">
					<Canvas
						className="aspect-square h-full"
						sketch={Welcome}
						id="welcome"
						p5flex
					/>
				</Box>
				<Intro
					gridColumnStart={{ initial: "1", md: "2" }}
					gridColumnEnd={{ initial: "21", md: "11" }}
					gridRow="1"
					p="5"
					className="z-10 text-justify bg-gradient-to-r from-[var(--bg-color)] from-50% via-transparent"
				>
					<Heading as="h2" mb="3">
						Hello world!
					</Heading>
					<Grid
						columns={{ initial: "1", sm: "2", md: "1" }}
						gap={{ initial: "0", sm: "7", md: "0" }}
					>
						<Box mb="3">{intro1}</Box>
						<Box mb="3">{intro2}</Box>
					</Grid>
					<hr />
				</Intro>
			</Main>
		</Flex>
	)
}
