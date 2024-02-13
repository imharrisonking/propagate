import { useState } from 'react';
import Link from 'next/link';
import LogoIcon from './LogoIcon';

export default function Logo() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link href="/" className="flex items-center align-top">
			<LogoIcon className="fill-grey-500" />
			<span className="ml-3 font-semibold tracking-[0.07em] text-xl leading-none">
				Propagate
			</span>
		</Link>
	);
}
