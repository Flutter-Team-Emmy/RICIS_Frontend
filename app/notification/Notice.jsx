import React from "react";

const Notice = () => {
	const data = [
		`Keeping up with your competitor’s latest product announcements in
        real-time is close to impossible. We’ve added Product Launches to the
        list of strategic moves AI Engine... For questions like these, Sienna
        and her team seek information to compile resource lists or reports.`,
		"Research critical vulnerabilities with the new CVE Intelligence Card",
		"Research critical vulnerabilities with the new CVE Intelligence Card",
		`Keeping up with your competitor’s latest product announcements in
        real-time is close to impossible. We’ve added Product Launches to the
        list of strategic moves AI Engine... For questions like these, Sienna
        and her team seek information to compile resource lists or reports.`,
		"How a top 10 pharma company tracks drug innovations and more with us",
		"Don’t miss out on your competitors and partners’ product launches For questions like these, Sienna and her team seek information to compile resource lists or reports.",
		`Keeping up with your competitor’s latest product announcements in
        real-time is close to impossible. We’ve added Product Launches to the
        list of strategic moves AI Engine... For questions like these, Sienna
        and her team seek information to compile resource lists or reports.`,
		"Research critical vulnerabilities with the new CVE Intelligence Card",
		"Research critical vulnerabilities with the new CVE Intelligence Card",
		`Keeping up with your competitor’s latest product announcements in
        real-time is close to impossible. We’ve added Product Launches to the
        list of strategic moves AI Engine... For questions like these, Sienna
        and her team seek information to compile resource lists or reports.`,
		"How a top 10 pharma company tracks drug innovations and more with us",
		"Don’t miss out on your competitors and partners’ product launches For questions like these, Sienna and her team seek information to compile resource lists or reports.",
	];
	return (
		<div className='mt-[1.5rem] w-[90%] mx-auto'>
			<ul className='list-none p-0 m-0 flex flex-col space-y-[8px]'>
				{data.map((text, i) => (
					<li
						className='text-[#000000AD] sf500 text-[1rem] text-justify leading-[36px] text-left flex items-start py-[1rem]'
						key={i}
					>
						<span className='mr-[8px] text-[#000000AD] '>&#8226;</span>
						{text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Notice;
