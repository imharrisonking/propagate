import '@/styles/globals.css';
import { ModalProvider } from '@faceless-ui/modal';
import { GridProvider } from '@faceless-ui/css-grid';
import zindexes from '@/styles/css/zindexes';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import breakpoints from '@/styles/css/breakpoints';
import { base } from '@/styles/css/base';

export default function App({ Component, pageProps }) {
	return (
		<WindowInfoProvider breakpoints={breakpoints}>
			<ModalProvider zIndex={zindexes.modal}>
				<GridProvider
					rowGap={{
						s: base(2),
						m: base(2),
						l: base(2),
						xl: base(2),
					}}
					colGap={{
						s: base(2),
						m: base(2),
						l: base(2),
						xl: base(2),
					}}
					cols={{
						s: 8,
						m: 8,
						l: 14,
						xl: 14,
					}}
				>
					<Component {...pageProps} />
				</GridProvider>
			</ModalProvider>
		</WindowInfoProvider>
	);
}
