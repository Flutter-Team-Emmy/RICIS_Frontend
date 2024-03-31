import Link from "next/link";
import React from "react";

const CardCenter = ({header, subHeader, img, id}) => {
 

	return (
		<div className='flex items-center flex-col justify-center pb-[1.5rem] border border-transparent border-b-[#DFE0E7]'>
			<img src={img} className='rounded-t-[12px] w-[20rem] h-[180px]' />
			<div className='flex flex-col space-y-[0.75rem] px-12 pt-[2rem]'>
				<h1 className='sf700 text-[20px] leading-[24px] tracking-[-0.64px] text-center'>
					{header}
				</h1>
				<h2 className='inter400 text-[12px] leadingx-[21px] text-center'>
					{subHeader.split('').slice(0,80)}...
				</h2>
			</div>
			<Link 
				href={`/services/${id}`}
				className='sf400 text-[1rem] leading-[1.5rem] text-[#3361FF] mt-[0.5rem]'
			>
				Learn More &rarr;
			</Link>
		</div>
	);
};

export default CardCenter;
