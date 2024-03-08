import React, { useState } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';

import Template from '@/components/layout/Template';
import Layout from '@/components/layout/Layout';
import GridContainer from '@/components/layout/containers/GridContainer';
import FullWidthGridContainer from '@/components/layout/containers/FullWidthGridContainer';
import { pageThemes } from '@/styles/css/themes';

export default function Contact() {
	const theme = pageThemes['/contact'];
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Template theme={theme} colour={'grey-950'}>
			<Layout title={'Contact | Propagate'}>
				<div className="text-white bg-grey-950">
					<GridContainer>
						<div className="pt-36 md:pt-60">
							<Grid>
								<Cell cols={13}>
									<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl">
										Let&apos;s start a project{' '}
										<span className="highlight-white-text">together.</span>
									</h1>
								</Cell>
							</Grid>
						</div>
						<div className="pt-6 pb-20"></div>
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
										We carry out research and interviews and collaboratively
										help you to craft an offer that brings value to your
										audience.
										<br />
										<br />
										Providing guidance and consultation on course structuring,
										audience targeting and the overall vision and direction of
										your paid community and course.
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
												material, providing templates, feedback and
												strategic advice to develop the programme.
												<br />
												<br />
												Guidance through the recording and production
												process, offering recommendations on tools,
												techniques, and best practices.
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
												platform and all of the backend systems for you so
												you can focus on doing what you do best — delivering
												results for your clients.
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
															<h4 className="text-left text-4xl md:text-6xl">
																Landing page
															</h4>
														</Cell>
														<Cell startL={7} cols={6}>
															<p>
																Get a custom landing page and an
																automated sales funnel that converts
																members without sales calls and
																endless DMs.
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
				</div>
			</Layout>
		</Template>
	);
}
