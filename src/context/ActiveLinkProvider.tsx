"use client";

import { SectionAnchor } from "@/types";
import { createContext, useState } from "react";

type ActiveLinkContextType = [
	SectionAnchor,
	React.Dispatch<React.SetStateAction<SectionAnchor>>
];

export const ActiveLinkContext = createContext<
	ActiveLinkContextType | undefined
>(undefined);

export const ActiveLinkProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [activeLink, setActiveLink] = useState<SectionAnchor>("");

	return (
		<ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
			{children}
		</ActiveLinkContext.Provider>
	);
};
