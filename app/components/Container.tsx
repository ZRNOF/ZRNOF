import { Box, Flex } from "@radix-ui/themes"
import { PropsWithChildren } from "react"
import SmoothScrolling from "./SmoothScrolling"

const Container = ({ children }: PropsWithChildren) => {
	return (
		<SmoothScrolling>
			<Box position="absolute" top="0" left="0" className="full">
				<Flex justify="center" className="full">
					<Box maxWidth="1136px" className="full">
						{children}
					</Box>
				</Flex>
			</Box>
		</SmoothScrolling>
	)
}

export default Container
