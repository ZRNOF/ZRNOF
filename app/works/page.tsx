import type { Metadata } from "next"
import { Container } from "../components"
import Works from "./Works"

export const metadata: Metadata = {
	title: "Zaron Chen | ZRNOF - Works",
	description: "Welcome to Zaron Chen's creative coding world!",
	icons: {
		icon: ["/favicon.svg"],
	},
	openGraph: {
		title: "Zaron Chen | ZRNOF - Works",
		description: "Welcome to Zaron Chen's creative coding world!",
		url: "https://zaron.art/",
		siteName: "ZRNOF",
		images: [
			{
				url: "https://zaron.art/UnifiedRupture.png",
			},
		],
	},
}

const WorksPage = () => (
	<Container>
		<Works />
	</Container>
)

export default WorksPage
