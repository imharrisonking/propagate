import { base } from './styles/css/base';

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
				sans: ['Maison Neue', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace'],
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
		fontSize: {
			xs: [base(0.75), { lineHeight: base(1) }], // 12px
			sm: [base(0.875), { lineHeight: base(1.25) }], // 14px
			base: [base(), { lineHeight: base(1.5) }], // 16px
			lg: [base(1.125), { lineHeight: base(1.75) }], // 18px
			xl: [base(1.25), { lineHeight: base(1.75) }], // 20px
			'2xl': [base(1.5625), { lineHeight: base(2) }], // 25px
			'3xl': [base(1.875), { lineHeight: base(2.25) }], // 30px
			'4xl': [base(2), { lineHeight: base(2.5) }], // 32px
			'5xl': [base(2.625), { lineHeight: base(3) }], // 42px
			'6xl': [base(3), { lineHeight: base(3.5) }], // 48px
			'7xl': [base(3.75), { lineHeight: base(4) }], // 60px
			'8xl': [base(4.375), { lineHeight: base(4.5) }], // 70px
			'9xl': [base(6), { lineHeight: base(6.5) }], // 96px
			'10xl': [base(7.5), { lineHeight: base(8) }], // 120px
			'11xl': [base(8.125), { lineHeight: base(8.5) }], // 130px
			'12xl': [base(21.875), { lineHeight: base(22.5) }], // 350px
		},
	},
	plugins: [],
};
