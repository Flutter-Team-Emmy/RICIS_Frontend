import React from "react";

const BgImgText = ({ url, header, text, isLoading }) => {
	return (
		<div className={`${isLoading && "animate-pulse"}`}
			style={{
				backgroundImage: `url("${url}")`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className='h-[500px] w-full bg-[#00000046] relative'>
				<div className='absolute bottom-[50px] left-[25px] lg:left-[50px]'>
					<h2 className='sf700 text-[1rem] text-white'>{header}</h2>
					<h2 className='sf700 text-[30px] lg:text-[48px] leading-[57.6px] text-white'>
						{text}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default BgImgText;
