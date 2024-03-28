"use client";
import Btn from "@/components/Btn";
import FPI from "@/components/FPI";
import FormLayout from "@/components/FormLayout";
import TextInput from "@/components/TextInput";
import { eyeCloaseIcon, peopleIcon } from "@/svgs";
import { apiCall } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSignup = async () => {
		setLoading(true);
		try {
			const res = await apiCall(
				"api/v1/auth/request-registration-otp",
				"POST",
				formData,
			);
			console.log(res);
		} catch (error) {
			setLoading(false);
			console.log(error);
			router.push(`/verify-otp?email=${formData.email}`);
			// toast.error(error.message);
		}
	};

	return (
		<FormLayout>
			<div className='w-[60%] mx-auto max-w-[440px]'>

                <FPI length={3} shade={1} />

				<div className='bg-white rounded-[12px] py-[3rem] px-[3.5rem] border border-[#E6E8EC] mt-[1.5rem]  '>
					<h1 className='formHeader'>Sign up</h1>

					<TextInput
						label='Email'
						placeholder='Enter Email'
						type='text'
						value={formData.email}
						handleChange={handleChange}
						name='email'
					/>

					<div className='mt-[2.5rem] flex flex-col  space-y-[18px] w-full '>
						<Btn
							text='Next'
							handleClick={handleSignup}
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
