import { twMerge } from 'tailwind-merge';

export default function LogoIcon({ className }) {
	return (
		<svg
			viewBox="0 0 500 283"
			fill="none"
			height="1.563rem"
			width="2.768rem"
			xmlns="http://www.w3.org/2000/svg"
			className={twMerge(className)}
		>
			<path d="M166.667 188.167H0C0 188.167 79.7746 399.863 166.667 188.167Z" />
			<path d="M166.667 188.167H500C500 188.167 340.445 -235.215 166.667 188.167Z" />
		</svg>
	);
}
