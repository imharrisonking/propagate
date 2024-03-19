import OfferFunnelConnection from '../systems-animation-connections/OfferFunnelConnection';
import OfferSalesConnection from '../systems-animation-connections/OfferSalesConnection';

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
							d="M35.6131 12.2751C35.3256 11.8094 34.897 11.4481 34.3898 11.2438L9.54483 1.19071C8.7501 0.868453 7.84738 0.963061 7.13649 1.44311C6.4256 1.92316 5.99961 2.7258 6 3.58446V16.0001C5.99917 17.0531 6.63785 18.0007 7.61327 18.3938L14.0539 21.0001L35.6131 29.722C35.8673 29.3132 36.0014 28.841 36 28.3595V13.6376C36.0014 13.156 35.8673 12.6838 35.6131 12.2751Z"
							stroke="#CFCFCE"
						></path>
						<path
							d="M35.6252 12.2782L14.0603 21.0001L7.61394 23.6094C6.63917 24.0021 6.00045 24.9482 6 26.0001V38.4157C6 39.2735 6.42577 40.0753 7.13608 40.5552C7.84639 41.0351 8.74845 41.1304 9.54317 40.8094L34.4015 30.7563C34.9059 30.5493 35.3305 30.1856 35.6128 29.7188C35.8666 29.3099 36.0008 28.8378 36 28.3563V13.6407C36.005 13.1604 35.8752 12.6882 35.6252 12.2782Z"
							stroke="#CFCFCE"
						></path>
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
							d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
							fill="url(#product-icon-offer-Sticky-a)"
						></path>
						<path
							d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
							fill="#96F"
						></path>
						<path
							d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
							fill="url(#product-icon-offer-Sticky-b)"
						></path>
						<defs>
							<linearGradient
								id="product-icon-offer-Sticky-a"
								x1="20"
								y1="4.13"
								x2="20"
								y2="21.13"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#11EFE3"></stop>
								<stop offset="1" stopColor="#21CFE0"></stop>
							</linearGradient>
							<linearGradient
								id="product-icon-offer-Sticky-b"
								x1="35"
								y1="11.28"
								x2="35"
								y2="28.72"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#0048E5"></stop>
								<stop offset="1" stopColor="#9B66FF"></stop>
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
