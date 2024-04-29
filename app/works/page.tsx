"use client"

import { Grid } from "@radix-ui/themes"
import { Container } from "../components"
import { Description, Display, Section } from "./components"
import infos from "./infos"

const WorksPage = () => {
	return (
		<>
			<Container>
				{infos.map((info, index) => (
					<Section key={info.id}>
						<Grid
							columns="repeat(10, 1fr)"
							rows="repeat(1, 1fr)"
							align="center"
							width="100%"
							height="100dvh"
							py="7rem"
							px="7"
						>
							<Description info={info} />
							<Display index={index} info={info} />
						</Grid>
					</Section>
				))}
			</Container>
		</>
	)
}

export default WorksPage
