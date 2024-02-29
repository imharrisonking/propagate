import { useState, useEffect } from 'react';
import Link from 'next/link';

import LogoIcon from '../../graphics/LogoIcon';

export default function Logo({ headerExpanded: propHeaderExpanded, theme }) {
	const [headerExpanded, setHeaderExpanded] = useState(propHeaderExpanded);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		setHeaderExpanded(propHeaderExpanded || isHovered);
	}, [propHeaderExpanded, isHovered]);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const transitionStyles = {
		transition: 'transform 500ms ease 0s, opacity 500ms ease 0s',
		transform: headerExpanded ? 'translateX(0)' : 'translateX(-100%)',
		opacity: headerExpanded ? 1 : 0,
	};

	return (
		<Link
			href="/"
			className="overflow-hidden flex items-center align-top header-top"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<LogoIcon
				className={`${
					theme === 'light' ? 'fill-grey-500' : 'fill-white'
				} relative mix-blend-difference`}
			/>
			<div className="ml-3 overflow-hidden flex items-center align-top">
				<span
					style={transitionStyles}
					className={`${
						theme === 'light' ? 'text-grey-500' : 'text-white'
					} font-semibold text-2xl leading-none tracking-[0.07em] mix-blend-difference`}
				>
					Propagate
				</span>
			</div>
		</Link>
	);
}
