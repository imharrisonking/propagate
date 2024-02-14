import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header/Header';
import { Grid, Cell } from '@faceless-ui/css-grid';
import GridContainer from '@/components/layout/GridContainer';

export default function Home() {
	return (
		<Layout>
			<Header />
			<GridContainer>
				<Grid>
					<Cell cols={13}>
						<header className="text-6xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl">
							Spread your knowledge, scale your impact.
						</header>
					</Cell>
				</Grid>
				<Grid>
					<Cell cols={6}>First column content</Cell>
					<Cell cols={6}>Second column content</Cell>
				</Grid>
			</GridContainer>
		</Layout>
	);
}
