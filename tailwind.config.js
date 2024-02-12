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
			fontSize: {
				xs: [base(0.6), { lineHeight: base(1) }], // 12px, 20px
				sm: [base(0.7), { lineHeight: base(1.25) }], // 14px, 25px
				base: [base(0.8), { lineHeight: base(1.5) }], // 16px, 30px
				lg: [base(0.9), { lineHeight: base(1.75) }], // 18px, 35px
				xl: [base(1), { lineHeight: base(1.75) }], // 20px, 35px
				'2xl': [base(1.25), { lineHeight: base(2) }], // 25px, 40px
				'3xl': [base(1.5), { lineHeight: base(2.25) }], // 30px, 45px
				'4xl': [base(1.6), { lineHeight: base(2.5) }], // 32px, 50px
				'5xl': [base(2.1), { lineHeight: base(3) }], // 42px, 60px
				'6xl': [base(2.4), { lineHeight: base(3.5) }], // 48px, 70px
				'7xl': [base(3), { lineHeight: base(4) }], // 60px, 80px
				'8xl': [base(3.5), { lineHeight: base(4.5) }], // 70px, 90px
				'9xl': [base(4.8), { lineHeight: base(6.5) }], // 96px, 130px
				'10xl': [base(5), { lineHeight: base(6.5) }], // 100px, 130px
				'11xl': [base(6), { lineHeight: base(8) }], // 120px, 160px
				'12xl': [base(6.5), { lineHeight: base(8.5) }], // 130px, 170px
				'13xl': [base(17.5), { lineHeight: base(22.5) }], // 350px, 450px
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
