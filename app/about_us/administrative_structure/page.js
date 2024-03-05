/* eslint-disable react/no-unescaped-entities */
import BgImgText from "@/components/BgImgText";
import React from "react";
import Card from "./Card";

const Admin = () => {
	const data = [
		{
			name: "Seth Giveon",
			position: "Founder, and CEO",
			text: `Doctors and researchers might ask Sienna’s team whether a particular
            drug was ever linked to an adverse event, like “Has amoxycillin ever
            caused encephalitis?” Or they might answer questions about new drug
            delivery platforms, like “How do you get our large molecule drug
            inside the cell so that it can actually get to the target, where it
            will do the work of curing the disease?” For questions like these,
            Sienna and her team seek information to compile resource lists or
            reports.`,
			img: "/images/man.jpg",
		},
		{
			name: "Seth Giveon",
			position: "Founder, and CEO",
			text: `Doctors and researchers might ask Sienna’s team whether a particular
            drug was ever linked to an adverse event, like “Has amoxycillin ever
            caused encephalitis?” Or they might answer questions about new drug
            delivery platforms, like “How do you get our large molecule drug
            inside the cell so that it can actually get to the target, where it
            will do the work of curing the disease?” For questions like these,
            Sienna and her team seek information to compile resource lists or
            reports.`,
			img: "/images/man.jpg",
		},
		{
			name: "Seth Giveon",
			position: "Founder, and CEO",
			text: `Doctors and researchers might ask Sienna’s team whether a particular
            drug was ever linked to an adverse event, like “Has amoxycillin ever
            caused encephalitis?” Or they might answer questions about new drug
            delivery platforms, like “How do you get our large molecule drug
            inside the cell so that it can actually get to the target, where it
            will do the work of curing the disease?” For questions like these,
            Sienna and her team seek information to compile resource lists or
            reports.`,
			img: "/images/man.jpg",
		},
		{
			name: "Seth Giveon",
			position: "Founder, and CEO",
			text: `Doctors and researchers might ask Sienna’s team whether a particular
            drug was ever linked to an adverse event, like “Has amoxycillin ever
            caused encephalitis?” Or they might answer questions about new drug
            delivery platforms, like “How do you get our large molecule drug
            inside the cell so that it can actually get to the target, where it
            will do the work of curing the disease?” For questions like these,
            Sienna and her team seek information to compile resource lists or
            reports.`,
			img: "/images/man.jpg",
		},
	];
	return (
		<div>
			<BgImgText header='About Us' text='Administrative Structure' />
			<div className='pt-[4rem] pb-[6rem] w-[90%] mx-auto flex flex-col space-y-[4rem]'>
				{data.map((data, i) => (
					<Card
						key={i}
						name={data.name}
						position={data.position}
						text={data.text}
						img={data.img}
					/>
				))}
			</div>

			<div className='w-[90%]  mx-auto bg-[#F8F9FA] px-[40px] py-[64px] mb-[6rem]'>
				<h1 className=' sf700 text-[2.5rem] leading-[60px] text-center '>
					List of Our RICIS Structure{" "}
				</h1>

				<h2 className=' sf400 text-[1.25rem] leading-[30px] text-center mt-[40px] '>
					Our RICIS structure encompasses a comprehensive framework that drives
					our organization's approach to addressing complex societal challenges
					It guides our endeavors towards meaningful and enduring contributions
					to the world.
				</h2>

				<img src='/images/table.jpg' className=' mx-auto mt-[64px] ' />
			</div>
		</div>
	);
};

export default Admin;
