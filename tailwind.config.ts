import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"dark-blue": {
					500: "#1F345A",
				},
				"mid-grey": {
					500: "#708090",
				},
				"dark-grey": {
					500: "#36454F",
				},
				"river-blue": {
					500: "#66C7EA",
				},
				"sky-blue": {
					500: "#E0F0FF",
				},
				"header-blue": {
					500: "#07338C",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			backdropFilter: {
				none: "none",
				blur: "blur(10px)",
				brightness: "brightness(1.5)",
			},
		},
	},
	variants: {
		extend: {
			backdropFilter: ["responsive", "hover", "focus"],
		},
	},
	plugins: [require("tailwindcss-filters")],
};
export default config;
