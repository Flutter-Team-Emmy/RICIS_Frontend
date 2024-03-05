import React from "react";

const Text = ({ header, text }) => {
	return (
		<div>
			<h1 className='sf600 text-[2rem] leading-[48px]'> {header} </h1>
			<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mt-[0.5rem] '>
				{text}
			</h2>
		</div>
	);
};

export default Text;
