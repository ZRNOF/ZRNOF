"use client"

import { Box, Container, Flex, Heading } from "@radix-ui/themes"
import Link from "next/link"
import { useState } from "react"
import { CollapsedNavbar, Navbar, NavbarToggle } from "./Navbar"

const links: { label: string; href: string }[] = [
	{ label: "About", href: "/" },
	{ label: "Works", href: "/works" },
	{ label: "Contact", href: "/contact" },
]

const Header = () => {
	const [isExpand, setIsExpand] = useState(false)
	const handleClick = () => setIsExpand(false)
	return (
		<Flex
			id="header"
			position="fixed"
			width="100%"
			height="7rem"
			top="0"
			className="z-50 bg-gradient-to-b from-[var(--bg-color)] from-50% via-transparent"
		>
			<Container px="7">
				<Flex justify="between" align="center" className="h-16">
					<Box>
						<Heading className="text-[var(--fg-color)]">
							<Link href="/">ZRNOF</Link>
						</Heading>
					</Box>
					<Navbar links={links} onClick={handleClick} />
					<NavbarToggle
						isExpand={isExpand}
						onClick={() => setIsExpand(!isExpand)}
					/>
				</Flex>
				{isExpand && <CollapsedNavbar links={links} onClick={handleClick} />}
			</Container>
		</Flex>
	)
}

export default Header
