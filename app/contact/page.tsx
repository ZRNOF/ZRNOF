import { Box, Flex } from "@radix-ui/themes"
import Link from "next/link"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const ContactPage = () => {
	const icons = [
		{ icon: FaFacebook, link: "https://www.facebook.com/zaronof" },
		{ icon: FaXTwitter, link: "https://twitter.com/_ZRNOF_" },
		{ icon: FaGithub, link: "https://github.com/ZRNOF" },
		{ icon: FaInstagram, link: "https://www.instagram.com/zrnof/" },
	]

	const links = [
		{ text: "OpenProcessing", href: "https://openprocessing.org/user/324002" },
		{ text: "Shadertoy", href: "https://www.shadertoy.com/user/1095" },
		{ text: "fx(hash)", href: "https://www.fxhash.xyz/u/ZRNOF" },
		{ text: "Cardistry", href: "https://www.instagram.com/zaronof/" },
		{ text: "Email", href: "mailto:zrnof.v838@gmail.com" },
	]

	return (
		<Flex
			position="fixed"
			top="0"
			left="0"
			width="100dvw"
			height="100dvh"
			justify="center"
			overflowX="hidden"
			overflowY="scroll"
		>
			<Box width="100%" height="100%" maxWidth="1136px">
				<Flex
					width="100%"
					height={{ initial: "auto", xs: "100%" }}
					justify={{ initial: "start", xs: "center" }}
					align="center"
					direction="column"
					py="7rem"
					gap="3"
				>
					<Flex maxWidth="500px" justify="center" align="center">
						{icons.map((contactIcon, index) => (
							<Box
								key={index}
								m="2"
								p="2"
								className="t-a-3-ease-out hover:scale-125"
							>
								<Link href={contactIcon.link} target="_blank">
									<contactIcon.icon
										size={30}
										className="text-[var(--text-color)]"
									/>
								</Link>
							</Box>
						))}
					</Flex>
					<Flex
						width="100%"
						maxWidth="500px"
						justify="center"
						align="center"
						direction="column"
						gap="4"
						px="7"
					>
						{links.map((link, index) => (
							<Flex
								key={index}
								width="100%"
								height="2.8rem"
								justify="center"
								align="center"
								className="tracking border-y border-solid border-1 border-[var(--text-color)] t-a-3-ease-out hover-invert rounded-none hover:rounded-md"
							>
								<Link
									href={link.href}
									target="_blank"
									className="text-base font-medium w-full text-center"
								>
									{link.text}
								</Link>
							</Flex>
						))}
					</Flex>
				</Flex>
			</Box>
		</Flex>
	)
}

export default ContactPage
