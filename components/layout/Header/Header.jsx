import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Modal, useModal } from '@faceless-ui/modal';
import { useScrollInfo } from '@faceless-ui/scroll-info';
import { Grid, Cell } from '@faceless-ui/css-grid';

import zindexes from '@/styles/css/zindexes';
import socials from '@/styles/css/socials';
import Logo from './Logo';
import Hamburger from './Hamburger';
import HeaderButton from '@/components/buttons/HeaderButton';
import GridContainer from '../GridContainer';
import pageThemes from '@/styles/css/themes';

const menuSlug = 'menu';

export default function Header() {
	// Control the state of the mega menu modal
	const { isModalOpen, toggleModal } = useModal();
	const menuActive = isModalOpen(menuSlug);
	const pathname = usePathname();

	// Keep state of the theme
	const [theme, setTheme] = useState(pageThemes[pathname]);

	// Update the theme when the pathname changes
	useEffect(() => {
		if (menuActive) {
			// Add the dark-theme class to the body when the modal is open
			setTheme('dark');
		} else {
			// Remove the dark-theme class from the body when the modal is closed
			setTheme(pageThemes[pathname]);
		}
	}, [pathname, menuActive]);

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
		<header
			className={`sticky top-0 md:top-12 min-h-20 bg-white/[0.7] md:bg-transparent backdrop-blur-md md:backdrop-blur-none backdrop-saturate-200 md:backdrop-saturate-100 z-${zindexes.header}`}
		>
			<div className="flex justify-between min-h-20 pl-5 md:items-start md:mt-12 md:ml-10 md:p-0 md:min-h-0">
				<Logo headerExpanded={headerExpanded} theme={theme} />

				{/* NAVIGATION MENU LARGE SCREENS */}
				<nav className="hidden md:overflow-x-hidden md:flex text-base text-end pr-10">
					<div className="relative">
						<div className="hidden md:flex justify-center items-center absolute top-0 right-0">
							{/* Free demo button for larger screens */}
							<div
								className="pr-7"
								style={{
									...transitionStyles,
									transitionDelay: getTransitionDelay(pages.length),
									opacity: headerExpanded ? 0 : 1,
									visibility: headerExpanded ? 'hidden' : 'visible',
								}}
							>
								<HeaderButton headerExpanded={headerExpanded} theme={theme} />
							</div>

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
								<Hamburger active={menuActive} theme={theme} />
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
					<div>
						<HeaderButton headerExpanded={headerExpanded} theme={theme} />
					</div>

					{/* Hamburger menu for small screens */}
					<button
						className="min-w-16 min-h-20 flex items-center justify-center"
						aria-label="Open Navigation Menu"
						onClick={() => toggleModal('menu')}
						type="button"
					>
						<Hamburger active={menuActive} theme={theme} />
					</button>
				</nav>
			</div>

			<Modal slug={menuSlug} className="w-full pt-52 bg-grey-950">
				<GridContainer>
					<Grid>
						<Cell cols={8} htmlElement={'nav'}>
							{pages.map((link, index) => (
								<h1 key={link}>
									<Link
										href={link}
										className="font-medium text-9xl outline-white-text hover:text-white"
									>
										{capitalizeFirstLetter(link.replace('/', ''))}
									</Link>
								</h1>
							))}
						</Cell>
						<Cell cols={5}>
							{Object.entries(socials).map(([name, url]) => (
								<p key={{ url }} className="text-4xl text-white">
									<a
										key={name}
										href={url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{name}
									</a>
								</p>
							))}
						</Cell>
					</Grid>
				</GridContainer>
			</Modal>
		</header>
	);
}
