import React from "react";

const Card = ({img, position, name, text}) => {
	return (
		<div className="flex items-center space-x-[1.5rem]">
			<img src={img} className="rounded-[8px]" />
			<div>
				<h1 className='sf600 text-[2rem] leading-[48px]'>{name}</h1>
				<h2 className='text-[1.25rem] leading-[30px] sf500 mt-[4px]'>
					{position}
				</h2>
				<h2 className='mt-[12px] text-[#0000006a] sf400 text-[1.25rem] leading-[30px] '>
				{text}
				</h2>
			</div>
		</div>
	);
};

export default Card;
