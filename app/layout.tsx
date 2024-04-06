import { Container, Flex, Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "./Footer"
import "./globals.css"
import Header from "./Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "ZRNOF",
	description: "ZRNOF",
	icons: {
		icon: ["/favicon.svg"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.svg" sizes="any" />
			<body className={`${inter.className}`}>
				<Theme>
					<Header />
					<main className="content-wrap">
						<Flex height="100%">
							<Container px="7" height="100%">
								{children}
							</Container>
						</Flex>
					</main>
					<Footer />
				</Theme>
			</body>
		</html>
	)
}
