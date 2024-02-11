import { useState } from 'react';
import Link from 'next/link';
import LogoIcon from './LogoIcon';

export default function Logo({ className }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href="/"
			className="flex items-center"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<LogoIcon className={isHovered ? 'fill-grey-300' : 'fill-grey-500'} />
			<span
				className={`ml-3 font-sans font-semibold tracking-[0.07em] text-xl ${
					isHovered ? 'text-grey-300' : ''
				}`}
			>
				Propagate
			</span>
		</Link>
	);
}
