import React from 'react';

import ButtonArrow from './ButtonArrow';

export default function Button({ children, theme }) {
	let className = String;
	if (theme == 'light') {
		className = 'text-grey-500 bg-green-300 px-4 py-3 rounded-xl flex items-center';
	} else {
		className = 'text-grey-950 bg-green-300 px-4 py-3 rounded-xl flex items-center';
	}
	return (
		<button className={`${className} group`}>
			{children}
			<div className="hidden md:block pl-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200">
				<ButtonArrow theme={theme} />
			</div>
		</button>
	);
}
