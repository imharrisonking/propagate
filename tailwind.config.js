import { base } from './styles/css/base';
const plugin = require('tailwindcss/plugin');

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
				xs: [base(0.6), { lineHeight: base(0.6) }], // 12px, 12px
				sm: [base(0.7), { lineHeight: base(0.7) }], // 14px, 14px
				base: [base(0.8), { lineHeight: base(0.8) }], // 16px, 16px
				lg: [base(0.9), { lineHeight: base(0.9) }], // 18px, 18px
				xl: [base(1), { lineHeight: base(1) }], // 20px, 20px
				'2xl': [base(1.25), { lineHeight: base(1.25) }], // 25px, 25px
				'3xl': [base(1.5), { lineHeight: base(1.5) }], // 30px, 30px
				'4xl': [base(1.6), { lineHeight: base(1.6) }], // 32px, 32px
				'5xl': [base(2.1), { lineHeight: base(2.1) }], // 42px, 42px
				'6xl': [base(2.4), { lineHeight: base(2.4) }], // 48px, 48px
				'7xl': [base(3), { lineHeight: base(3) }], // 60px, 60px
				'8xl': [base(3.5), { lineHeight: base(3.5) }], // 70px, 70px
				'9xl': [base(4.8), { lineHeight: base(4.8) }], // 96px, 96px
				'10xl': [base(5), { lineHeight: base(5) }], // 100px, 100px
				'11xl': [base(6), { lineHeight: base(6) }], // 120px, 120px
				'12xl': [base(6.5), { lineHeight: base(6.5) }], // 130px, 130px
				'13xl': [base(17.5), { lineHeight: base(17.5) }], // 350px, 350px
			},
			maxWidth: {
				'screen-xs': '350px',
				'screen-sm': '600px',
				'screen-md': '600px',
				'screen-lg': '830px',
				'screen-xl': '1080px',
				'screen-2xl': '1280px',
				'footer-xs': '350px',
				'footer-sm': '600px',
				'footer-md': '600px',
				'footer-lg': '830px',
				'footer-xl': '1200px',
				'footer-2xl': '1280px',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFFFFF',
			black: '#000000',
			grey: {
				100: '#EBEBEB',
				200: '#CFCFCE',
				300: '#9D9D9D',
				400: '#676769',
				500: '#424242',
				800: '#494949',
				950: '#1C1C1C',
			},
			green: {
				300: '#A1FFCD',
				700: '#478978',
				950: '#24332B',
			},
			blue: '#A2C7E2',
		},
		typography: (theme) => ({
			DEFAULT: {
				css: {
					'.outline-text': {
						color: 'transparent',
						'-webkit-text-stroke': '2px black',
					},
				},
			},
		}),
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar': {
					/* IE and Edge */
					'-ms-overflow-style': 'none !important',

					/* Firefox */
					'scrollbar-width': 'none !important',

					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none !important',
					},
					'.align-bottom': {
						verticalAlign: 'bottom',
					},
				},
			});
		}),
	],
	options: {
		safelist: [/^bg-/, /^text-/, 'text-grey-200'],
		whitelistPatterns: [/^text-/],
	},
};
