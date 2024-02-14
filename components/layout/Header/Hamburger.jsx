import { twMerge } from 'tailwind-merge';

export default function Hamburger({ active, className }) {
	if (active) {
		return (
			<svg
				id="close-menu-svg"
				xmlns="http://www.w3.org/2000/svg"
				className={twMerge('w-7 h-7', className)}
				fill="none"
				viewBox="0 0 24 24"
			>
				<path d="M5 5L19 19M19 5L5 19" strokeWidth="2" strokeLinecap="round"></path>
			</svg>
		);
	} else {
		return (
			<svg
				id="open-menu-svg"
				xmlns="http://www.w3.org/2000/svg"
				className={twMerge('w-7 h-7', className)}
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4 7h16M4 12.5h16M4 18h16"
				></path>
			</svg>
		);
	}
}
