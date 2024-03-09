import React from 'react';

export default function FooterGridContainer({ children }) {
	return (
		<div
			className={`relative overflow-hidden max-w-full h-dvh px-0 pt-28 md:pt-[20dvh] lg:pt-[20dvh] xl:pt-48 my-auto mx-auto`}
		>
			{children}
		</div>
	);
}
