import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

export default function HeaderButton({ headerExpanded, theme }) {
	const transitionStyles = {
		transition: 'transform 500ms ease 0s, opacity 500ms ease 0s',
		opacity: headerExpanded ? 0 : 1,
	};

	const additionalClasses = 'py-2';

	return (
		<Link href="/demo" className="flex items-center align-top">
			<Button
				additionalClasses={additionalClasses}
				additionalStyles={transitionStyles}
				theme={theme}
			>
				Free demo
			</Button>
		</Link>
	);
}
