import React from "react";

const BgImgText = ({ url, header, text }) => {
	return (
		<div
			style={{
				backgroundImage: `url("${url}")`,
				backgroundSize: "cover",
				backgroundPosition: "cover",
			}}
		>
			<div className='h-[500px] w-full bg-[#00000046] relative'>
				<div className='absolute bottom-[50px] left-[50px]'>
					<h2 className='sf700 text-[0.825rem] text-white'>{header}</h2>
					<h2 className='sf700 text-[48px] leading-[57.6px] text-white'>
						{text}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default BgImgText;
