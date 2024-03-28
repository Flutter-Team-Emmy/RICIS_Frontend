import React from "react";
import { ClipLoader, FadeLoader } from "react-spinners";

const Btn = ({ text, disabled, handleClick, loading }) => {
	return (
		<div
			className={`py-[9.5px] px-[1.725rem] cursor-pointer flex items-center justify-center ${
				disabled ? "bg-gray-200" : "bg-[#3361FF] "
			} rounded-[4px]`}
			onClick={
				disabled
					? () => {}
					: () => {
							handleClick();
					  }
			}
		>
			{loading ? (
				<ClipLoader color='#fff' size={25} />
			) : (
				<h1
					className={`sf600 text-[0.825rem] leading-[21px] text-center ${
						disabled ? "text-gray-500" : "text-white "
					} `}
				>
					{text}
				</h1>
			)}
		</div>
	);
};

export default Btn;
