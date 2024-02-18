import React from 'react';
import Link from 'next/link';

import Arrow from '../graphics/Arrow';

export default function SocialLink({ children, theme }) {
	return (
		<button className={`${classes} ${theme === 'light' ? lightClasses : darkClasses} group`}>
			{children}
			<div className="hidden md:block pl-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200">
				<Arrow theme={(theme, horizontal)} />
			</div>
			<div className="flex align-middle items-center mb-6">
				<p className="text-4xl text-white pr-4">
					<a key={name} href={url} target="_blank" rel="noopener noreferrer">
						{name}
					</a>
				</p>
				<Arrow colour="white" horizontal={true} />
			</div>
		</button>
	);
}
