import OfferFunnelConnection from '../systems-animation-connections/OfferFunnelConnection';
import OfferSalesConnection from '../systems-animation-connections/OfferSalesConnection';
import OfferMarketingConnection from '../systems-animation-connections/OfferMarketingConnection';

export default function OfferIcon() {
	return (
		<div
			className="
            HomepageFrontdoorIcon
            HomepageFrontdoorIcon--productOffer
            HomepageFrontdoorIcon--iconSizeLarge

  "
		>
			{/* Connections */}
			<OfferFunnelConnection />
			<OfferSalesConnection />
			<OfferMarketingConnection />

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
						height="42"
						viewBox="0 0 42 42"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 4.56841V32.7462C1 33.5409 2.09629 33.9389 2.73745 33.3769L10.5816 26.5015C10.9633 26.1669 11.4811 25.9789 12.0209 25.9789H33.5689C35.8174 25.9789 37.64 24.3813 37.64 22.4105V4.56841C37.64 2.59763 35.8174 1 33.5689 1H5.07111C2.8227 1 1 2.59763 1 4.56841Z"
							stroke="#CFCFCE"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M41 20.4788V40.369C41 40.93 40.2245 41.211 39.7709 40.8142L34.2218 35.961C33.9517 35.7249 33.5854 35.5921 33.2035 35.5921H17.96C16.3694 35.5921 15.08 34.4644 15.08 33.0732V20.4788C15.08 19.0877 16.3694 17.96 17.96 17.96H38.12C39.7106 17.96 41 19.0877 41 20.4788Z"
							stroke="#CFCFCE"
							stroke-linecap="round"
							stroke-linejoin="round"
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
						className="ProductIcon ProductIcon--Offer "
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 3.56841V31.7462C0 32.5409 1.09629 32.9389 1.73745 32.3769L9.58158 25.5015C9.96331 25.1669 10.4811 24.9789 11.0209 24.9789H32.5689C34.8174 24.9789 36.64 23.3813 36.64 21.4105V3.56841C36.64 1.59763 34.8174 0 32.5689 0H4.07111C1.8227 0 0 1.59763 0 3.56841Z"
							fill="#A2C7E2"
						/>
						<path
							d="M40 19.4788V39.369C40 39.93 39.2245 40.211 38.7709 39.8142L33.2218 34.961C32.9517 34.7249 32.5854 34.5921 32.2035 34.5921H16.96C15.3694 34.5921 14.08 33.4644 14.08 32.0732V19.4788C14.08 18.0877 15.3694 16.96 16.96 16.96H37.12C38.7106 16.96 40 18.0877 40 19.4788Z"
							fill="#5BA5C3"
						/>
						<path
							d="M40 19.4788V39.369C40 39.93 39.2245 40.211 38.7709 39.8142L33.2218 34.961C32.9517 34.7249 32.5854 34.5921 32.2035 34.5921H16.96C15.3694 34.5921 14.08 33.4644 14.08 32.0732V19.4788C14.08 18.0877 15.3694 16.96 16.96 16.96H37.12C38.7106 16.96 40 18.0877 40 19.4788Z"
							fill="#5BA5C3"
						/>
						<path
							d="M0 3.56841V31.7462C0 32.5409 1.09629 32.9389 1.73745 32.3769L9.58158 25.5015C9.96331 25.1669 10.4811 24.9789 11.0209 24.9789H32.5689C34.8174 24.9789 36.64 23.3813 36.64 21.4105V3.56841C36.64 1.59763 34.8174 0 32.5689 0H4.07111C1.8227 0 0 1.59763 0 3.56841Z"
							fill="#A2C7E2"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M36.6401 16.96H16.9601C15.3695 16.96 14.0801 18.0877 14.0801 19.4788V24.9788H32.569C34.8174 24.9788 36.6401 23.3813 36.6401 21.4104V16.96Z"
							fill="url(#paint0_linear_956_319)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_956_319"
								x1="8.80008"
								y1="9.83996"
								x2="41.6001"
								y2="34.8"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#5BA5C3" />
								<stop offset="1" stop-color="#3A5895" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<span
					className="HomepageFrontdoorIcon__label"
					data-js-target="HomepageFrontdoorIcon.label"
				>
					Offer
				</span>
			</div>

			{/* Connections */}
			{/* <OfferFunnelConnection />
			<OfferSalesConnection /> */}
		</div>
	);
}
