import { useState } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import Template from '@/components/layout/Template';
import Layout from '@/components/layout/Layout';
import GridContainer from '@/components/layout/containers/GridContainer';
import FullWidthGridContainer from '@/components/layout/containers/FullWidthGridContainer';
import Button from '@/components/buttons/Button';
import { BackgroundGradientAnimation } from '@/components/ui/BackgroundGradientAnimation';
import { pageThemes } from '@/styles/css/themes';
import logos from '../images/logos';

export default function Home() {
	const theme = pageThemes['/'];
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Template theme={theme} colour={'white'}>
			<Layout>
				<GridContainer>
					<div className="mt-36 lg:mt-56">
						<Grid>
							<Cell cols={8}>
								<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl">
									Launching <br className="hidden 2xl:block" />
									your business has never{' '}
									<span className="highlight-dark-text"> been easier.</span>
								</h1>
							</Cell>
							<Cell cols={6} className="hidden lg:block">
								<div className="relative">
									<div className="lg:absolute relative -top-12 left-[25%] w-[975px] h-[525px] rounded-[8px]">
										<BackgroundGradientAnimation
											containerClassName="rounded-[8px]"
											gradientBackgroundStart="#a1ffcd"
											gradientBackgroundEnd="#a1ffcd"
											firstColor="255, 205, 161"
											secondColor="205, 161, 255"
											thirdColor="255, 161, 211"
											fourthColor="162, 199, 226"
											fifthColor="#62, 199, 226"
											pointerColor="255, 205, 161"
											size="100%"
										/>
									</div>
									<div className="lg:absolute -top-12 left-[25%] w-[975px] h-[525px] landingPageGraphic">
										<div className="landingPageGraphic__creator"></div>
									</div>

									<div className="lg:absolute top-0 left-[5%] w-[250px] h-[541.03px]">
										<Image
											className="phone"
											src="/skool-propagate-screenshot.png"
											alt="Propagate
										Creators Community"
											fill
										/>
									</div>
								</div>
							</Cell>
						</Grid>
					</div>
					<div className="pt-7 mb-24 md:mb-24">
						<Grid>
							<Cell cols={6}>
								<p className="text-lg">
									We partner with video creators wanting to launch a profitable
									online business delivering a cross-platform premium membership
									with video content, an engaged community and subscription
									revenue.
								</p>
							</Cell>

							<Cell cols={14} className="flex justify-center md:justify-start">
								<Link href="/demo">
									<Button theme="accent">Watch the demo—it&apos;s free</Button>
								</Link>
							</Cell>
						</Grid>
					</div>
				</GridContainer>
				<GridContainer className="mt-32 py-20">
					<p className="text-lg text-center">
						We develop using the latest technologies to build your business on systems
						that scale.
					</p>{' '}
					<Marquee
						autoFill={true}
						speed={30}
						gradient={true}
						gradientWidth={100}
						className="overflow-y-hidden py-12"
					>
						{logos.map((logo, index) => (
							<div
								key={index}
								className="pl-12 flex align-middle items-center h-[50px]"
							>
								<Image
									src={logo.src}
									alt={logo.alt}
									height={50}
									width={150}
									objectFit="contain"
								/>
							</div>
						))}
					</Marquee>
				</GridContainer>

				<GridContainer className="mb-12 md:mb-32 overflow-hidden">
					<Grid>
						<Cell cols={8}>
							<h4 className="mb-6">
								Propagate{' '}
								<span className="highlight-dark-text">builds the systems</span> so
								you can focus on creating content and delivering value.
							</h4>
							<p className="text-lg text-center md:text-left">
								We partner with you and build the systems needed to monetise your
								audience, so you can focus on delivering value through your content.
								<br />
								<br />
								We craft your offer then launch your community platform and course,
								manage all the backend services and sales funnel for you to gain
								members predictably.
							</p>
						</Cell>
						<Cell cols={6}>
							<div className="h-[550px] w-[550px] bg-green-300"></div>
						</Cell>
						<Cell cols={8}>
							<h1 className="text-6xl text-center md:text-left sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
								Infrastructure to scale{' '}
								<span className="highlight-dark-text"> your impact.</span>
							</h1>
						</Cell>
					</Grid>
				</GridContainer>
				<FullWidthGridContainer>
					<Grid>
						<Cell
							startS={1}
							startM={2}
							startL={3}
							startXL={3}
							colsS={8}
							colsM={6}
							colsL={7}
							colsXL={7}
						>
							<h6 className="steps mb-5">Step 01</h6>
							<div className="steps-line pb-32">
								<h3 className="mb-12">Craft the offer.</h3>
								<p className="text-lg">
									We carry out research and interviews and collaboratively help
									you to craft an offer that brings value to your audience.
									<br />
									<br />
									Providing guidance and consultation on course structuring,
									audience targeting and the overall vision and direction of your
									paid community and course.
								</p>
							</div>
						</Cell>
						<Cell
							startS={1}
							startM={2}
							startL={3}
							startXL={3}
							colsS={8}
							colsM={6}
							colsL={7}
							colsXL={7}
						>
							<h6 className="steps mb-5">Step 02</h6>
							<div className="steps-line pb-32">
								<h3 className="mb-12">Development and production.</h3>
								<Grid>
									<Cell cols={10}>
										<p className="text-lg">
											Work with you to develop a high quality course that
											enhances the strength of your paid community offer.{' '}
											<br />
											<br />
											We help you produce the course curriculum and lesson
											material, providing templates, feedback and strategic
											advice to develop the programme.
											<br />
											<br />
											Guidance through the recording and production process,
											offering recommendations on tools, techniques, and best
											practices.
										</p>
									</Cell>
								</Grid>
							</div>
						</Cell>
						<Cell
							startS={1}
							startM={2}
							startL={3}
							startXL={3}
							colsS={8}
							colsM={8}
							colsL={14}
							colsXL={14}
						>
							<h6 className="steps mb-5">Step 03</h6>
							<div className="steps-line pb-32">
								<h3 className="mb-12">Backend management.</h3>
								<Grid>
									<Cell cols={7}>
										<p className="text-lg">
											We develop and manage the course, community hosting
											platform and all of the backend systems for you so you
											can focus on doing what you do best — delivering results
											for your clients.
										</p>
									</Cell>
								</Grid>
								<Grid>
									<Cell cols={14}>
										<div
											className="flex text-grey-500 mt-11"
											onMouseEnter={() => setIsHovered(true)}
											onMouseLeave={() => setIsHovered(false)}
											style={{
												opacity: isHovered ? 1 : 0.5,
												transition: 'opacity 200ms linear',
											}}
										>
											<h6 className="w-[68px] text-center py-10">01</h6>
											<div className="flex border-y-[0.5px] border-grey-200 py-10 ml-4">
												<Grid className="items-center">
													<Cell cols={6}>
														<h4 className="text-left">Landing page</h4>
													</Cell>
													<Cell startL={7} cols={6}>
														<p>
															Get a custom landing page and an
															automated sales funnel that converts
															members without sales calls and endless
															DMs.
														</p>
													</Cell>
												</Grid>
											</div>
										</div>
									</Cell>
								</Grid>
							</div>
						</Cell>
					</Grid>
				</FullWidthGridContainer>
			</Layout>
		</Template>
	);
}
