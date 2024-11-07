/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-background": "url(/src/Assets/background.jpg)",
			},
			colors: {
				extraAccent: "#415a77ff",
				background: "#0d1b2aff",
				mainAccent: "#e0e1ddff",
				darkAccent: "#1b263bff",
				lightAccent: "#778da9ff",
			},
			boxShadow: { card: "6px 8px 10px rgba(0, 0, 0,0.2)" },
		},
	},
	plugins: [],
};
