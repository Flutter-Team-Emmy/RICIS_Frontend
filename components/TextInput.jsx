"use client";
import React, { useRef } from "react";

const TextInput = ({
	label,
	type,
	placeholder,
	endIcon,
	startIcon,
	value,
	name,
	handleChange,
}) => {
	const inputRef = useRef();
	return (
		<div className='w-full'>
			<h2 className='inter500 text-[14px] text-[#8D8D8D] leading-[21px] mb-[4px] '>
				{label}
			</h2>
			<div className='border items-center border-[#F0F0F0] outline:border-[2px] outline:border-[#3361FF] outline:cursor-[#3361FF]  rounded-[8px] flex px-[1rem] '>
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					value={value && value}
					onChange={(e) => {
						handleChange(e);
					}}
					ref={inputRef}
					className='placeholder:text-[#8d8d8d] placeholder:text-[14px] inter500 text-[14px] text-[#8D8D8D]  py-[14px]  leading-[21px] w-full flex-grow-1 outline-none h-full'
				/>
				<span
					className='w-fit'
					onClick={() => {
						inputRef.current.type = "text";
						console.log(inputRef.current);
					}}
				>
					{" "}
					{endIcon}{" "}
				</span>
			</div>
		</div>
	);
};

export default TextInput;
