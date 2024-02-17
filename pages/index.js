import { Grid, Cell } from '@faceless-ui/css-grid';
import Link from 'next/link';

import Template from '@/components/layout/Template';
import Layout from '@/components/layout/Layout';
import GridContainer from '@/components/layout/GridContainer';
import Button from '@/components/buttons/Button';

export default function Home() {
	return (
		<Template>
			<Layout>
				<GridContainer>
					<div className="pt-14 md:pt-4">
						<Grid>
							<Cell cols={13}>
								<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl">
									Share your knowledge, scale
									<span className="highlight-dark-text"> your impact.</span>
								</h1>
							</Cell>
						</Grid>
					</div>
					<div className="pt-6 pb-96">
						<Grid>
							<Cell cols={11}>
								<h5>
									Propagate is the growth partner for health and fitness
									professionals and content creators, turning expertise into
									impactful online education businesses.
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
			</Layout>
		</Template>
	);
}
