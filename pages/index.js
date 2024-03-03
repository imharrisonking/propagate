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
import { pageThemes } from '@/styles/css/themes';

export default function Home() {
	const theme = pageThemes['/'];
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Template theme={theme} colour={'white'}>
			<Layout>
				<Image
					className="hidden md:block absolute top-32 right-12"
					src="/iphone-propagate-skool-angled.png"
					alt="Propagate Creators Community"
					width={640}
					height={640}
				/>

				<GridContainer>
					<div className="mt-40 md:mt-60">
						<Grid>
							<Cell cols={8}>
								<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-10xl">
									Infrastructure to scale{' '}
									<span className="highlight-dark-text"> your impact.</span>
								</h1>
							</Cell>
						</Grid>
					</div>
					<div className="pt-10 mb-16 md:mb-28">
						<Grid>
							<Cell cols={8}>
								<p className="text-lg">
									We are the growth partner for health and fitness content
									creators that want to build their audience and launch a
									profitable online business.
								</p>
							</Cell>
							<Cell cols={14} className="flex justify-center md:justify-start">
								<Link href="/demo">
									<Button theme="accent">Watch the demo—it&apos;s free</Button>
								</Link>
							</Cell>
						</Grid>
					</div>
					<p className="text-lg text-center mb-4">
						Our team integrates the latest technologies to build your business on
						systems that scale.
					</p>
				</GridContainer>

				<Marquee autoFill={true} speed={50}>
					<h1 className="font-light text-10xl md:text-13xl overflow-hidden mb-12 md:mb-24 mix-blend-difference">
						Develop—Manage—Scale—
					</h1>
				</Marquee>
				<GridContainer className="mb-12 md:mb-32">
					<Grid>
						<Cell cols={8}>
							<h4>
								Propagate{' '}
								<span className="highlight-dark-text">works with you</span> to
								develop manage and scale your online offering.
							</h4>
						</Cell>
						<Cell
							startS={1}
							colsS={8}
							startM={1}
							colsM={8}
							startL={9}
							colsL={6}
							startXL={9}
							colsXL={6}
							className="flex justify-center md:justify-start"
						>
							<p className="text-lg text-center md:text-left">
								We partner with you and build the systems needed to monetise your
								audience, so you can focus on delivering value through your content.
								<br />
								<br />
								We create your offer then launch your community and course, manage
								all the backend services for you, and transform your sales funnel to
								get sales and members predictably.
							</p>
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
