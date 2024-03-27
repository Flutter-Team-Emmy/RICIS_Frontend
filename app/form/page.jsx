"use client";
import Btn from "@/components/Btn";
import FormLayout from "@/components/FormLayout";
import TextInput from "@/components/TextInput";
import React from "react";

const Page = () => {
	return (
		<FormLayout>
			<div>
				<div className='bg-white rounded-[12px] py-[48px] px-[51px] w-[60%] max-w-[437px] mx-auto border border-[#E6E8EC] '>
					<h2 className='inter700 text-[1.5rem] leading-[36px] text-black '>
						Application Form
					</h2>

					<div className='flex flex-col space-y-[1.5rem] mt-[2rem] mb-[40px] '>
						<TextInput
							label='Name of Equipment'
							type='text'
							placeholder='Name of Equipment'
						/>
						<TextInput
							label='Manufacturer name'
							type='text'
							placeholder='Manufacturer name'
						/>
						<TextInput
							label='Year of Purchase'
							type='text'
							placeholder='Select category'
						/>
						<TextInput
							label='Number of Use'
							type='text'
							placeholder='model description of your product  eg, AMG 6X6 ...'
						/>
					</div>

					<Btn text='Next' />
				</div>
			</div>
		</FormLayout>
	);
};

export default Page;
