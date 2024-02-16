import React, { Fragment } from 'react';
import Footer from './Footer/Footer';

export default function Template({ children }) {
	return (
		<Fragment>
			{children}
			<Footer />
		</Fragment>
	);
}
