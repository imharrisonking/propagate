export default function OfferSalesConnection() {
	return (
		<svg
			className="HomepageFrontdoorConnection HomepageFrontdoorSuiteAnimation__connection--offerSales"
			data-js-controller="HomepageFrontdoorConnection"
			data-js-id="Standalone-OfferSalesConnection"
		>
			<defs>
				<linearGradient
					className="RotatingGradient"
					id="Standalone-OfferSalesConnectionGradient"
					gradientUnits="userSpaceOnUse"
					data-js-controller="RotatingGradient"
					data-js-start-rotation="180"
					data-js-speed=""
					x1="77.45114089988401"
					x2="22.54885910017821"
					y1="8.209631931571657"
					y2="91.7903680684692"
				>
					<stop offset="0" stopColor="#5BA5C3"></stop>

					<stop offset="1" stopColor="#A2C7E2"></stop>
				</linearGradient>
			</defs>

			<path
				className="hidden sm:block HomepageFrontdoorSuiteAnimation__connection--offerSales--path"
				stroke="url(#Standalone-OfferSalesConnectionGradient)"
				strokeWidth="2"
				fill="none"
				data-js-target="HomepageFrontdoorConnection.path"
				d="M134,1
                L134,31.999984741210938
                Q134,51.99998474121094
                114,51.99998474121094
                L1,51.99998474121094"
			></path>
			<path
				className="block sm:hidden HomepageFrontdoorSuiteAnimation__connection--offerSales--path"
				stroke="url(#Standalone-OfferSalesConnectionGradient)"
				strokeWidth="2"
				fill="none"
				data-js-target="HomepageFrontdoorConnection.path"
				d="M44.000005203233854,1
                L44.000005203233854,31.999978119734465
                Q44.000005203233854,51.999978119734465
                24.000005203233854,51.999978119734465
                L1,51.999978119734465"
				// style="stroke-dasharray: 86.4645px; stroke-dashoffset: 0px;"
			></path>
		</svg>
	);
}
