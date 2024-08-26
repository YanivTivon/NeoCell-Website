"use client";

import { ActiveLinkContext } from "@/context/ActiveLinkProvider";
import cn from "@/utilities/cn";
import Image from "next/image";
import { useContext, useState } from "react";

import { NavMenu } from "./NavMenu";
import { SectionId } from "./types";

const BACKGROUND_CLASSES =
	"border-white bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm";

const navHeight = cn(`h-16`);

export const NavBar = () => {
	// const [activeLink, setActiveLink] = useState<SectionId>("");

	const [activeLink, setActiveLink] = useContext(ActiveLinkContext)!;

	const handleActiveLinkChange = (linkName: SectionId) => {
		setActiveLink(linkName);
	};

	return (
		<nav
			className={cn(
				"sticky top-0 z-50 shadow-lg border w-full px-4 sm:px-8 md:px-12 xl:px-24",
				BACKGROUND_CLASSES
			)}
		>
			<div
				className={cn(
					"relative page-width mx-auto flex justify-between items-center",
					navHeight
				)}
			>
				<a
					href="#landing-page"
					className="h-auto max-w-28"
					onClick={() => setActiveLink("")}
				>
					<img alt="NellCell Logo" src={"/NeoCellLogo.png"} />
				</a>
				<NavMenu
					setActiveLink={handleActiveLinkChange}
					activeLink={activeLink}
				/>
			</div>
		</nav>
	);
};
