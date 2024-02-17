import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Modal, useModal } from '@faceless-ui/modal';
import { useScrollInfo } from '@faceless-ui/scroll-info';

import Logo from './Logo';
import Hamburger from './Hamburger';

const menuSlug = 'menu';

export default function Header() {
	// Control the state of the mega menu modal
	const { isModalOpen, toggleModal } = useModal();
	const menuActive = isModalOpen(menuSlug);
	const pathname = usePathname();

	// Get scroll position to determine if the header
	const { y, yPercentage } = useScrollInfo();
	const headerExpanded = y === 0 || yPercentage >= 100;

	// Transition styles for the nav li items
	const transitionStyles = {
		transitionProperty: 'transform, opacity',
		transitionDuration: '0.3s',
		transitionTimingFunction: 'ease-out',
	};

	const pages = ['/testimonials', '/community', '/blog', '/about', '/contact'];

	// Calculate transition delay based on index
	const getTransitionDelay = (index) => `${index * 0.1}s`;

	// Function to capitalize the first letter of a string
	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
	return (
		<header className="sticky top-0 md:top-12 flex justify-between md:items-start md:mt-12 md:ml-10 md:p-0 md:min-h-0 min-h-20 pl-5">
			<Logo headerExpanded={headerExpanded} />
			{/* Navigation menu for larger screens */}
			<nav className="hidden md:block md:overflow-x-hidden text-base text-end pr-10">
				<div className="relative">
					<ul className="flex flex-col leading-none gap-4">
						{pages.map((link, index) => (
							<li
								style={{
									...transitionStyles,
									transitionDelay: getTransitionDelay(index),
									transform: headerExpanded
										? 'translateY(0)'
										: 'translateY(-20px)',
									opacity: headerExpanded ? 1 : 0,
									visibility: headerExpanded ? 'visible' : 'hidden',
								}}
								key={link}
							>
								<Link
									href={link}
									className={`nav-item hover:text-grey-300 ${
										pathname === link ? 'active' : ''
									}`}
								>
									{capitalizeFirstLetter(link.replace('/', ''))}
								</Link>
							</li>
						))}
					</ul>
					<button
						style={{
							...transitionStyles,
							transitionDelay: getTransitionDelay(pages.length),
							opacity: headerExpanded ? 0 : 1,
							visibility: headerExpanded ? 'hidden' : 'visible',
							position: 'absolute',
							right: 0,
							top: 0,
						}}
						className="hidden md:block flex items-center justify-center"
						aria-label="Open Navigation Menu"
						onClick={() => toggleModal('menu')}
						type="button"
					>
						<Hamburger active={menuActive} theme={'light'} />
					</button>
				</div>
			</nav>

			{/* Book a call button for small screens */}
			<nav className="md:hidden flex">
				<button>
					<Link
						href="/book"
						className="bg-green-300 text-grey-500 text-xs px-4 py-2 rounded-lg"
					>
						Free demo
					</Link>
				</button>
				{/* Hamburger menu for small screens */}
				<button
					className="min-w-16 min-h-20 flex items-center justify-center"
					aria-label="Open Navigation Menu"
					onClick={() => toggleModal('menu')}
					type="button"
				>
					<Hamburger active={menuActive} theme={'light'} />
				</button>
			</nav>
			<Modal slug={menuSlug}></Modal>
		</header>
	);
}
