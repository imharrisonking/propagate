import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Modal, ModalToggler, useModal } from '@faceless-ui/modal';

import Logo from './Logo';
import Hamburger from './Hamburger';

const menuSlug = 'menu';

export default function Header() {
	// Control the state of the mega menu modal
	const { isModalOpen, toggleModal } = useModal();
	const menuActive = isModalOpen(menuSlug);
	const pathname = usePathname();

	console.log('menuActive', menuActive);

	return (
		<header className="flex justify-between md:items-start md:mt-12 md:ml-10 md:p-0 md:min-h-0 min-h-20 pl-5">
			<Logo />
			{/* Navigation menu for larger screens */}
			<nav className="hidden md:block text-base text-end pr-10">
				<ul className="flex flex-col leading-none gap-4">
					<li>
						<Link
							href="/testimonials"
							className={`nav-item hover:text-grey-300 ${
								pathname === '/testimonials' ? 'active' : ''
							}`}
						>
							Testimonials
						</Link>
					</li>
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
							href="/blog"
							className={`nav-item hover:text-grey-300 ${
								pathname === '/blog' ? 'active' : ''
							}`}
						>
							Blog
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
						className="bg-green-300 text-grey-500 text-xs px-4 py-2 rounded-lg"
					>
						Free demo
					</Link>
				</button>
				<button
					className="min-w-16 min-h-20 flex items-center justify-center"
					aria-label="Open Navigation Menu"
					onClick={() => toggleModal('menu')}
					type="button"
				>
					<Hamburger active={menuActive} theme={'light'} />
				</button>
			</div>
			<Modal slug={menuSlug}></Modal>
			{/* <ModalToggler slug={menuSlug}></ModalToggler> */}
		</header>
	);
}
