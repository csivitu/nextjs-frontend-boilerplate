import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			//add other properties to in the extend object to add extra util classes to tailwind
			//sample colors
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				slotBookDateColor: "#3E3E3E",
				slotBookDateColorHover: "#1E1E1E",
				slotBookTime: "#1E1E1E",
				slotBookTimeGreen: "#30D158",
				slotBookTimeRed: "#FF453A",
			},
			//custom breakpoints for better responsive design
			screens: {
				mobile: "320px",
				tab: "768px",
				laptopS: "1024px",
				laptopM: "1440px",
			},
		},
	},
	plugins: [],
};
export default config;
