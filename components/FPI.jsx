import React, { useState } from "react";

// FPI stands for form progress indicator
const FPI = () => {
	const [currentForm, setCurrentForm] = useState(1);

	const circles = Array.from({ length: 4 }, (_, index) => (
		<div
			key={index}
			className={`w-[1.5rem] h-[1.5rem] rounded-full ${
				index < currentForm ? "bg-blue-500" : "border border-gray-300"
			}`}
		/>
	));

	const lines = Array.from({ length: 3 }, (_, index) => (
		<div
			key={index}
			className={`flex-1 h-[4px] ${
				index < currentForm - 1
					? "bg-blue-500"
					: "border-t border-b border-gray-300"
			}`}
		/>
	));

	return (
		<div className='flex items-center '>
			{circles.map((circle, index) => (
				<React.Fragment key={index}>
					{circle}
					{index < lines.length && lines[index]}
				</React.Fragment>
			))}
		</div>
	);
};

export default FPI;
