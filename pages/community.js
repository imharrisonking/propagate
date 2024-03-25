import { Grid, Cell } from '@faceless-ui/css-grid';
import { twMerge } from 'tailwind-merge';

import Template from '@/components/layout/Template';
import Layout from '@/components/layout/Layout';
import GridContainer from '@/components/layout/containers/GridContainer';
import { pageThemes } from '@/styles/css/themes';

export default function Community() {
	const theme = pageThemes['/community'];

	return (
		<Template theme={theme} colour={'blue-300'}>
			<Layout title={'Community | Propagate'}>
				<div className="bg-blue-300">
					<GridContainer>
						<div className={'pt-36 md:pt-60'}>
							<Grid>
								<Cell cols={13}>
									<h1 className="text-6xl text-center md:text-left sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl 2xl:text-12xl">
										Join our free community
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
