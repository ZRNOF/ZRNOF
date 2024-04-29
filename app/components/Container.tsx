import { Box, Flex } from "@radix-ui/themes"
import { PropsWithChildren } from "react"
import ResizeHeight from "./ResizeHeight"
import SmoothScrolling from "./SmoothScrolling"

const Container = ({ children }: PropsWithChildren) => (
	<SmoothScrolling>
		<ResizeHeight duration={500} />
		<Box position="absolute" top="0" left="0" className="full">
			<Flex justify="center" className="full bg-[var(--bg-color)]">
				<Box maxWidth="1136px" className="full">
					{children}
				</Box>
			</Flex>
		</Box>
	</SmoothScrolling>
)

export default Container
