export default function DevelopmentWebsiteConnection() {
	return (
		<>
			<svg
				className="HomepageFrontdoorConnection HomepageFrontdoorSuiteAnimation__connection--developmentWebsite"
				data-js-controller="HomepageFrontdoorConnection"
				data-js-id="Standalone-DevelopmentConnectionConnection"
			>
				<defs>
					<linearGradient
						className="RotatingGradient"
						id="Standalone-DevelopmentWebsiteConnectionGradient"
						gradientUnits="userSpaceOnUse"
						data-js-controller="RotatingGradient"
						data-js-start-rotation=""
						data-js-speed=""
						x1="27.18392045499413"
						x2="72.81607954502057"
						y1="94.49074638838917"
						y2="5.509253611618362"
					>
						<stop offset="0" stopColor="#0073e6"></stop>

						<stop offset="1" stopColor="#ff80ff"></stop>
					</linearGradient>
				</defs>

				<path
					className="hidden sm:block
                HomepageFrontdoorSuiteAnimation__connection--developmentWebsite--path"
					stroke="url(#Sticky-IssuingTreasuryConnectionGradient)"
					strokeWidth="2"
					fill="none"
					data-js-target="HomepageFrontdoorConnection.path"
					d="M1,142.000012081739
                L1,21
                Q1,1 21,1
                L44.00000755108687,1"
					// style="stroke-dasharray: 176.465px; stroke-dashoffset: 176.465px;"
				></path>
				<path
					className="block sm:hidden
                HomepageFrontdoorSuiteAnimation__connection--developmentWebsite--path"
					stroke="url(#Standalone-DevelopmentWebsiteConnectionGradient)"
					strokeWidth="2"
					fill="none"
					data-js-target="HomepageFrontdoorConnection.path"
					d="M1,1
                L125,1"
				></path>
			</svg>
		</>
	);
}
