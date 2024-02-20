import React from 'react';

export default function FooterGridContainer({ children }) {
	return (
		<div className={`overflow-hidden max-w-full px-5 xs:px-0 my-auto mx-auto`}>{children}</div>
	);
}
