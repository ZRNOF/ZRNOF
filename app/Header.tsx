"use client"

import { Container, Flex, Heading } from "@radix-ui/themes"
import Link from "next/link"
import { Navbar } from "./Navbar"

const Header = () => (
	<Flex
		id="header"
		position="fixed"
		top="0"
		width="100%"
		height="7rem"
		className="z-50 bg-gradient-to-b from-[var(--bg-color)] from-50% via-transparent"
	>
		<Container px="7">
			<Flex justify="between" align="center" height="4rem">
				<Heading className="text-[var(--fg-color)]">
					<Link href="/">ZRNOF</Link>
				</Heading>
				<Navbar />
			</Flex>
		</Container>
	</Flex>
)

export default Header
