import React from 'react';
import Link from 'next/link';

import Arrow from '../graphics/Arrow';
import { fontColourMapping } from '@/styles/css/themes';

export default function ArrowLink({ children, colour, theme, type, url, classes }) {
	const arrowColour = theme === 'light' ? 'grey-500' : 'white';
	if (type === 'internal') {
		return (
			<div className={`flex align-middle items-center ${classes} group`}>
				<p
					className={`text-2xl md:text-3xl lg:text-4xl ${fontColourMapping[colour].sans} `}
				>
					<Link href={url}>{children}</Link>
				</p>
				<div className="block pl-4 md:group-hover:translate-x-[4px] md:transition-transform md:duration-200">
					<Arrow colour={arrowColour} horizontal={true} />
				</div>
			</div>
		);
	} else if (type === 'external')
		return (
			<div className={`flex align-middle items-center ${classes} group`}>
				<p
					className={`text-2xl md:text-3xl lg:text-4xl ${fontColourMapping[colour].sans} `}
				>
					<a key={url} href={url} target="_blank" rel="noopener noreferrer">
						{children}
					</a>
				</p>
				<div className="block pl-4 md:group-hover:translate-x-[4px] md:transition-transform md:duration-200">
					<Arrow colour={arrowColour} horizontal={true} />
				</div>
			</div>
		);
}
