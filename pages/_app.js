import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { GridProvider } from '@faceless-ui/css-grid';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';

import '@/styles/globals.css';
import zindexes from '@/styles/css/zindexes';
import breakpoints from '@/styles/css/breakpoints';
import { base } from '@/styles/css/base';

import Header from '@/components/layout/Header/Header';

export default function App({ Component, pageProps }) {
	return (
		<WindowInfoProvider breakpoints={breakpoints}>
			<ScrollInfoProvider>
				<ModalProvider zIndex={zindexes.modal} transTime={250}>
					<GridProvider
						rowGap={{
							s: base(2),
							m: base(2),
							l: base(2),
							xl: base(2),
						}}
						colGap={{
							s: 'calc(100% * ( 1 / (8 * 2)))',
							m: 'calc(100% * ( 1 / (8 * 2)))',
							l: 'calc(100% * ( 1 / (14 * 2)))',
							xl: 'calc(100% * ( 1 / (14 * 2)))',
						}}
						cols={{
							s: 8,
							m: 8,
							l: 14,
							xl: 14,
						}}
					>
						<Header />
						<Component {...pageProps} />
					</GridProvider>
					<ModalContainer />
				</ModalProvider>
			</ScrollInfoProvider>
		</WindowInfoProvider>
	);
}
