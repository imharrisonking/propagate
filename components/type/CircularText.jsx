import { useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from 'react-responsive';

import LongArrow from '../graphics/LongArrow';

export default function CircularText({ text, textColour }) {
	const [isHovered, setIsHovered] = useState(false);

	const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
	const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });
	const isLargeScreen = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 2559px' });
	const isExtraLargeScreen = useMediaQuery({ query: '(min-width: 2560px)' });

	let fontSize;
	let arrowSize;
	if (isSmallScreen) {
		fontSize = 30;
		arrowSize = 40;
	} else if (isMediumScreen) {
		fontSize = 44;
		arrowSize = 55;
	} else if (isLargeScreen) {
		fontSize = 48;
		arrowSize = 70;
	} else if (isExtraLargeScreen) {
		fontSize = 60;
		arrowSize = 120;
	}

	const characters = text.split('');
	const degree = 360 / characters.length;
	const rotation = 90 + degree / 2;

	// Set radius based on font size and text length
	const radius = (text.length * fontSize) / (2 * Math.PI);
	const viewBoxSize = radius * 2;

	return (
		<Link href="/demo" className="flex items-center align-middle">
			<div className="flex items-center align-middle">
				<div className="flex justify-center items-center relative md:h-[80vw] md:w-[80vw] lg:h-[55vw] lg:w-[55vw]">
					<h1
						className={twMerge(
							'md:text-[6.67vw] lg:text-[6.67vw] items-center justify-center absolute whitespace-nowrap',
							textColour
						)}
						style={{
							opacity: isHovered ? 1 : 0.125,
							transition: 'opacity 200ms linear',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					>
						Free demo
					</h1>
					<LongArrow
						className={'items-center justify-center absolute top-1/3'}
						arrowSize={arrowSize}
						textColour={textColour}
						isHovered={isHovered}
					/>
					<svg
						width="100%"
						height="100%"
						viewBox={`0, 0, ${viewBoxSize} ${viewBoxSize}`}
						xmlns="http://www.w3.org/2000/svg"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className={twMerge(textColour, 'block')}
						style={{
							animation: 'spin 30s linear infinite',
							opacity: isHovered ? 1 : 0.125,
							transition: 'opacity 200ms linear',
							transform: 'translateZ(0)',
							willChange: 'transform',
							backfaceVisibility: 'hidden',
							WebkitTransformOrigin: '50% 51%',
						}}
					>
						<circle cx={radius} cy={radius} r={radius} fill="none" stroke="none" />
						{characters.map((char, index) => {
							const angle = index * degree;
							const textRadius = radius - fontSize / 2;
							const x =
								radius +
								textRadius * Math.cos((angle - rotation) * (Math.PI / 180));
							const y =
								radius +
								textRadius * Math.sin((angle - rotation) * (Math.PI / 180));

							return (
								<text
									className={twMerge(textColour, 'font-light')}
									key={index}
									x={x}
									y={y}
									fill="currentColor"
									fontSize={fontSize}
									textAnchor="middle"
									dominantBaseline="middle"
									transform={`rotate(${angle} ${x} ${y})`}
								>
									{char}
								</text>
							);
						})}
					</svg>
				</div>
			</div>
		</Link>
	);
}
