import '@/styles/globals.css';
import localFont from 'next/font/local';

const maisonNeue = localFont({
	src: [
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-Book.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-BookItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-Demi.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../styles/fonts/maison-neue/MaisonNeue-DemiItalic.woff2',
			weight: '600',
			style: 'italic',
		},
	],
	family: 'Maison Neue',
	variable: '--font-maison-neue',
});

const robotoMono = localFont({
	src: [
		{
			path: '../styles/fonts/roboto-mono/RobotoMono-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../styles/fonts/roboto-mono/RobotoMono-LightItalic.ttf',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../styles/fonts/roboto-mono/RobotoMono-Medium.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../styles/fonts/roboto-mono/RobotoMono-MediumItalic.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../styles/fonts/roboto-mono/RobotoMono-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../styles/fonts/roboto-mono/RobotoMono-BoldItalic.ttf',
			weight: '700',
			style: 'italic',
		},
	],
	family: 'Roboto Mono',
	variable: '--font-roboto-mono',
});

export default function App({ Component, pageProps }) {
	return (
		<html lang="en" className={`${maisonNeue.variable} ${robotoMono.variable}`}>
			<main className="text-grey-500">
				<Component {...pageProps} />
			</main>
		</html>
	);
}
