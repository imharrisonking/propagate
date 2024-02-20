import Link from 'next/link';
import Button from './Button';

export default function HeaderButton({ headerExpanded, theme }) {
	const transitionStyles = {
		transition: 'transform 500ms ease 0s, opacity 500ms ease 0s',
		opacity: headerExpanded ? 0 : 1,
	};

	const paddingTop = 'py-2';

	const additionalClasses = `${paddingTop}`;

	return (
		<Link href="/demo" className="flex items-center align-middle">
			<Button
				additionalClasses={additionalClasses}
				additionalStyles={transitionStyles}
				theme={theme}
			>
				Free demo
			</Button>
		</Link>
	);
}
