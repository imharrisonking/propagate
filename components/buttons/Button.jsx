import React from 'react';

import ButtonArrow from '../graphics/ButtonArrow';

export default function Button({ children, theme, additionalClasses = '', additionalStyles = {} }) {
	const classes =
		'flex overflow-hidden text-xs px-4 py-3 rounded-lg md:rounded-xl md:px-6 md:py-3 md:text-base items-center';
	const lightClasses = 'text-grey-500 bg-green-300 ';
	const darkClasses = 'text-grey-950 bg-green-300 ';

	return (
		<button
			className={`${classes} ${
				theme === 'light' ? lightClasses : darkClasses
			} group ${additionalClasses}`}
			style={additionalStyles}
		>
			{children}
			<div className="hidden md:block pl-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200">
				<ButtonArrow theme={theme} />
			</div>
		</button>
	);
}
