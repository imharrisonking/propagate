import React from 'react';
import Link from 'next/link';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { twMerge } from 'tailwind-merge';

import FooterGridContainer from '../containers/FooterGridContainer';
import Arrow from '@/components/graphics/Arrow';
import ArrowLink from '@/components/type/ArrowLink';

import socials from '@/styles/css/socials';
import { fontColourMapping } from '@/styles/css/themes';

export default function Footer({ theme, colour }) {
	const backgroundColour = `bg-${colour}`;
	const arrowColour = theme === 'light' ? 'grey-500' : 'white';

	return (
		<footer className={twMerge('h-dvh flex justify-center', backgroundColour)}>
			<FooterGridContainer>
				<Grid>
					<Cell
						colsS={8}
						colsM={6}
						colsL={6}
						colsXL={6}
						startS={1}
						startM={2}
						startL={2}
						startXL={2}
					>
						<div className={`${fontColourMapping[colour].sans} flex items-center`}>
							<h1
								className={`font-medium text-[16.5333vw]/[16.5333vw] sm-text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl`}
							>
								PROPAGATE{' '}
								<span className={`${fontColourMapping[colour].outline}`}>
									YOUR EXPERTISE.
								</span>
							</h1>
						</div>
					</Cell>
					<Cell
						colsS={8}
						colsM={5}
						colsL={5}
						colsXL={5}
						startS={1}
						startM={2}
						startL={9}
						startXL={9}
					>
						<h6 className={`${fontColourMapping[colour].mono} mb-3`}>WORK WITH US</h6>
						<div className="flex align-middle items-center mb-10">
							<p
								className={`text-2xl lg:text-4xl ${fontColourMapping[colour].sans} pr-4`}
							>
								<Link href="/contact">Let&apos;s chat</Link>
							</p>
							<Arrow colour={arrowColour} horizontal={true} />
						</div>

						<h6 className={`${fontColourMapping[colour].mono} mb-3`}>
							CONNECT WITH US
						</h6>
						{Object.entries(socials).map(([name, url], index, array) => (
							<div
								key={url}
								className={`flex align-middle items-center ${
									index === array.length - 1 ? 'mb-10' : 'pb-4'
								}`}
							>
								<p
									className={`text-2xl lg:text-4xl ${fontColourMapping[colour].sans} pr-4`}
								>
									<a
										key={name}
										href={url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{name}
									</a>
								</p>
								<Arrow colour={arrowColour} horizontal={true} />
							</div>
						))}
						<p
							className={`text-2xl lg:text-4xl ${fontColourMapping[colour].sans} pr-4`}
						>
							&copy; 2024 Propagate Digital Limited
						</p>
						<ArrowLink colour={colour} theme={theme} type={'internal'} url={'/contact'}>
							Let us chat
						</ArrowLink>
					</Cell>
				</Grid>
			</FooterGridContainer>
		</footer>
	);
}
