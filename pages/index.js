import { useState } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import { pageThemes } from '@/styles/css/themes';
import Template from '@/components/layout/Template';
import Layout from '@/components/layout/Layout';
import GridContainer from '@/components/layout/containers/GridContainer';
import Button from '@/components/buttons/Button';
import BrandLogo from '@/components/graphics/BrandLogo';
import { BackgroundGradientAnimation } from '@/components/ui/BackgroundGradientAnimation';
import { ContainerScrollAnimation } from '@/components/ui/ContainerScrollAnimation';
import { SystemsAnimation } from '@/components/ui/SystemsAnimation';

import logos from '../images/logos';

export default function Home() {
	const theme = pageThemes['/'];

	return (
		<Template theme={theme} colour={'white'}>
			<Layout>
				<GridContainer>
					<div className="mt-32 lg:mt-56">
						<Grid>
							<Cell cols={8}>
								<h1 className="text-[54px]/[54px] sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-10xl">
									Launch your business{' '}
									<span className="highlight-dark-text">effortlessly.</span>
								</h1>
							</Cell>
							<Cell
								colsS={8}
								colsM={8}
								colsL={6}
								colsXL={6}
								className="hidden lg:block"
							>
								<div className="relative">
									<div className="lg:absolute relative -top-12 left-[25%] w-[975px] h-[525px] rounded-[8px]">
										<BackgroundGradientAnimation
											containerClassName="rounded-[8px]"
											gradientBackgroundStart="#a1ffcd"
											gradientBackgroundEnd="#90E5B8"
											firstColor="226, 255, 240"
											secondColor="208, 255, 230"
											thirdColor="161, 255, 205"
											fourthColor="208, 255, 230"
											fifthColor="208, 255, 230"
											pointerColor="161, 255, 205"
											size="100%"
										/>
									</div>
									<div className="md:absolute -top-12 left-[25%] w-[975px] h-[525px] landingPageGraphic">
										<div className="landingPageGraphic__creator"></div>
									</div>

									<div className="lg:absolute top-0 left-[5%] w-[258px] h-[541.03px] box-border">
										<Image
											className="phone border-box object-contain"
											src="/assets/mockups/skool-example-screenshot.png"
											alt="Propagate
										Creators Community"
											fill
										/>
									</div>
								</div>
							</Cell>
						</Grid>
					</div>
					<div className="pt-7 mb-18 md:mb-24">
						<Grid>
							<Cell colsS={8} colsM={7} colsL={7} colsXL={7}>
								<div className="md:mb-20">
									<p className="text-lg mb-5">
										We help video creators launch and scale their business by
										delivering a cross-platform premium membership with video
										content, an engaged community and subscription revenue.
									</p>
									<div className="flex justify-start">
										<Link href="/demo">
											<Button theme="accent">
												Watch the demo—it&apos;s free
											</Button>
										</Link>
									</div>
								</div>
							</Cell>
							<Cell
								colsS={8}
								colsM={8}
								colsL={6}
								colsXL={6}
								className="mt-24 hidden md:block lg:hidden"
							>
								<div className="relative max-w-[258px] max-h-[541.03px]">
									<div className="lg:absolute relative -top-12 left-[25%] w-[975px] h-[525px] rounded-[8px]">
										<BackgroundGradientAnimation
											containerClassName="rounded-[8px]"
											gradientBackgroundStart="#a1ffcd"
											gradientBackgroundEnd="#90E5B8"
											firstColor="226, 255, 240"
											secondColor="208, 255, 230"
											thirdColor="161, 255, 205"
											fourthColor="208, 255, 230"
											fifthColor="208, 255, 230"
											pointerColor="161, 255, 205"
											size="100%"
										/>
									</div>
									<div className="md:absolute -top-12 left-[25%] w-[975px] h-[525px] landingPageGraphic">
										<div className="landingPageGraphic__creator"></div>
									</div>

									<div className="lg:absolute top-0 left-[5%] w-[258px] h-[541.03px] box-border">
										<Image
											className="phone border-box object-contain"
											src="/assets/mockups/skool-example-screenshot.png"
											alt="Propagate
										Creators Community"
											fill
										/>
									</div>
								</div>
							</Cell>
						</Grid>
						<div className="md:hidden flex justify-center">
							<ContainerScrollAnimation />
						</div>
					</div>
				</GridContainer>
				<GridContainer className="md:py-16">
					<p className="text-lg text-center">
						We develop your business using technologies that scale as you grow.
					</p>
					<Marquee
						autoFill={true}
						speed={25}
						gradient={true}
						gradientWidth={100}
						className="overflow-y-hidden py-12 opacity-100"
					>
						{logos.map((logo, index) => (
							<div key={index} className="pl-12">
								<div className="h-[30px] md:h-[50px]">
									<BrandLogo
										src={logo.src}
										alt={logo.alt}
										className="fill-grey-500 h-full w-auto"
									/>
								</div>
							</div>
						))}
					</Marquee>
				</GridContainer>
				<section className="bg-green-100 py-20 md:py-36">
					<GridContainer className="overflow-hidden">
						<Grid>
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7}>
								<h3 className="mb-10">
									Everything managed for you so you can focus on delivering{' '}
									<span className="highlight-dark-text">valuable content.</span>
								</h3>
								<p className="text-lg">
									Get the systems needed to monetise your audience, all you do is
									create the content. We handle audience analysis, offer creation,
									branding, community platform and course launch, landing and
									checkout page web development, sales funnel optimisation and
									advertising campaigns.
								</p>
							</Cell>
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7}>
								<div className="flex justify-center items-start md:items-center">
									<SystemsAnimation />
								</div>
							</Cell>
							{/* Offer creation */}
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7} className="mt-12">
								<h6 className="mb-4">OFFER CREATION</h6>
								<h4 className="mb-6">
									An offer that{' '}
									<span className="highlight-dark-text">resonates</span> with your
									audience.
								</h4>
								<p className="text-lg mb-6">
									We research and interview your audience, collaboratively helping
									you to craft an offer that your audience will love.
								</p>
								<Link href="/demo">
									<Button theme="accent">Learn more</Button>
								</Link>
							</Cell>
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7}>
								<div className="flex justify-center items-start md:items-center h-[350px] md:h-[500px]">
									<div className="h-[350px] w-[350px] md:w-[500px] placeholder"></div>
								</div>
							</Cell>

							{/* Payment Infrastructure */}
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7} className="mt-12">
								<h6 className="mb-4">PAYMENT INFRASTRUCTURE</h6>
								<h4 className="mb-6">
									Unlock{' '}
									<span className="highlight-dark-text"> recurring revenue.</span>
								</h4>
								<p className="text-lg mb-6">
									End the revenue rollercoaster and minimise membership churn with
									monthly and annual recurring payments built in to a custom
									checkout page developed with Stripe&apos;s payment
									infrastructure.
								</p>
								<Link href="/demo">
									<Button theme="accent">Learn more</Button>
								</Link>
							</Cell>
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7}>
								<div className="flex justify-center items-start md:items-center h-[350px] md:h-[500px]">
									<div className="h-[350px] w-[350px] md:w-[500px] placeholder"></div>
								</div>
							</Cell>

							{/* Platform Launch */}
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7} className="mt-12">
								<h6 className="mb-4">PLATFORM LAUNCH</h6>
								<h4 className="mb-6">
									A platform where content and{' '}
									<span className="highlight-dark-text">community unite.</span>
								</h4>
								<p className="text-lg mb-6">
									Our tiered community system is proven to retain and grow your
									audience. Reward community engagement with Leaderboards and
									unlockable content, schedule weekly live events in the Calendar
									and showcase your course in the Classroom.
								</p>
								<Link href="/demo">
									<Button theme="accent">Learn more</Button>
								</Link>
							</Cell>
							<Cell colsS={8} colsM={8} colsL={7} colsXL={7}>
								<div className="flex justify-center items-start md:items-center h-[350px] md:h-[500px]">
									<div className="h-[350px] w-[350px] md:w-[500px] placeholder"></div>
								</div>
							</Cell>
						</Grid>
					</GridContainer>
				</section>
			</Layout>
		</Template>
	);
}
