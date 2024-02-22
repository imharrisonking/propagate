import React from 'react';

export default function FooterGridContainer({ children }) {
	return (
		<div
			className={`relative overflow-hidden max-w-full h-dvh px-5 xs:px-0 pt-36 md:pt-[30dvh] xl:pt-48 my-auto mx-auto`}
		>
			{children}
		</div>
	);
}
