import React from "react";

const FooterText = ({ header, data }) => {
	return (
		<div>
			<h2 className='inter700 text-[0.825rem] leading-[14px] text-white mb-[1rem]'> {header} </h2>
			{data?.map((data, i) => (
				<h2 className='sf400 text-[#e2e2e2] text-[0.825rem] leading-[21px] mb-[10px]' key={i}>
					{" "}
					{data.text}{" "}
				</h2>
			))}
		</div>
	);
};

export default FooterText;
