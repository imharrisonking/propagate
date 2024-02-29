import React from 'react';

export default function FullWidthGridContainer({ children }) {
	return (
		<div className={`overflow-hidden mx-auto my-auto max-w-full px-5 xs:px-0`}>{children}</div>
	);
}
