import React from "react";

const Btn = ({text}) => {
	return (
		<div className='py-[9.5px] px-[1.725rem] bg-[#3361FF] rounded-[4px]'>
			<h1 className='sf600 text-[0.825rem] leading-[21px] text-white text-center'>
				{text}
			</h1>
		</div>
	);
};

export default Btn;
