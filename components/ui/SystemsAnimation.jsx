import React from 'react';
import CommunityIcon from '../graphics/systems-animation-icons/CommunityIcon';
import EmailIcon from '../graphics/systems-animation-icons/EmailIcon';
import PaymentsIcon from '../graphics/systems-animation-icons/PaymentsIcon';
import AnalysisIcon from '../graphics/systems-animation-icons/AnalysisIcon';

export const SystemsAnimation = () => {
	return (
		<div className="HomepageFrontdoorSuiteAnimation">
			<div className="HomepageFrontdoorSuiteAnimation__grid">
				<AnalysisIcon />
				<CommunityIcon />
				<PaymentsIcon />
				<EmailIcon />
			</div>
		</div>
	);
};
