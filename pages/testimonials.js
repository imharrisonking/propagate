import { Grid, Cell } from '@faceless-ui/css-grid';

import Template from '@/components/layout/Template';
import Layout from '@/components/layout/Layout';
import GridContainer from '@/components/layout/GridContainer';

export default function Testimonials() {
	return (
		<Template>
			<Layout title={'Testimonials | Propagate'}>
				<GridContainer>
					<div className="pt-14 md:pt-4">
						<Grid>
							<Cell cols={13}>
								<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl">
									Testimonials
								</h1>
							</Cell>
						</Grid>
					</div>
					<div className="pt-6 pb-20"></div>
				</GridContainer>
			</Layout>
		</Template>
	);
}
