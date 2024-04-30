import { Flex, Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Zaron Chen | ZRNOF",
	description: "Welcome to Zaron Chen's creative coding world!",
	icons: {
		icon: ["/favicon.svg"],
	},
	openGraph: {
		title: "Zaron Chen | ZRNOF",
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.svg" sizes="any" />
			<body className={`${inter.className}`}>
				<Theme className="!min-h-full">
					<Header />
					<main className="content-wrap">
						<Flex className="full">{children}</Flex>
					</main>
				</Theme>
			</body>
		</html>
	)
}
