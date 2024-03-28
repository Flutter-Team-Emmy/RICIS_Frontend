"use client";
import { XIcon } from "@/svgs";
import React from "react";

const FormLayout = ({ handleClick, children }) => {
	return (
		<div className='bg-[#FAFAFA] relative '>
			<div
				className='absolute top-[2.5rem] right-[4rem]'
				onClick={() => {
					handleClick();
				}}
			>
				{XIcon}
			</div>

			<div className='h-screen overflow-auto scroll-hidden flex items-center justify-center py-[2rem] '>
				{children}
			</div>
		</div>
	);
};

export default FormLayout;
