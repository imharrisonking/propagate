export default function OfferFunnelConnection() {
	return (
		<svg
			className="HomepageFrontdoorConnection HomepageFrontdoorSuiteAnimation__connection--offerFunnel"
			data-js-controller="HomepageFrontdoorConnection"
			data-js-id="Standalone-OfferFunnelConnection"
		>
			<defs>
				<linearGradient
					className="RotatingGradient"
					id="Standalone-OfferFunnelConnectionGradient"
					gradientUnits="userSpaceOnUse"
					data-js-controller="RotatingGradient"
					data-js-start-rotation=""
					data-js-speed=""
					x1="28.9086400912981"
					x2="71.09135990870656"
					y1="95.3338122950365"
					y2="4.666187704965672"
				>
					<stop offset="0" stopColor="#5BA5C3"></stop>

					<stop offset="1" stopColor="#A2C7E2"></stop>
				</linearGradient>
			</defs>

			<path
				className="HomepageFrontdoorSuiteAnimation__connection--offerFunnel--path"
				stroke="url(#Standalone-OfferFunnelConnectionGradient)"
				strokeWidth="2"
				fill="none"
				data-js-target="HomepageFrontdoorConnection.path"
				d="M1,1
                L1,103.00001525878906"
				// style={{ strokeDasharray: '102px', strokeDashoffset: '102px' }}
			></path>
		</svg>
	);
}
