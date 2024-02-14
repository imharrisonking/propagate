import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Hamburger from './Hamburger';

export default function Header() {
	const [menuOpen, setMenuOpened] = useState(false);
	const pathname = usePathname();

	return (
		<header className="flex justify-between md:items-start md:mt-12 md:ml-10 md:p-0 md:min-h-0 min-h-20 pl-5">
			<Logo />
			{/* Navigation menu for larger screens */}
			<nav className="hidden md:block text-end pr-10">
				<ul className="flex flex-col leading-none gap-4">
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
			{/* Hamburger menu for small screens */}
			<div className="md:hidden flex">
				{/* Book a call button */}
				<button>
					<Link
						href="/book"
						className="text-white bg-grey-500 sm:text-xs text-sm px-4 py-2 rounded-lg"
					>
						BOOK A CALL
					</Link>
				</button>
				<button
					className="min-w-16 min-h-20 flex items-center justify-center"
					aria-label="Open Navigation Menu"
					onClick={() => setMenuOpened((prevState) => !prevState)}
				>
					<Hamburger active={menuOpen} className={'stroke-grey-500'} />
				</button>
			</div>
		</header>
	);
}
