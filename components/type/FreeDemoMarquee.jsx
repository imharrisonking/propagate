import { useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from 'react-responsive';

import LongArrow from '../graphics/LongArrow';

export default function FreeDemoMarquee({ textColour, isHovered }) {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
	const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });

	let arrowSize = 30;

	if (isSmallScreen) {
		arrowSize = 40;
	} else if (isMediumScreen) {
		arrowSize = 55;
	}

	return (
		<Link href="/demo">
			<div className="inline-flex justify-items-start items-center pr-10 md:pl-10">
				<h1
					className={twMerge(textColour, 'font-light text-8xl md:text-9xl pr-5')}
					style={{
						opacity: isHovered ? 1 : 0.125,
						transition: 'opacity 200ms linear',
					}}
				>
					Free demo
				</h1>
				<LongArrow arrowSize={arrowSize} textColour={textColour} isHovered={isHovered} />
			</div>
		</Link>
	);
}
