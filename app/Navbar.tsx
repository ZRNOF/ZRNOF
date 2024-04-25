import Link from "next/link"
import { MdOutlineMenu } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"

interface NavbarProps {
	links: { label: string; href: string }[]
	onClick: () => void
}

export const Navbar = ({ links, onClick }: NavbarProps) => {
	return (
		<ul className="hidden sm:flex">
			{links.map((link) => (
				<li key={link.label} className="w-36 text-end">
					<Link href={link.href} className="navbar-link" onClick={onClick}>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	)
}

export const CollapsedNavbar = ({ links, onClick }: NavbarProps) => {
	return (
		<ul className="absolute top-14 left-0 w-full sm:hidden flex flex-col justify-start h-dvh bg-gradient-to-b from-[var(--bg-color)] from-50% via-transparent">
			{links.map((link) => (
				<li key={link.label} className="py-8 text-center">
					<Link href={link.href} className="navbar-link" onClick={onClick}>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	)
}

export const NavbarToggle = ({
	isExpand,
	onClick,
}: {
	isExpand: boolean
	onClick: () => void
}) => {
	const Icon = isExpand ? RxCross2 : MdOutlineMenu
	return (
		<Icon
			size={30}
			className="text-[var(--fg-color)] sm:hidden"
			onClick={onClick}
		/>
	)
}
