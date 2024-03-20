export default function DevelopmentPaymentsConnection() {
	return (
		<svg
			className="HomepageFrontdoorConnection HomepageFrontdoorSuiteAnimation__connection--developmentPayments"
			data-js-controller="HomepageFrontdoorConnection"
			data-js-id="Standalone-IssuingCapitalConnection"
		>
			<defs>
				<linearGradient
					className="RotatingGradient"
					id="Standalone-IssuingCapitalConnectionGradient"
					gradientUnits="userSpaceOnUse"
					data-js-controller="RotatingGradient"
					data-js-start-rotation="-30"
					data-js-speed=""
					x1="99.46679897674827"
					x2="0.5332010232517135"
					y1="57.28256815924007"
					y2="42.717431840760106"
				>
					<stop offset="0" stopColor="#0073e6"></stop>

					<stop offset="1" stopColor="#ff80ff"></stop>
				</linearGradient>
			</defs>

			<path
				className="hidden sm:block
                HomepageFrontdoorSuiteAnimation__connection--developmentPayments--path"
				stroke="url(#Standalone-IssuingCapitalConnectionGradient)"
				stroke-width="2"
				fill="none"
				data-js-target="HomepageFrontdoorConnection.path"
				d="M1,193 L1,1"
			></path>
			<path
				className="block sm:hidden HomepageFrontdoorSuiteAnimation__connection--developmentPayments--path"
				stroke="url(#Standalone-IssuingCapitalConnectionGradient)"
				stroke-width="2"
				fill="none"
				data-js-target="HomepageFrontdoorConnection.path"
				d="M1,44
                L32,44
                Q52,44
                52,24
                L52,1"
				// style="stroke-dasharray: 86.4645px; stroke-dashoffset: 86.4645px;"
			></path>
		</svg>
	);
}
