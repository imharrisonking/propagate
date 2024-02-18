import React from 'react';

import Arrow from '../graphics/Arrow';

export default function Button({ children, theme, additionalClasses = '', additionalStyles = {} }) {
	// Default padding
	if (additionalClasses === '') {
		additionalClasses = 'py-3';
	}

	const classes =
		'flex overflow-hidden text-xs px-4 rounded-lg md:rounded-xl md:px-6 md:py-3 md:text-base items-center';
	const lightClasses = 'text-grey-500 bg-green-300';
	const darkClasses = 'text-grey-950 bg-green-300';
	const horizontal = false;

	return (
		<button
			className={`${classes} ${
				theme === 'light' ? lightClasses : darkClasses
			} group ${additionalClasses}`}
			style={additionalStyles}
		>
			{children}
			<div className="hidden md:block pl-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200">
				<Arrow theme={(theme, horizontal)} />
			</div>
		</button>
	);
}
