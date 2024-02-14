import React from 'react';

export default function Button({ children, onClick, className }) {
	return (
		<button
			onClick={onClick}
			className={`bg-primary text-white py-2 px-4 rounded-md ${className}`}
		>
			{children}
		</button>
	);
}
