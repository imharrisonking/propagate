import { twMerge } from 'tailwind-merge';

export default function LongArrow({ className, textColour, isHovered }) {
	const colours = {
		'text-white': 'fill-white stroke-white',
		'text-grey-500': 'fill-grey-500 stroke-grey-500',
		'text-grey-950': 'fill-grey-950 stroke-grey-950',
	};

	const svgColour = colours[textColour];

	return (
		<svg
			viewBox="0 0 70 69"
			fill="none"
			height="70"
			width="70"
			xmlns="http://www.w3.org/2000/svg"
			className={twMerge(svgColour, className, 'stroke-[0.5px]')}
			style={{
				opacity: isHovered ? 1 : 0.125,
				transition: 'opacity 200ms linear',
				transform: isHovered ? 'translate3d(25%, -25%, 0)' : 'translate3d(0, 0, 0)',
			}}
		>
			<path d="M68.5417 3.06066C69.1275 2.47487 69.1275 1.52513 68.5417 0.93934C67.9559 0.353553 67.0062 0.353553 66.4204 0.93934L68.5417 3.06066ZM67.9804 2H69.4804V0.5H67.9804V2ZM3.06066 68.5417L68.5417 3.06066L66.4204 0.93934L0.93934 66.4204L3.06066 68.5417ZM69.4804 33.2539V2H66.4804V33.2539H69.4804ZM67.9804 0.5H36.7265V3.5H67.9804V0.5Z" />
		</svg>
	);
}
