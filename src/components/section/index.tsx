"use client";

import { ActiveLinkContext } from "@/context/ActiveLinkProvider";
import { AnchorLinkClickContext } from "@/context/AnchorLinkClick";
import { navbarHeight } from "@/global-styles";
import { SectionAnchor, SectionId } from "@/types";
import cn from "@/utilities/cn";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

const marginTop = `my-${navbarHeight + 4}`;

const SECTION_CLASSES = "min-h-screen min-w-screen flex justify-center";
const CONTAINER_CLASSES = cn(
	`max-w-[1920px] pt-24 pb-6 px-4 sm:px-8 md:px-12 xl:px-24`
);

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	id: SectionId;
	bgColor?: string;
	bgElement?: React.ReactNode;
}
export const Section = ({
	children,
	className,
	id,
	bgColor,
	bgElement,
}: SectionProps) => {
	const ref = useRef<HTMLDivElement>(null)!;
	const isInView = useInView(ref, { amount: 0.25 });

	const activeLinkContextValue = useContext(ActiveLinkContext);
	const anchorLinkClickContextValue = useContext(AnchorLinkClickContext);

	useEffect(() => {
		if (activeLinkContextValue && anchorLinkClickContextValue) {
			const [_, setActiveLink] = activeLinkContextValue;
			const [anchorLinkClick, setAnchorLinkClick] = anchorLinkClickContextValue;
			if (isInView && !anchorLinkClick) {
				const link: SectionAnchor = id ? `#${id}` : "";
				setActiveLink(link);

				const currentUrl = window.location.href;
				const [baseUrl] = currentUrl.split("#");
				window.history.replaceState(null, "", `${baseUrl}#${id}`);
			}
		}
	}, [isInView, id, activeLinkContextValue]);

	return (
		<section id={id} className={cn(SECTION_CLASSES, bgColor)}>
			{bgElement && bgElement}
			<div ref={ref} className={cn(CONTAINER_CLASSES, className)}>
				{children}
			</div>
		</section>
	);
};
