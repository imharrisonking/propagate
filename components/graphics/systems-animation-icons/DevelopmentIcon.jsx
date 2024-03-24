import DevelopmentPaymentsConnection from '../systems-animation-connections/DevelopmentPaymentsConnection';
import DevelopmentWebsiteConnection from '../systems-animation-connections/DevelopmentWebsiteConnection';

export default function DevelopmentIcon() {
	return (
		<div
			className="
    HomepageFrontdoorIcon
    HomepageFrontdoorIcon--productDevelopment
    HomepageFrontdoorIcon--iconSizeLarge

  "
		>
			{/* Connections */}
			<DevelopmentPaymentsConnection />
			<DevelopmentWebsiteConnection />

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
						width="42"
						height="41"
						viewBox="0 0 42 41"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 17.7265L21 23.3022V12.1509L11 6.5752V17.7265Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M31 17.7265V6.5752L21 12.1509V23.3022L31 17.7265Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M31 6.57567L21 1L11 6.57567L21 12.1513L31 6.57567Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M1 34.4287L11 40.0044V28.853L1 23.2773V34.4287Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M21 34.4287V23.2773L11 28.853V40.0044L21 34.4287Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M21 23.2768L11 17.7012L1 23.2768L11 28.8525L21 23.2768Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M21 34.4287L31 40.0044V28.853L21 23.2773V34.4287Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M41 34.4287V23.2773L31 28.853V40.0044L41 34.4287Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
						/>
						<path
							d="M41 23.2768L31 17.7012L21 23.2768L31 28.8525L41 23.2768Z"
							stroke="#CFCFCE"
							strokeLinejoin="round"
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
						className="ProductIcon ProductIcon--Development "
						width="40"
						height="39"
						viewBox="0 0 40 39"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 16.7265L20 22.3022V11.1509L10 5.5752V16.7265Z"
							fill="#E07F51"
						/>
						<path
							d="M30 16.7265V5.5752L20 11.1509V22.3022L30 16.7265Z"
							fill="#D0696B"
						/>
						<path
							d="M30 5.57567L20 0L10 5.57567L20 11.1513L30 5.57567Z"
							fill="#F39934"
						/>
						<path
							d="M0 33.4287L9.99999 39.0044V27.853L0 22.2773V33.4287Z"
							fill="#E07F51"
						/>
						<path
							d="M20 33.4287V22.2773L10 27.853V39.0044L20 33.4287Z"
							fill="#D0696B"
						/>
						<path
							d="M20 22.2768L9.99998 16.7012L0 22.2768L9.99998 27.8525L20 22.2768Z"
							fill="#F39934"
						/>
						<path
							d="M20 33.4287L30 39.0044V27.853L20 22.2773V33.4287Z"
							fill="#E07F51"
						/>
						<path
							d="M40 33.4287V22.2773L30 27.853V39.0044L40 33.4287Z"
							fill="#D0696B"
						/>
						<path
							d="M40 22.2768L30 16.7012L20 22.2768L30 27.8525L40 22.2768Z"
							fill="#F39934"
						/>
					</svg>
				</div>
				<span
					className="HomepageFrontdoorIcon__label"
					data-js-target="HomepageFrontdoorIcon.label"
				>
					Develop
				</span>
			</div>
		</div>
	);
}
