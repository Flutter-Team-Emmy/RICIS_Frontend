import Link from "next/link";
import React from "react";

const FooterText = ({ header, data }) => {
	return (
		<div>
			<h2 className='inter700 text-[0.825rem] leading-[14px] text-white mb-[1rem]'> {header} </h2>
			{data?.map((data, i) => (
				<Link href={data.href} className='sf400 flex text-[#e2e2e2] text-[0.825rem] leading-[21px] mb-[10px]' key={i}>
					{data.text}
				</Link>
			))}
		</div>
	);
};

export default FooterText;
