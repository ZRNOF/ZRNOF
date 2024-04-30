"use client"

import { Grid } from "@radix-ui/themes"
import { Container } from "../components"
import { Description, Display, Section } from "./components"
import infos from "./infos"

const WorksPage = () => (
	<Container>
		{infos.map((info, index) => (
			<Section key={info.id}>
				<Grid columns="10" rows="1" align="center" px="7" className="full">
					<Description info={info} />
					<Display index={index} info={info} />
				</Grid>
			</Section>
		))}
	</Container>
)

export default WorksPage
