import Link from 'next/link';
import LogoIcon from '../../graphics/LogoIcon';

export default function Logo() {
	return (
		<Link href="/" className="flex items-center align-top">
			<LogoIcon className="fill-grey-500" />
			<span className="ml-3 font-semibold tracking-[0.07em] text-2xl leading-none">
				Propagate
			</span>
		</Link>
	);
}
