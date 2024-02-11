import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Header() {
	return (
		<header className="flex justify-between items-start mt-12 ml-10">
			<Logo />
			<nav>
				<ul className="text-base">
					<li>
						<Link href="/community">Community</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/about">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
