import React, { Fragment } from 'react';
import Footer from './Footer/Footer';

export default function Template({ children, theme, colour }) {
	return (
		<Fragment>
			{children}
			<Footer theme={theme} colour={colour} />
		</Fragment>
	);
}
