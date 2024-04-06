"use client"

import { Box, Flex, Grid } from "@radix-ui/themes"
import P5Sketch from "./components/P5Sketch"
import Welcome from "./sketch"
import "./theme-config.css"
import styles from "./sketch.module.css"

export default function Home() {
	return (
		<Flex px="7" width="100%" height="100%" justify="center" align="center">
			<Grid
				width="100%"
				maxWidth="1136px"
				height="100%"
				columns="20"
				overflow="hidden"
			>
				<Box
					gridColumnStart="1"
					gridColumnEnd="6"
					height="100%"
					overflow="hidden"
					// className="bg-red-600"
				></Box>
				<Box
					gridColumnStart="6"
					gridColumnEnd="21"
					height="100%"
					overflow="hidden"
				>
					<P5Sketch
						className={`aspect-square h-full ${styles.welcome}`}
						sketch={Welcome}
						id="welcome"
						p5flex
					/>
				</Box>
			</Grid>
		</Flex>
	)
}
