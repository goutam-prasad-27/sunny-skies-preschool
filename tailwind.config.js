/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-background": "url(/src/Assets/background.jpg)",
			},
			colors: {
				primary: "",
				secondary: "",
				background: "#1A3636",
				headText: "#D6BD98",
				//!add more....
			},
		},
	},
	plugins: [],
};
