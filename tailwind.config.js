/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				gothic: ['"Special Gothic Expanded One"', "sans-serif"],
			},
			animation: {
				"bounce-slow": "bounce 2s infinite",
				"ping-slow": "ping 4s infinite",
				"pulse-slow": "pulse 5s infinite",
			},
		},
		plugins: [],
	},
};
