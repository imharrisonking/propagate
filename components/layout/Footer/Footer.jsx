import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { twMerge } from 'tailwind-merge';

import FooterGridContainer from '../containers/FooterGridContainer';

export default function Footer({ theme, colour }) {
	return (
		<footer className={twMerge('h-dvh flex justify-center', colour)}>
			<FooterGridContainer>
				<Grid>
					<Cell colsS={8} colsM={6} colsL={6} colsXL={6} startS={1} startM={2}>
						<div
							className={`${
								theme === 'light' ? 'text-grey-500' : 'text-white'
							} flex items-center`}
						>
							<h1
								className={`font-medium text-[16.5333vw]/[16.5333vw] sm-text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl`}
							>
								PROPAGATE{' '}
								<span
									className={`${
										theme === 'light' ? 'outline-text' : 'outline-white-text'
									}`}
								>
									YOUR EXPERTISE.
								</span>
							</h1>
						</div>
					</Cell>
				</Grid>
			</FooterGridContainer>
		</footer>
	);
}
