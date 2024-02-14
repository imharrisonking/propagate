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
						<header className="text-5xl">
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
