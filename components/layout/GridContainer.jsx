import React from 'react';
import { gridContainerWidth } from '../../styles/css/structure';
import { twMerge } from 'tailwind-merge';

export default function GridContainer({ children }) {
	const containerWidth = `max-w-[${gridContainerWidth}px]`;

	return <div className={twMerge('my-auto mx-auto', containerWidth)}>{children}</div>;
	// return <div className={`max-w-screen-xl my-auto mx-auto`}>{children}</div>;
}
