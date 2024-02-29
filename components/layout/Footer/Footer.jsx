import React, { useState } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { twMerge } from 'tailwind-merge';
import Marquee from 'react-fast-marquee';

import FooterGridContainer from '../containers/FooterGridContainer';
import ArrowLink from '@/components/type/ArrowLink';
import CircularText from '@/components/type/CircularText';
import FreeDemoMarquee from '@/components/type/FreeDemoMarquee';

import socials from '@/styles/css/socials';
import { fontColourMapping } from '@/styles/css/themes';

export default function Footer({ theme, colour }) {
	const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

	const backgroundColour = `bg-${colour}`;
	const { mono, sans, outline } = fontColourMapping[colour];

	return (
		<footer className={twMerge('h-dvh', backgroundColour)}>
			<FooterGridContainer>
				<div className="px-5 xs:px-0 max-w-full">
					<Grid>
						<Cell
							colsS={8}
							colsM={3}
							colsL={4}
							colsXL={4}
							startS={1}
							startM={2}
							startL={5}
							startXL={5}
						>
							<h6 className={twMerge('mb-3', mono)}>FIND US</h6>
							<p className={`text-2xl md:text-3xl lg:text-4xl ${sans} `}>
								Bow East
								<br />
								London, E3 <br /> United Kingdom
							</p>
						</Cell>
						<Cell
							colsS={8}
							colsM={4}
							colsL={6}
							colsXL={6}
							startS={1}
							startM={5}
							startL={9}
							startXL={9}
						>
							<h6 className={twMerge('mb-3', mono)}>WORK WITH US</h6>
							<ArrowLink
								colour={colour}
								theme={theme}
								type={'internal'}
								url={'/contact'}
								textClasses={'text-2xl md:text-3xl lg:text-4xl'}
								positionClasses={'mb-10'}
							>
								Let&apos;s chat
							</ArrowLink>

							<h6 className={twMerge('mb-3', mono)}>CONNECT WITH US</h6>
							{Object.entries(socials).map(([name, url], index, array) => (
								<div
									key={url}
									className={`flex align-middle items-center ${
										index === array.length - 1 ? 'mb-10' : 'pb-4'
									}`}
								>
									<ArrowLink
										colour={colour}
										theme={theme}
										type={'external'}
										url={url}
										textClasses={'text-2xl md:text-3xl lg:text-4xl'}
									>
										{name}
									</ArrowLink>
								</div>
							))}
							<div className={twMerge('flex flex-col justify-end', mono)}>
								<h6 className={twMerge('mb-3', mono)}>
									&copy; 2024 Propagate Digital Limited
								</h6>
								<h6 className={mono}>Company Number 15442458</h6>
							</div>
						</Cell>
					</Grid>
				</div>
				<div className="hidden lg:block absolute flex md:-bottom-[20dvh] md:-left-[5vw] xl:-bottom-[18.75vw] xl:-left-[5vw]">
					<CircularText
						text="FUNNEL BUILDING   MAKE SALES   OFFER CREATION   "
						textColour={sans}
					/>
				</div>
				<div
					className="flex mt-12 md:mt-28 lg:hidden h-32"
					onMouseEnter={() => setIsMarqueeHovered(true)}
					onMouseLeave={() => setIsMarqueeHovered(false)}
				>
					<Marquee autoFill={true}>
						<FreeDemoMarquee
							className={'flex items-center'}
							textColour={sans}
							isHovered={isMarqueeHovered}
						/>
					</Marquee>
				</div>
			</FooterGridContainer>
		</footer>
	);
}
