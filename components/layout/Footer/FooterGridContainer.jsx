import React from 'react';

export default function FooterGridContainer({ children }) {
	return (
		<div
			className={`max-w-footer-xs sm:max-w-footer-sm md:max-w-footer-md lg:max-w-footer-lg xl:max-w-footer-xl 2xl:max-w-footer-2xl my-auto mx-auto`}
		>
			{children}
		</div>
	);
}
