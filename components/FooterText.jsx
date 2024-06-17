import Link from "next/link";
import React from "react";

const FooterText = ({ header, data }) => {
	return (
		<div>
			<h2 className='inter700 text-[1rem] font-semibold leading-[14px] text-white mb-[1rem]'> {header} </h2>
			{data?.map((data, i) => (
				<Link
					href={header === "Services" ? `/services/${data.id}` : header === "Legislation/Rules" ? "/legislation_rules" : header === "Information" ? "/information" : data.href}
					className='sf400 flex text-[#e2e2e2] text-xs lg:text-[0.7rem] leading-[21px] mb-[10px]' key={i}>
					{data.name}
				</Link>
			))}
		</div>
	);
};

export default FooterText;
