import type { Metadata } from "next"
import About from "./About"
import { Container } from "./components"
import "./theme-config.css"

export const metadata: Metadata = {
	title: "Zaron Chen | ZRNOF - About",
	description: "Welcome to Zaron Chen's creative coding world!",
	icons: {
		icon: ["/favicon.svg"],
	},
	openGraph: {
		title: "Zaron Chen | ZRNOF - About",
		description: "Welcome to Zaron Chen's creative coding world!",
		url: "https://zaron.art/",
		siteName: "ZRNOF",
		images: [
			{
				url: "https://zaron.art/banner.png",
				width: 1200,
				height: 630,
			},
		],
	},
}

const AboutPage = () => (
	<Container>
		<About />
	</Container>
)

export default AboutPage
