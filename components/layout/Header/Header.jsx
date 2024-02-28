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
import Arrow from '@/components/graphics/Arrow';
import ArrowLink from '@/components/type/ArrowLink';
import HeaderButton from '@/components/buttons/HeaderButton';
import FullWidthGridContainer from '../containers/FullWidthGridContainer';
import { pageThemes, pageColours, buttonThemes } from '@/styles/css/themes';

const menuSlug = 'menu';

export default function Header() {
	// Control the state of the mega menu modal
	const { isModalOpen, toggleModal } = useModal();
	const menuActive = isModalOpen(menuSlug);
	const pathname = usePathname();

	// Keep state of the theme
	const [theme, setTheme] = useState(pageThemes[pathname]);
	const [backgroundColour, setBackgroundColour] = useState(pageColours[pathname]);
	const [headerButtonTheme, setHeaderButtonTheme] = useState(buttonThemes[pathname]);

	// Update the theme when the pathname changes
	useEffect(() => {
		if (menuActive) {
			// Add the dark-theme class to the body when the modal is open
			setTheme(pageThemes.menu);
			setBackgroundColour(pageColours.menu);
			setHeaderButtonTheme(buttonThemes.menu);
		} else {
			// Remove the dark-theme class from the body when the modal is closed
			setTheme(pageThemes[pathname]);
			setBackgroundColour(pageColours[pathname]);
			setHeaderButtonTheme(buttonThemes[pathname]);
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
		<header className="fixed top-0 left-0 right-0 md:fixed md:top-0">
			{/* FIXED NAVIGATION SMALL SCREENS */}
			<div
				id="mobile-header"
				className={`md:hidden w-full flex justify-between min-h-20 pl-5 bg-${backgroundColour}/[0.5] backdrop-blur-md z-${zindexes.header}`}
			>
				<Logo headerExpanded={headerExpanded} theme={theme} />
				{/* NAVIGATION MENU SMALL SCREENS */}
				<nav className="md:hidden flex items-center">
					{/* Free demo button for small screens */}
					<div>
						<HeaderButton headerExpanded={headerExpanded} theme={headerButtonTheme} />
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
			{/* FIXED NAVIGATION LARGE SCREENS */}
			<div
				id="desktop-header"
				className="hidden md:flex items-start md:mt-12 md:ml-10 md:p-0 md:min-h-0"
			>
				{/* FIXED LOGO LARGE SCREENS */}
				<button
					onClick={() => {
						if (menuActive) toggleModal('menu');
					}}
				>
					<div className="fixed top-[2.8571vw] left-[2.8571vw]">
						<Logo headerExpanded={headerExpanded} theme={theme} />
					</div>
				</button>

				{/* FIXED NAVIGATION MENU LARGE SCREENS */}
				<nav className="fixed top-[2.8571vw] right-[0] md:overflow-x-hidden text-base text-end pr-10">
					<div className="relative">
						<div className="flex justify-center items-center absolute top-0 right-0">
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
								<HeaderButton
									headerExpanded={headerExpanded}
									theme={headerButtonTheme}
								/>
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

						{/* Expanded menu for larger screens */}
						<ul
							className={`${
								theme === 'light' ? 'text-grey-950' : 'text-white'
							} flex flex-col leading-none gap-4 min-w-60`}
						>
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
										className={`${
											theme === 'light'
												? 'nav-item hover:text-grey-400'
												: 'nav-item-white hover:text-grey-200'
										} ${pathname === link ? 'active' : ''}`}
									>
										{capitalizeFirstLetter(link.replace('/', ''))}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>

			<Modal slug={menuSlug} className="w-full h-dvh pt-20 md:pt-52 bg-grey-950">
				<FullWidthGridContainer>
					{/* This dummy input is hidden but focusable */}
					<input
						style={{ position: 'absolute', opacity: 0, height: 0, width: 0 }}
						tabIndex="-1"
					/>
					<Grid>
						<Cell
							className="pt-10 md:pt-0"
							colsS={8}
							colsL={9}
							colsXL={9}
							htmlElement={'nav'}
							start={2}
							startS={1}
							startM={2}
							startL={2}
							startXL={2}
						>
							{pages.map((link, index) => (
								<p key={link} className="pb-2">
									<Link
										href={link}
										className="font-medium text-6xl sm-text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl outline-white-text hover:text-white uppercase"
										onClick={() => toggleModal('menu')}
									>
										{link.replace('/', '')}
									</Link>
								</p>
							))}
						</Cell>
						<Cell cols={4} startS={1} startM={2} startL={11} startXL={11}>
							<h6 className="text-grey-400 mb-3">WORK WITH US</h6>
							<ArrowLink
								colour={backgroundColour}
								theme={theme}
								type={'internal'}
								url={'/contact'}
								textClasses={'text-2xl md:text-2xl lg:text-4xl'}
								positionClasses={'mb-6'}
							>
								Let&apos;s chat
							</ArrowLink>

							<h6 className="text-grey-400 pb-3">CONNECT WITH US</h6>
							{Object.entries(socials).map(([name, url]) => (
								<div key={{ url }} className="flex align-middle items-center pb-4">
									<ArrowLink
										colour={backgroundColour}
										theme={theme}
										type={'external'}
										url={url}
										textClasses={'text-2xl lg:text-4xl'}
									>
										{name}
									</ArrowLink>
								</div>
							))}
						</Cell>
					</Grid>
				</FullWidthGridContainer>
			</Modal>
		</header>
	);
}
