"use client";

import { createContext, useEffect, useState } from "react";

type AnchorLinkClickType = [
	boolean,
	React.Dispatch<React.SetStateAction<boolean>>
];

// TODO Probably a better way to do this, look at after animating page change/nav change
export const AnchorLinkClickContext = createContext<
	AnchorLinkClickType | undefined
>(undefined);

export const AnchorLinkClickProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [anchorLinkClick, setAnchorLinkClick] = useState<boolean>(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (anchorLinkClick) {
				setAnchorLinkClick(false);
			}
		}, 400);

		return () => {
			clearTimeout(timeout);
		};
	}, [anchorLinkClick]);

	useEffect(() => {
		console.log(anchorLinkClick);
	}, [anchorLinkClick]);

	return (
		<AnchorLinkClickContext.Provider
			value={[anchorLinkClick, setAnchorLinkClick]}
		>
			{children}
		</AnchorLinkClickContext.Provider>
	);
};
