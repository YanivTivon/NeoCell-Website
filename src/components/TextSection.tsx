import { HeaderSizeOptions, ParagraphSizeOptions } from "@/types";

import { Paragraph } from "./Paragraph";

const header = (headerText: string, headerSize: HeaderSizeOptions | null) => {
	switch (headerSize) {
		case "h1":
			return <h1>{headerText}</h1>;
		case "h2":
			return <h2>{headerText}</h2>;
		case "h3":
			return <h3>{headerText}</h3>;
		default:
			return <h2>{headerText}</h2>;
	}
};

type TextSectionProps = {
	children: string;
	headerSize: HeaderSizeOptions | null;
	paragraphSize?: ParagraphSizeOptions;
	justifyParagraph?: boolean;
} & (
	| { noHeader: true; headerText?: never }
	| {
			noHeader?: false;
			headerText: string;
	  }
);
export const TextSection = ({
	headerSize,
	headerText,
	paragraphSize,
	children,
	justifyParagraph,
	noHeader,
}: TextSectionProps) => {
	return (
		<div className="flex flex-col gap-3">
			{!noHeader && headerText && header(headerText, headerSize)}
			<Paragraph size={paragraphSize} justify={justifyParagraph}>
				{children}
			</Paragraph>
		</div>
	);
};
