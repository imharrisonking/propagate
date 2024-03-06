import AdobeLogo from '/assets/brand-logos/adobe.svg';
import CalComLogo from '/assets/brand-logos/cal-com.svg';
import ConvertKitLogo from '/assets/brand-logos/convertkit.svg';
import FigmaLogo from '/assets/brand-logos/figma.svg';
import FramerLogo from '/assets/brand-logos/framer.svg';
import HubSpotLogo from '/assets/brand-logos/hubspot.svg';
import LoomLogo from '/assets/brand-logos/loom.svg';
import NotionLogo from '/assets/brand-logos/notion.svg';
import OBSStudioLogo from '/assets/brand-logos/obs-studio.svg';
import StripeLogo from '/assets/brand-logos/stripe.svg';
import TypeformLogo from '/assets/brand-logos/typeform.svg';
import VercelLogo from '/assets/brand-logos/vercel.svg';
import ZapierLogo from '/assets/brand-logos/zapier.svg';
import YouTubeLogo from '/assets/brand-logos/youtube.svg';
import TailwindCSSLogo from '/assets/brand-logos/tailwindcss.svg';
import WistiaLogo from '/assets/brand-logos/wistia.svg';

const logos = [
	{ src: AdobeLogo, alt: 'Adobe' },
	{ src: CalComLogo, alt: 'Cal.com' },
	{ src: ConvertKitLogo, alt: 'ConvertKit' },
	{ src: FigmaLogo, alt: 'Figma' },
	{ src: FramerLogo, alt: 'Framer' },
	{ src: HubSpotLogo, alt: 'HubSpot' },
	{ src: LoomLogo, alt: 'Loom' },
	{ src: NotionLogo, alt: 'Notion' },
	{ src: OBSStudioLogo, alt: 'OBS Studio' },
	{ src: StripeLogo, alt: 'Stripe' },
	{ src: TypeformLogo, alt: 'Typeform' },
	{ src: VercelLogo, alt: 'Vercel' },
	{ src: ZapierLogo, alt: 'Zapier' },
	{ src: YouTubeLogo, alt: 'YouTube' },
	{ src: TailwindCSSLogo, alt: 'Tailwind CSS' },
	{ src: WistiaLogo, alt: 'Wistia' },
];

const svgMap = logos.reduce((map, logo) => {
	const { alt, src } = logo;
	map[alt.toLowerCase().replace(/\s/g, '')] = src;
	return map;
}, {});

const BrandLogo = ({ name, fill }) => {
	const SvgLogo = svgMap[name];

	return SvgLogo ? <SvgLogo fill={fill} /> : null;
};

export default BrandLogo;
