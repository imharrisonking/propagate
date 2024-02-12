import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from './Logo';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="flex justify-between items-start mt-12 ml-10">
			<Logo />
			<nav className="text-end">
				<ul>
					<li>
						<Link
							href="/community"
							className={`nav-item hover:text-grey-300 ${
								pathname === '/community' ? 'active' : ''
							}`}
						>
							Community
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`nav-item hover:text-grey-300 ${
								pathname === '/about' ? 'active' : ''
							}`}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`nav-item hover:text-grey-300 ${
								pathname === '/about' ? 'active' : ''
							}`}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className={`nav-item hover:text-grey-300 ${
								pathname === '/about' || pathname === '/book' ? 'active' : ''
							}`}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
