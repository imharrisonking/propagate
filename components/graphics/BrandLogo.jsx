import { twMerge } from 'tailwind-merge';
import Adobe from '../../images/brand-logos/adobe.svg';
import CalCom from '../../images/brand-logos/cal-com.svg';
import ConvertKit from '../../images/brand-logos/convertkit.svg';
import Figma from '../../images/brand-logos/figma.svg';
import Framer from '../../images/brand-logos/framer.svg';
import HubSpot from '../../images/brand-logos/hubspot.svg';
import Loom from '../../images/brand-logos/loom.svg';
import Notion from '../../images/brand-logos/notion.svg';
import OBSStudio from '../../images/brand-logos/obs-studio.svg';
import Stripe from '../../images/brand-logos/stripe.svg';
import Typeform from '../../images/brand-logos/typeform.svg';
import Vercel from '../../images/brand-logos/vercel.svg';
import Zapier from '../../images/brand-logos/zapier.svg';
import YouTube from '../../images/brand-logos/youtube.svg';
import TailwindCSS from '../../images/brand-logos/tailwindcss.svg';
import Wistia from '../../images/brand-logos/wistia.svg';

const brandLogos = {
	adobe: Adobe,
	calCom: CalCom,
	convertKit: ConvertKit,
	figma: Figma,
	framer: Framer,
	hubSpot: HubSpot,
	loom: Loom,
	notion: Notion,
	obsStudio: OBSStudio,
	stripe: Stripe,
	typeform: Typeform,
	vercel: Vercel,
	zapier: Zapier,
	youtube: YouTube,
	tailwindCSS: TailwindCSS,
	wistia: Wistia,
};

export default function BrandLogo({ src, alt, height, className }) {
	const Logo = brandLogos[src];
	return <Logo className={className} alt={alt} height={height} />;
}
