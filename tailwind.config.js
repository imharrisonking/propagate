/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-maison-neue)'],
				mono: ['var(--font-roboto-mono)'],
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFFFFF',
			black: '#000000',
			grey: {
				300: '#9D9D9D',
				400: '#676769',
				500: '#424242',
				950: '#1C1C1C',
			},
			green: {
				300: '#A1FFCD',
				700: '#478978',
			},
		},
	},
	plugins: [],
};
