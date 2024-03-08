import { twMerge } from 'tailwind-merge';

export default function Hamburger({ active, theme }) {
	const strokeColour = theme === 'light' ? 'stroke-grey-500' : 'stroke-white';
	const lines = 'transition-all duration-400 transform origin-center stroke-[2px]';

	const classes = {
		hamburger: twMerge(
			'w-[20px] h-[20px] md:w-[24px] md:h-[24px] overflow-visible',
			strokeColour
		),
		line1: twMerge(lines, active ? 'opacity-0 -translate-y-[10px]' : ''),
		line2: twMerge(lines, active ? 'rotate-45' : ''),
		line3: twMerge(lines, active ? '-rotate-45' : ''),
		line4: twMerge(lines, active ? 'opacity-0 translate-y-[10px]' : ''),
	};

	return (
		<svg
			className={classes.hamburger}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 30 24"
			width="30"
			height="30"
		>
			<line className={classes.line1} x2="30" />
			<line className={classes.line2} y1="12" x2="30" y2="12" />
			<line className={classes.line3} y1="12" x2="30" y2="12" />
			<line className={classes.line4} y1="24" x2="30" y2="24" />
		</svg>
	);
}
