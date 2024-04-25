import { Flex, Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
		<html lang="en" className="full">
			<link rel="icon" href="/favicon.svg" sizes="any" />
			<body className={`${inter.className}`}>
				<Theme>
					<Header />
					<main className="content-wrap">
						<Flex className="full">{children}</Flex>
					</main>
				</Theme>
			</body>
		</html>
	)
}
