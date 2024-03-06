import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function GridContainer({ children, className }) {
	return (
		<div
			className={twMerge(
				'max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto',
				className
			)}
		>
			{children}
		</div>
	);
}
