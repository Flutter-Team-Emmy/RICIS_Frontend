"use client";
import { XIcon } from "@/svgs";
import React from "react";

const FormLayout = ({ handleClick, children }) => {
	return (
		<div className='bg-[#FAFAFA] relative h-screen overflow-auto scroll-hidden'>
			<div
				className='absolute top-[2.5rem] right-[4rem]'
				onClick={() => {
					handleClick();
				}}
			>
				{XIcon}
			</div>

			<div>{children}</div>
		</div>
	);
};

export default FormLayout;
