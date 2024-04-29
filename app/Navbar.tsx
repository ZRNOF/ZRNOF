import Link from "next/link"
import { useEffect, useState } from "react"
import { MdOutlineMenu } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
import { useMediaQuery } from "react-responsive"

const links: { label: string; href: string }[] = [
	{ label: "About", href: "/" },
	{ label: "Works", href: "/works" },
	{ label: "Contact", href: "/contact" },
]

export const Navbar = () => {
	const [isExpand, setIsExpand] = useState(false)
	const [isHorizontal, setIsHorizontal] = useState(true)
	const isSmallScreen = useMediaQuery({ maxWidth: 640 })
	useEffect(() => setIsHorizontal(!isSmallScreen), [isSmallScreen])

	const Icon = isExpand ? RxCross2 : MdOutlineMenu

	const HorUl = "hidden sm:flex"
	const VerUl = `
		absolute top-14 left-0
		w-full h-dvh
		flex flex-col justify-start
		sm:hidden bg-[var(--bg-color)]
		transition-all ease-in-out duration-500
		${isExpand ? "opacity-100 visible" : "opacity-0 invisible"}
	`
	const HorLi = "w-36 text-end"
	const VerLi = "py-8 text-center"

	return (
		<>
			<ul className={isHorizontal ? HorUl : VerUl}>
				{links.map((link) => (
					<li key={link.label} className={isHorizontal ? HorLi : VerLi}>
						<Link
							href={link.href}
							className="navbar-link"
							onClick={() => setIsExpand(false)}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			<Icon
				size={30}
				className="text-[var(--fg-color)] sm:hidden"
				onClick={() => setIsExpand(!isExpand)}
			/>
		</>
	)
}
