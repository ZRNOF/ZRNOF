"use client"

import { Box, Grid, GridProps, Heading } from "@radix-ui/themes"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { Center, P5Sketch } from "./components"
import Welcome from "./Welcome"

const About = () => {
	const [unlock, setUnlock] = useState(false)
	useEffect(() => {
		const timeout = setTimeout(() => setUnlock(true), 500)
		return () => clearTimeout(timeout)
	}, [unlock])

	if (!unlock) return null
	return (
		<Center px={{ initial: "0", xs: "7" }} className="full">
			<IntroSection />
			<CanvasSection />
		</Center>
	)
}

const Section = ({ children, ...rest }: GridProps) => (
	<Grid
		position="absolute"
		top="0"
		maxWidth="1136px"
		overflow="hidden"
		align="center"
		minHeight="100%"
		width="100%"
		pt="4rem"
		{...rest}
	>
		{children}
	</Grid>
)

const IntroFadeInMove = keyframes`to { opacity: 1; transform: translateY(0); }`
const IntroFadeInStay = keyframes`100% { opacity: 1; transform: translateY(0); }`
const Intro = styled(Box)`
	opacity: 0;
	transform: translateY(3rem);
	animation: ${IntroFadeInMove} 2s ease 3s forwards;

	@media screen and (max-width: 1023px) {
		animation: ${IntroFadeInStay} 2s ease 3s forwards;
	}
`
const IntroSection = () => (
	<Section columns="20" rows="1">
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
				<Box mb="3">
					Hi there! My name is Zaron Chen, a Creative Coder, Generative Artist,
					and Front-end Developer based in Taiwan, a stunning island embraced by
					the sea. I have been delving into Creative Coding since 2022. My
					primary tools for crafting art include p5.js, GLSL, TouchDesigner, and
					some custom libraries I&apos;ve developed during my spare moments.
				</Box>
				<Box mb="3">
					Recently, I have been working on developing tools and contributing to
					the Creative Coding community. I also have some experience in both
					front-end and back-end development, such as building this personal
					website using React and Next.js. If you&apos;d like to add some fun to
					your website or are interested in collaborating, feel free to contact
					me! Thank you for taking the time to get to know me!
				</Box>
			</Grid>
			<hr />
		</Intro>
	</Section>
)

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
const CanvasBlur = keyframes`
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
		animation: ${CanvasBlur} 6s forwards;
	}
`
const CanvasSection = () => (
	<Section columns="20" rows="1">
		<Box gridColumnStart="6" gridColumnEnd="21" gridRow="1" height="600px">
			<Canvas
				className="aspect-square h-full"
				sketch={Welcome}
				id="welcome"
				p5flex
			/>
		</Box>
	</Section>
)

export default About
