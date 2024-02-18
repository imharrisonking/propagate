import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import FooterGridContainer from '../containers/FooterGridContainer';
import { twMerge } from 'tailwind-merge';

export default function Footer({ className }) {
	return (
		<footer className={twMerge('h-dvh flex justify-center', className)}>
			<FooterGridContainer>
				<Grid>
					<Cell cols={8}>
						<h1 className="font-medium text-12xl">
							PROPAGATE <span className="outline-text">YOUR EXPERTISE.</span>
						</h1>
					</Cell>
				</Grid>
			</FooterGridContainer>
		</footer>
	);
}
