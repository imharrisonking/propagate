import React from 'react';

import Arrow from '../graphics/Arrow';

export default function Button({ children, theme, additionalClasses = '', additionalStyles = {} }) {
	// Default padding
	if (additionalClasses === '') {
		additionalClasses = ' py-2 md:py-3 text-base rounded-xl md:rounded-xl';
	}

	const baseClasses = 'flex overflow-hidden px-4 md:px-6 items-center';

	// Button themes
	const buttonThemes = {
		accent: 'text-grey-500 bg-green-300',
		accentDark: 'text-grey-950 bg-green-300',
		transparent: 'text-grey-500 bg-transparent border border-grey-500',
		transparentWhite: 'text-white bg-transparent border border-white',
	};

	const horizontal = false;

	const colours = {
		accent: 'grey-500',
		accentDark: 'grey-950',
		transparent: 'grey-500',
		transparentWhite: 'white',
	};

	return (
		<button
			className={`${baseClasses} ${buttonThemes[theme]} group ${additionalClasses}`}
			style={additionalStyles}
		>
			{children}
			<div className="hidden md:block pl-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200">
				<Arrow horizontal={horizontal} colour={colours[theme]} />
			</div>
		</button>
	);
}
