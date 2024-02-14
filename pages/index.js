import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import GridContainer from '@/components/layout/GridContainer';
import Button from '@/components/buttons/Button';

import { Grid, Cell } from '@faceless-ui/css-grid';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout>
			<Header />
			<GridContainer>
				<div className="pt-14 md:pt-4">
					<Grid>
						<Cell cols={13}>
							<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl">
								Spread your knowledge, scale
								<span className="highlight-dark-text"> your impact.</span>
							</h1>
						</Cell>
					</Grid>
				</div>
				<div className="pt-6 pb-20">
					<Grid>
						<Cell cols={11}>
							<h5>
								Propagate is the growth partner for health and fitness
								professionals, turning expertise into impactful online education
								businesses.
							</h5>
						</Cell>
						<Cell cols={14} className="flex justify-center md:justify-start">
							<Link href="/demo">
								<Button theme="light">Watch the demo—it&apos;s free</Button>
							</Link>
						</Cell>
					</Grid>
				</div>
			</GridContainer>
			<Footer />
		</Layout>
	);
}
