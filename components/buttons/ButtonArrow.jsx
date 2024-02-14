import { twMerge } from 'tailwind-merge';

export default function ButtonArrow({ theme }) {
	let colour = String;
	if (theme == 'light') {
		colour = 'fill-grey-500';
	} else {
		colour = 'fill-grey-950';
	}
	return (
		<svg
			viewBox="0 0 14 14"
			fill="none"
			height="10"
			width="10"
			xmlns="http://www.w3.org/2000/svg"
			className={twMerge('stroke-[0.5px] stroke-current', colour)}
		>
			<path d="M13 1.5C13.2761 1.5 13.5 1.27614 13.5 1C13.5 0.723858 13.2761 0.5 13 0.5V1.5ZM0 1.5L13 1.5V0.5L0 0.5L0 1.5Z" />
			<path d="M13.3536 1.35355C13.5488 1.15829 13.5488 0.841708 13.3536 0.646446C13.1583 0.451184 12.8417 0.451184 12.6464 0.646446L13.3536 1.35355ZM1.35355 13.3536L13.3536 1.35355L12.6464 0.646446L0.646447 12.6464L1.35355 13.3536Z" />
			<path d="M13.5 1C13.5 0.723858 13.2761 0.5 13 0.5C12.7239 0.5 12.5 0.723858 12.5 1H13.5ZM12.5 13V13.5H13.5V13H12.5ZM12.5 1V13H13.5V1H12.5Z" />
		</svg>
	);
}
