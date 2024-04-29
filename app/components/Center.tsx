import { Flex, FlexProps } from "@radix-ui/themes"

const Center = ({ children, ...rest }: FlexProps) => (
	<Flex justify="center" align="center" {...rest}>
		{children}
	</Flex>
)

export default Center
