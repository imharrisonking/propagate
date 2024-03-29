import { Grid, Cell } from '@faceless-ui/css-grid';
import { twMerge } from 'tailwind-merge';

import Template from '@/components/layout/Template';
import Layout from '@/components/layout/Layout';
import GridContainer from '@/components/layout/containers/GridContainer';
import { pageThemes } from '@/styles/css/themes';

export default function Demo() {
	const theme = pageThemes['/demo'];

	return (
		<Template theme={theme} colour={'grey-950'}>
			<Layout title={'Free demo | Propagate'}>
				<div className="text-white bg-grey-950">
					<GridContainer>
						<div className={'pt-36 md:pt-60'}>
							<Grid>
								<Cell cols={13}>
									<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl">
										Free demo
									</h1>
								</Cell>
							</Grid>
						</div>
						<div className="pt-6 pb-20"></div>
					</GridContainer>
				</div>
			</Layout>
		</Template>
	);
}
