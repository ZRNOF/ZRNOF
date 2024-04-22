import { Container, Flex, Text } from "@radix-ui/themes"

const Footer = () => {
	return (
		<Flex
			position="fixed"
			className="z-50 bottom-0 w-full h-28 bg-gradient-to-t from-[var(--bg-color)] from-50% via-transparent"
			align="end"
		>
			<Container>
				<Flex
					direction={{ initial: "column", xs: "row" }}
					justify="center"
					align="center"
					className="h-16"
					gap="1"
				>
					<Text className="text-[var(--fg-color)] text-[10px]">
						Copyright © 2024 Zaron Chen.
					</Text>
					<Text className="text-[var(--fg-color)] text-[10px]">
						All rights reserved.
					</Text>
				</Flex>
			</Container>
		</Flex>
	)
}

export default Footer
