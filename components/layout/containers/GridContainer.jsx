import React from 'react';

export default function GridContainer({ children }) {
	return (
		<div
			className={`overflow-hidden max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl my-auto mx-auto`}
		>
			{children}
		</div>
	);
}
