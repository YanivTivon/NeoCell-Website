import cn from "@/utilities/cn";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";

import { NavItem } from "./NavItem";
import { SectionId } from "./types";

const NAV_MENU_CLASSES = {
	default: "justify-between items-center",
	collapsed: cn(
		"w-full sm:w-72 flex-1 bg-white fixed right-0 top-full flex-col gap-12 rounded justify-between px-8 py-8 mt-1 me-0 sm:me-1 shadow-lg"
	),
};

type SetActiveLink = (linkName: SectionId) => void;
interface LinkListProps {
	isCollapsed: boolean;
	setActiveLink: SetActiveLink;
	activeLink: SectionId;
}
const LinkList = ({
	isCollapsed,
	setActiveLink,
	activeLink,
}: LinkListProps) => {
	return (
		<motion.ul
			className={cn(
				"flex gap-8",
				isCollapsed ? NAV_MENU_CLASSES.collapsed : NAV_MENU_CLASSES.default
			)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<NavItem
				onSetLink={setActiveLink}
				isActive={activeLink === "#about"}
				label="About"
				link="#about"
				isCollapsed={isCollapsed}
			/>
			<NavItem
				onSetLink={setActiveLink}
				isActive={activeLink === "#technology"}
				label="Technology"
				link="#technology"
				isCollapsed={isCollapsed}
			/>
			<NavItem
				onSetLink={setActiveLink}
				isActive={activeLink === "#meet-the-team"}
				label="Meet The Team"
				link="#meet-the-team"
				isCollapsed={isCollapsed}
			/>
			{/* TODO Need real email address */}
			<li>
				<motion.a
					aria-label="Send mail"
					href="mailto: mail@mail.com"
					className="bg-blue-700 px-8 py-2 rounded-lg transition-all ease-in-out hover:bg-blue-500 hover:text-blue-950 text-white  shadow hover:shadow-md whitespace-nowrap"
					whileHover={{ y: -2 }}
					transition={{
						duration: 0.15,
					}}
				>
					Contact Us
				</motion.a>
			</li>
		</motion.ul>
	);
};

type MenuToggleProps = Pick<MenuStateProps, "handleSetVisible" | "isVisible">;
const MenuToggle = ({ handleSetVisible, isVisible }: MenuToggleProps) => {
	return (
		<button
			onMouseDown={handleSetVisible}
			className="flex justify-center w-6 h-6"
		>
			<FontAwesomeIcon
				className={cn(
					"w-full h-full",
					isVisible ? "text-blue-500" : "text-header-blue-500"
				)}
				icon={faBars}
			/>
		</button>
	);
};

type MenuStateProps = LinkListProps & {
	isVisible: boolean;
	handleSetVisible: () => void;
};
const MenuState = ({ isCollapsed, isVisible, ...props }: MenuStateProps) => {
	return (
		<>
			<AnimatePresence mode="wait">
				{isCollapsed && !isVisible ? (
					<MenuToggle
						key="menu-toggle"
						handleSetVisible={props.handleSetVisible}
						isVisible={isVisible}
					/>
				) : (
					<LinkList
						key="link-list"
						isCollapsed={isCollapsed}
						setActiveLink={props.setActiveLink}
						activeLink={props.activeLink}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

interface NavMenuProps {
	setActiveLink: (linkName: SectionId) => void;
	activeLink: SectionId;
}
export const NavMenu = ({ setActiveLink, activeLink }: NavMenuProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const [mounted, setMounted] = useState(false);

	const handleToggleVisible = () => setIsVisible(!isVisible);
	const handleClickOutside = () => isVisible && setIsVisible(false);

	const ref = useRef<HTMLDivElement>(null);
	useOnClickOutside(ref, handleClickOutside);

	const { width } = useWindowSize();
	const isCollapsed = width <= 768;

	useEffect(() => {
		if (isCollapsed) {
			setIsVisible(false);
		}
		setMounted(true);
	}, [isCollapsed]);

	if (!mounted) {
		return null;
	}

	const handleLinkChange = (linkName: SectionId) => {
		if (isCollapsed) {
			setIsVisible(false);
		}
		setActiveLink(linkName);
	};

	return (
		<div ref={ref} className="w-fit relative">
			<MenuState
				isCollapsed={isCollapsed}
				isVisible={isVisible}
				setActiveLink={handleLinkChange}
				handleSetVisible={handleToggleVisible}
				activeLink={activeLink}
			/>
		</div>
	);
};
