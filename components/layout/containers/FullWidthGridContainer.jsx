import React from 'react';

export default function FullWidthGridContainer({ children }) {
	return <div className={`overflow-hidden max-w-full my-auto mx-auto`}>{children}</div>;
}
