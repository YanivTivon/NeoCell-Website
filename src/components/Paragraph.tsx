import cn from "@/utilities/cn";
import React from "react";

interface ParagraphProps {
	children: React.ReactNode;
	size?: SizeKey;
	justify?: boolean;
}

const SIZE_CLASSES = {
	sm: "text-base lg:text-lg xl:text-lg 2xl:text-xl",
	md: "text-lg lg:text-xl xl:text-xl 2xl:text-2xl",
	lg: "text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl",
};
type SizeKey = keyof typeof SIZE_CLASSES;

export const Paragraph = ({ children, size, justify }: ParagraphProps) => {
	const textSize = size ? SIZE_CLASSES[size] : SIZE_CLASSES.md;

	return (
		<p className={cn(textSize, "font-light", justify && "text-justify")}>
			{children}
		</p>
	);
};
