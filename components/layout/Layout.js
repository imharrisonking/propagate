import Head from 'next/head';

export default function Layout({ title, keywords, description, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>{children}</main>
		</>
	);
}

Layout.defaultProps = {
	title: 'Propagate | Digital Growth Agency',
	keywords:
		'propagate, propagate digital, propagate digital agency, agency, digital, growth, marketing, seo, social media, social media marketing, info products, ipga, digital products, digital marketing, digital agency, digital growth agency, digital growth',
	description:
		'Propagate is a digital growth agency specialising in helping experts build, launch and scale educational online businesses and products.',
};
