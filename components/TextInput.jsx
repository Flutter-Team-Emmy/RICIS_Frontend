"use client";
import React from "react";

const TextInput = ({ label, type, placeholder }) => {
	return (
		<div className="w-full">
			<h2 className='inter500 text-[14px] text-[#8D8D8D] leading-[21px] mb-[4px] '>
				{label}
			</h2>
			<input
				type={type}
				placeholder={placeholder}
				className='placeholder:text-[#8d8d8d] placeholder:text-[14px] inter500 text-[14px] text-[#8D8D8D] leading-[21px] rounded-[8px] p-[1rem] border border-[#F0F0F0] outline:border-[2px] outline:border-[#3361FF] outline:cursor-[#3361FF] w-full'
			/>
		</div>
	);
};

export default TextInput;
