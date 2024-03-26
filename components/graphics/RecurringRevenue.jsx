import OneTier from './recurring-revenue/OneTier';
import TwoTiers from './recurring-revenue/TwoTiers';
import ThreeTiers from './recurring-revenue/ThreeTiers';
import RevenueHeader from './recurring-revenue/RevenueHeader';

export default function RecurringRevenue() {
	return (
		<div className="bg-white w-[520px] h-[426px] rounded-lg">
			<RevenueHeader />
			<div className="HomepageFrontdoorBillingGraphic__tierListContainer">
				<OneTier />
				{/* <TwoTiers/> */}
				{/* <ThreeTiers/> */}
			</div>
		</div>
	);
}
