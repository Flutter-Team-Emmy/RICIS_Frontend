/* eslint-disable react/no-unescaped-entities */
import Btn from "../components/Btn";
import Link from "next/link";
import React from "react";

const ThirdSect = () => {
	return (
		<div className='w-full bg-[#F8F9FA] py-[5rem] '>
			<div className='flex flex-col md:flex-row md:w-[70%] mx-auto md:space-x-[2rem] items-center'>
				<img src='/images/legis.jpg' className='rounded-[12px]' />
				<div className='flex flex-col items-left '>
					<h1 className='sf700 md:text-[2rem] md:leading-[48px]  mb-[1.25rem]'>
						Legislation and Rule Overview Management and Guide
					</h1>
					<h2 className='sf400 text-[0.825rem] leading:[21px] mb-[2rem]'>
						We understand the challenges businesses face when it comes to
						managing subscriptions and billing. That's why we offer intelligent
						software solutions that automate pricing, billing, and revenue
						recognition. Say goodbye to revenue leakage and hello to streamlined
						processes that will save you time and money.
					</h2>

					<Link href='/legislation_rules' className='w-fit'>
						<Btn text='Learn more &rarr;' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ThirdSect;
