import OfferAnalysisConnection from '../systems-animation-connections/OfferAnalysisConnection';

export default function AnalysisIcon() {
	return (
		<div
			className="
    HomepageFrontdoorIcon
    HomepageFrontdoorIcon--productAnalysis
    HomepageFrontdoorIcon--iconSizeLarge
  "
		>
			{/* Connections */}
			<OfferAnalysisConnection />

			<div
				className="
          HomepageFrontdoorIcon__icon
          HomepageFrontdoorIcon__icon--outline
        "
				data-js-target="HomepageFrontdoorIcon.outlineIcon"
			>
				<div
					className="HomepageFrontdoorIcon__iconLogo"
					data-js-target="HomepageFrontdoorIcon.outlineLogo"
				>
					<svg
						className="HomepageFrontdoorIconOutline "
						width="36"
						height="40"
						viewBox="0 0 36 42"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M34.0243 12.0701L34.3182 12.4746L34.0243 12.0701L18.232 23.5438L18.232 23.5438C16.9056 24.5075 15.0459 23.56 15.0459 21.9204V2.40011C15.0459 1.278 15.9485 0.40946 17.0026 0.507797C20.3248 0.817745 23.5662 1.75441 26.5524 3.27596C29.5385 4.79751 32.2016 6.86926 34.4051 9.37486C35.1042 10.1698 34.9321 11.4106 34.0243 12.0701Z"
							stroke="#CFCFCE"
						/>
						<path
							d="M15.6666 9.1668C24.0429 9.1668 30.8332 15.9571 30.8332 24.3334C30.8332 32.7097 24.0429 39.5 15.6666 39.5C7.29032 39.5 0.5 32.7097 0.5 24.3334C0.5 15.9571 7.29032 9.1668 15.6666 9.1668Z"
							stroke="#CFCFCE"
						/>
					</svg>
				</div>
			</div>
			<div
				className="
          HomepageFrontdoorIcon__icon
          HomepageFrontdoorIcon__icon--solid
        "
				data-js-target="HomepageFrontdoorIcon.solidIcon"
			>
				<div
					className="HomepageFrontdoorIcon__iconLogo"
					data-js-target="HomepageFrontdoorIcon.solidLogo"
				>
					<svg
						className="ProductIcon ProductIcon--Analysis"
						width="36"
						height="40"
						viewBox="0 0 36 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17.049 0.00995854C20.4341 0.325767 23.7367 1.28014 26.7794 2.83046C29.822 4.38077 32.5354 6.49169 34.7806 9.04466C35.6948 10.0842 35.4382 11.6609 34.3182 12.4746L18.5259 23.9483C16.869 25.1522 14.5459 23.9685 14.5459 21.9204V2.40011C14.5459 1.01572 15.6706 -0.118639 17.049 0.00995854Z"
							fill="#A2C7E2"
						/>
						<path
							d="M31.3332 24.3334C31.3332 15.681 24.319 8.6668 15.6666 8.6668C7.01418 8.6668 0 15.681 0 24.3334C0 32.9858 7.01418 40 15.6666 40C24.319 40 31.3332 32.9858 31.3332 24.3334Z"
							fill="#5BA5C3"
						/>
						<path
							d="M29.099 16.2667L18.5259 23.9485C16.869 25.1523 14.5459 23.9686 14.5459 21.9205V8.70642C14.9159 8.68028 15.2895 8.66699 15.6661 8.66699C21.368 8.66699 26.3585 11.713 29.099 16.2667Z"
							fill="url(#paint0_linear_956_290)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_956_290"
								x1="21.3061"
								y1="24.9602"
								x2="16.8407"
								y2="7.43373"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#3A5895" />
								<stop offset="1" stop-color="#5BA5C3" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<span
					className="HomepageFrontdoorIcon__label"
					data-js-target="HomepageFrontdoorIcon.label"
				>
					Analysis
				</span>
			</div>
		</div>
	);
}
