import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Modal, useModal } from '@faceless-ui/modal';
import { useScrollInfo } from '@faceless-ui/scroll-info';

import Logo from './Logo';
import Hamburger from './Hamburger';
import HeaderButton from '@/components/buttons/HeaderButton';
import zindexes from '@/styles/css/zindexes';

const menuSlug = 'menu';

export default function Header() {
	// Control the state of the mega menu modal
	const { expandedNav, page, modal, header } = zindexes;
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

			{/* NAVIGATION MENU LARGE SCREENS */}
			<nav className="hidden md:overflow-x-hidden md:flex text-base text-end pr-10">
				<div className="relative">
					<div className="hidden md:flex justify-center items-center absolute top-0 right-0">
						{/* Free demo button for larger screens */}
						<button
							className="pr-7"
							style={{
								...transitionStyles,
								transitionDelay: getTransitionDelay(pages.length),
								opacity: headerExpanded ? 0 : 1,
								visibility: headerExpanded ? 'hidden' : 'visible',
							}}
						>
							<HeaderButton headerExpanded={headerExpanded} theme="light" />
						</button>

						{/* Hamburger menu for larger screens */}
						<button
							style={{
								...transitionStyles,
								transitionDelay: getTransitionDelay(pages.length),
								opacity: headerExpanded ? 0 : 1,
								visibility: headerExpanded ? 'hidden' : 'visible',
							}}
							aria-label="Open Navigation Menu"
							onClick={() => toggleModal('menu')}
							type="button"
						>
							<Hamburger active={menuActive} theme={'light'} />
						</button>
					</div>
					<ul className="flex flex-col leading-none gap-4 min-w-60">
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
									'z-index': headerExpanded ? expandedNav : page,
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
				</div>
			</nav>

			{/* NAVIGATION MENU SMALL SCREENS */}
			<nav className="md:hidden flex">
				{/* Free demo button for small screens */}
				<button>
					<HeaderButton headerExpanded={headerExpanded} theme="light" />
				</button>

				{/* Hamburger menu for small screens */}
				<button
					className="min-w-16 min-h-20 flex items-center justify-center"
					aria-label="Open Navigation Menu"
					onClick={() => toggleModal('menu')}
					type="button"
				>
					<Hamburger active={menuActive} theme="light" />
				</button>
			</nav>
			<Modal slug={menuSlug}></Modal>
		</header>
	);
}
