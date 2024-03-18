import React, { useState, useEffect, useRef } from 'react';
import { useScrollInfo } from '@faceless-ui/scroll-info';

import AnalysisIcon from '../graphics/systems-animation-icons/AnalysisIcon';

import CommunityIcon from '../graphics/systems-animation-icons/CommunityIcon';
import CourseIcon from '../graphics/systems-animation-icons/CourseIcon';
import PaymentsIcon from '../graphics/systems-animation-icons/PaymentsIcon';

import EmailIcon from '../graphics/systems-animation-icons/EmailIcon';
import OfferIcon from '../graphics/systems-animation-icons/OfferIcon';
import ContentIcon from '../graphics/systems-animation-icons/ContentIcon';
import WebsiteIcon from '../graphics/systems-animation-icons/WebsiteIcon';

import SalesIcon from '../graphics/systems-animation-icons/SalesIcon';
import MarketingIcon from '../graphics/systems-animation-icons/MarketingIcon';

import FunnelIcon from '../graphics/systems-animation-icons/FunnelIcon';
import ManagementIcon from '../graphics/systems-animation-icons/ManagementIcon';
import DevelopmentIcon from '../graphics/systems-animation-icons/DevelopmentIcon';

import BrandingIcon from '../graphics/systems-animation-icons/BrandingIcon';
import ScalingIcon from '../graphics/systems-animation-icons/ScalingIcon';
import AutomationsIcon from '../graphics/systems-animation-icons/AutomationsIcon';
import OfferFunnelConnection from '../graphics/systems-animation-connections/OfferFunnelConnection';

export const SystemsAnimation = () => {
	const [scale, setScale] = useState(1);
	const containerRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 600 && containerRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				const graphicWidth = 540; // replace with the actual width of your graphic
				const newScale = containerWidth / graphicWidth;
				setScale(newScale);
			} else {
				setScale(1); // reset scale to 1 if window width is less than 600px
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<figure
			ref={containerRef}
			className="DomGraphic"
			style={{
				'--aspectRatio': '100%',
				'--scale': scale,
			}}
			aria-hidden="true"
			data-js-controller="DomGraphic"
			data-js-source-width=""
			data-js-source-height=""
			data-js-source-width-phone="348"
			data-js-source-height-phone="540"
			data-js-source-width-tablet="540"
			data-js-source-height-tablet="540"
			data-js-source-width-desktop="540"
			data-js-source-height-desktop="540"
		>
			<div className="DomGraphic__heightContainer">
				<div
					className="DomGraphic__scaleContainer"
					data-js-target="DomGraphic.scaleContainer"
					style={{
						transform: `scale(${scale})`,
					}}
				>
					<div
						className="HomepageFrontdoorSuiteAnimation HomepageFrontdoorSubanimation"
						data-js-controller="HomepageFrontdoorSuiteAnimation"
						data-js-context="Sticky"
					>
						<div
							className="HomepageFrontdoorSuiteAnimation__grid"
							data-js-target="HomepageFrontdoorSuiteAnimation.grid"
						>
							{/* Icons */}
							<AnalysisIcon />
							<CommunityIcon />
							<CourseIcon />
							<PaymentsIcon />
							<EmailIcon />
							<OfferIcon />
							<ContentIcon />
							<WebsiteIcon />
							<SalesIcon />
							<MarketingIcon />
							<FunnelIcon />
							<ManagementIcon />
							<DevelopmentIcon />
							<BrandingIcon />
							<ScalingIcon />
							<AutomationsIcon />
						</div>
					</div>
				</div>
			</div>
		</figure>
	);
};
