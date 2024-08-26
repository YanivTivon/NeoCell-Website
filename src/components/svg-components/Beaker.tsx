import * as React from 'react';

import type { SVGProps } from "react";
const BeakerIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		fill="none"
		viewBox="-10 0 140 180"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={14}
			d="M44 7v37.284c0 1.737 0 2.606-.265 3.297a3.75 3.75 0 0 1-1.106 1.584c-.558.486-1.462.817-3.268 1.48C16.39 59.058 0 81.114 0 107c0 33.137 26.863 60 60 60s60-26.863 60-60c0-25.885-16.391-47.941-39.36-56.356-1.807-.662-2.711-.993-3.269-1.479a3.75 3.75 0 0 1-1.106-1.584C76 46.891 76 46.021 76 44.284V7.001M32 7h56"
		/>
	</svg>
);
export default BeakerIcon;
