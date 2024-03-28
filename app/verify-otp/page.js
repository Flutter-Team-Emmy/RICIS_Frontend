"use client";
import Btn from "@/components/Btn";
import FPI from "@/components/FPI";
import FormLayout from "@/components/FormLayout";
import TextInput from "@/components/TextInput";
import { eyeCloaseIcon, peopleIcon } from "@/svgs";
import { apiCall } from "@/utils/helper";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
	const [loading, setLoading] = useState(false);
	const useParams = useSearchParams();
	const [formData, setFormData] = useState({
		email: "",
		otp: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleVerify = async () => {
		setLoading(true);
		formData.email = useParams.get("email");
		try {
			const res = await apiCall("api/v1/auth/verify-otp", "POST", formData);
			console.log(res);
		} catch (error) {
			setLoading(false);
			console.log(error);
			// toast.error(error.message);
		}
	};

	return (
		<FormLayout>
			<div className='w-[60%] mx-auto max-w-[440px]'>
				<FPI length={3} shade={2} />

				<div className='bg-white rounded-[12px] py-[3rem] px-[3.5rem] border border-[#E6E8EC] mt-[1.5rem]  '>
					<h1 className='formHeader'>Verification Code</h1>

					<div>
						<h2 className='inter500 text-[14px] text-[#8D8D8D] leading-[21px] mb-[4px] '>
							OTP
						</h2>
						<div className='flex space-x-[12px]'>
							<input
								type='text'
								className='w-[75px] h-[52px] outline-none border-[2px] rounded-[4px] border-[#F0F0F0] '
							/>
							<input
								type='text'
								className='w-[75px] h-[52px] outline-none border-[2px] rounded-[4px] border-[#F0F0F0] '
							/>
							<input
								type='text'
								className='w-[75px] h-[52px] outline-none border-[2px] rounded-[4px] border-[#F0F0F0] '
							/>
							<input
								type='text'
								className='w-[75px] h-[52px] outline-none border-[2px] rounded-[4px] border-[#F0F0F0] '
							/>
						</div>
					</div>

					<div className='mt-[2.5rem] flex flex-col  space-y-[18px] w-full '>
						<Btn
							text='Next'
							handleClick={handleVerify}
							loading={loading}
							disabled={formData.email === ""}
						/>
						<h2 className='text-[12px] leading-[14px] text-[#3361FF] inter600 text-center '>
							Already have an account? <Link href='/login'>Sign In </Link>{" "}
						</h2>
					</div>
				</div>
			</div>
		</FormLayout>
	);
};

export default Page;
