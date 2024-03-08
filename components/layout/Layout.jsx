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

			<main className="overflow-hidden">{children}</main>
		</>
	);
}

Layout.defaultProps = {
	title: 'Propagate | Build Engaging Subscriptions Powered by Community',
	keywords:
		'propagate, propagate digital, propagate digital agency, agency, creator, content creator, video creator, info product, marketing, seo, social media, social media marketing, info products, ipga, digital products, digital marketing, digital agency, digital growth agency, digital growth',
	description:
		'We help video creators scale their business by delivering a cross-platform premium membership with video content, an engaged community and subscription revenue.',
};
