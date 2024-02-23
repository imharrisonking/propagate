import { useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import LongArrow from '../graphics/LongArrow';

export default function CircularText({ text, fontSize, textColour }) {
	const [isHovered, setIsHovered] = useState(false);

	const characters = text.split('');
	const degree = 360 / characters.length;
	const rotation = 90 + degree / 2;

	// Conver font size to number
	const fontSizeNum = parseFloat(fontSize);

	// Set radius based on font size and text length
	const radius = (text.length * fontSizeNum) / (2 * Math.PI);
	const viewBoxSize = radius * 2;

	return (
		<Link href="/demo" className="flex items-center align-middle">
			<div className="flex items-center align-middle">
				<div className="flex justify-center items-center relative h-[88dvh] w-[88dvh]">
					<h1
						className={twMerge(
							'text-9xl items-center justify-center absolute whitespace-nowrap',
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
