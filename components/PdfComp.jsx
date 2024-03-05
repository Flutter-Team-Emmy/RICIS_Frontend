import { file, grid } from "@/svgs";
import React from "react";

const PdfComp = ({ data }) => {
	return (
		<div
			className={`p-[40px] flex flex-col space-y-[32px] border rounded-[12px] border-l-[#E0E0E0] border-r-[#E0E0E0] border-b-[#E0E0E0] border-t-[4px]  ${
				data?.type === "excel" ? "border-t-[#3CD35D]" : "border-t-[#3361FF]"
			} `}
		>
			<div className='flex space-x-[20px]'>
				<div
					className={`${
						data?.type === "excel" ? "bg-[#6DCC81] p-[1rem]  " : "bg-[#3361FF]"
					} rounded-[4px] h-[64px] w-[64px] flex items-center justify-center`}
				>
					<span> {data?.type === "excel" ? grid : file} </span>
				</div>

				<div className='flex flex-col justify-between items-start'>
					<h2 className='sf500 text-[14px] leading-[21px] '>{data?.page}</h2>
					<h1
						className={` ${
							data?.type === "excel" ? "text-[#6DCC81]" : "text-[#3361FF]"
						} sf500 text-[24px] leading-[36px]`}
					>
						{" "}
						{data?.name}{" "}
					</h1>
				</div>
			</div>

			<div className='bg-[#F8F9FA] rounded-[24px] w-full pt-[96px] pl-[60px] '>
				<img src={data?.img} className='rounded-[16px]' />
			</div>

			<div className='w-full flex justify-end'>
				<div
					className={`py-[10px] px-[20px] ${
						data?.type === "excel" ? "border-[#6DCC81]" : "border-[#3361FF]"
					} border rounded-[6px]  `}
				>
					<h2
						className={` ${
							data?.type === "excel" ? "text-[#6DCC81]" : "text-[#3361FF]"
						} inter700 text-[18px] leading-[27px]`}
					>
						Download
					</h2>
				</div>
			</div>
		</div>
	);
};

export default PdfComp;
