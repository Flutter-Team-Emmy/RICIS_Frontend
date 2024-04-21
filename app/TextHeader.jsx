import React from "react";

const TextHeader = ({ header, subHeader }) => {
	return (
		<div className='flex flex-col space-y-[20px] items-center justify-center mx-auto lg:max-w-lg mt-[6rem] mb-[5rem]'>
			<h1 className='sf700 text-2xl lg:text-4xl leading-[38.4px]'>{header}</h1>
			<h2 className='sf400 text-[18px] 2xl:text-[18px] leading-[27px] text-gray-400 text-center'>
				{subHeader}
			</h2>
		</div>
	);
};

export default TextHeader;
