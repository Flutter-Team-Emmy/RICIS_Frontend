import React from "react";

const Card = ({ img, position, name, text }) => {
	return (
		<div className="grid lg:grid-cols-[25rem,1fr] gap-x-0">
			<img src={img} className="w-[20rem] h-[20rem] rounded-[8px]" />
			<div className="pl-4">
				<h1 className="sf600 text-2xl leading-[48px]">{name}</h1>
				<h2 className="text-lg leading-[30px] sf500 mt-4">{position}</h2>
				<h2 className="mt-4 text-[#0000006a] sf400 text-base leading-[30px]">
					{text}
				</h2>
			</div>
		</div>
	);
};

export default Card;
