import React from "react";

const FooterText = ({ header, data }) => {
	return (
		<div>
			<h2 className='inter700 text-[0.825rem] leading-[14px] text-white'> {header} </h2>
			{data?.map((data, i) => (
				<h2 className='sf400 text-white text-[0.825rem] leading-[21px]' key={i}>
					{" "}
					{data.text}{" "}
				</h2>
			))}
		</div>
	);
};

export default FooterText;
