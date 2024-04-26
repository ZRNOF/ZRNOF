import { StaticImageData } from "next/image"
import p5Types from "p5"
import * as previews from "./previews"
import * as sketches from "./sketches"

export interface Infos {
	id: string
	title: string
	desc: string
	href: string
	preview: StaticImageData
	sketch: (p: p5Types, parentId: string) => void
}

const infos: Infos[] = [
	{
		id: "UnifiedRupture",
		title: "Unified Rupture",
		desc: "Unified Rupture aims to create a visual experience where fusion and fragmentation coexist harmoniously. Employing noise to warp conical gradients, it presents visual elements with a sense of interconnectedness amid fractured segments.",
		href: "https://openprocessing.org/sketch/1898796",
		preview: previews.UnifiedRupture,
		sketch: sketches.UnifiedRupture,
	},
	// {
	// 	id: "Travel",
	// 	title: "Travel",
	// 	desc: "Travel is essentially a photo slideshow that utilizes noise to create domain warping effects, resulting in a marble-like, flowing appearance.",
	// 	href: "https://openprocessing.org/sketch/1826376",
	// 	preview: previews.Travel,
	// 	sketch: sketches.Travel,
	// },
	{
		id: "DraculaAndTheUndead",
		title: "Dracula and the Undead",
		desc: "As the title suggests, I aim to encapsulate the atmosphere of fresh blood akin to Dracula with vibrant red hues, while cyan tones represent the icy chill of the undead. Deliberately contrasting the two, I've created a vivid interplay symbolizing their inherent conflict.",
		href: "https://openprocessing.org/sketch/1891135",
		preview: previews.DraculaAndTheUndead,
		sketch: sketches.DraculaAndTheUndead,
	},
	{
		id: "SHUTTLE",
		title: "SHUTTLE !",
		desc: "Inspired by Ryoji Ikeda, this generative art piece aims to create visual effects of interweaving, shuttling, and cycling on the screen after initializing random data points.",
		href: "https://openprocessing.org/sketch/1828512",
		preview: previews.SHUTTLE,
		sketch: sketches.SHUTTLE,
	},
	{
		id: "Naraka",
		title: "Naraka",
		desc: "In Sanskrit, Naraka translates to 'hell'. In the pitch-black environment, the incessant white mist creeping out in the background represents the whispers of the dead. From the top, white spider silk descends, repeatedly breaking and falling, symbolizing the cycle of reincarnation.",
		href: "https://openprocessing.org/sketch/1914052",
		preview: previews.Naraka,
		sketch: sketches.Naraka,
	},
]

export default infos
