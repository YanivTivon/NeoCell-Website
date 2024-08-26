import * as React from 'react';

import type { SVGProps } from "react";
const SvgHexCells = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={480}
		height={925}
		fill="none"
		{...props}
	>
		<g filter="url(#HexCells_svg__a)">
			<path
				fill="#08F"
				fillRule="evenodd"
				d="m160.215 0 160.214 92.5v185l-1.04.601 160.04 92.399v185l-159.174 91.899.174.101v185L160.215 925 0 832.5v-185l159.174-91.899-.174-.101v-185l1.04-.601L0 277.5v-185z"
				clipRule="evenodd"
			/>
		</g>
		<text textAnchor="center" x="125" y="175" fill="black">
			Adsadasd
		</text>
		<defs>
			<filter
				id="HexCells_svg__a"
				width={479.429}
				height={929}
				x={0}
				y={0}
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feColorMatrix
					in="SourceAlpha"
					result="hardAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={4} />
				<feGaussianBlur stdDeviation={2} />
				<feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
				<feBlend in2="shape" result="effect1_innerShadow_221_86" />
			</filter>
		</defs>
	</svg>
);
export default SvgHexCells;
