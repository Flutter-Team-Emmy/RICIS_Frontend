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
		first_name: "",
		company_name: "",
		company_location: "",
		last_name: "",
		otp: "",
		company_role: "",
		address: "",
		phone: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleCreate = async () => {
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
			<div className='w-[60%] mx-auto max-w-[440px] mt-[25rem] '>
				<FPI length={3} shade={3} />

				<div className='bg-white rounded-[12px] py-[3rem] px-[3.5rem] border border-[#E6E8EC] mt-[1.5rem]  '>
					<h1 className='formHeader'>Create Account</h1>

					<div className='flex flex-col space-y-[1.5rem]'>
						<TextInput
							label='First Name'
							placeholder='Enter first name'
							type='text'
							value={formData.first_name}
							handleChange={handleChange}
							name='first_name'
						/>

						<TextInput
							label='Last Name'
							placeholder='Enter last name'
							type='text'
							value={formData.last_name}
							handleChange={handleChange}
							name='last_name'
						/>

						<TextInput
							label='Company Name'
							placeholder='Enter Name'
							type='text'
							value={formData.company_name}
							handleChange={handleChange}
							name='company_name'
						/>

						<TextInput
							label='Company Location'
							placeholder='Enter Location'
							type='text'
							value={formData.company_location}
							handleChange={handleChange}
							name='company_location'
						/>

						<TextInput
							label='Phone Number'
							placeholder='Enter Phone Number'
							type='text'
							value={formData.phone}
							handleChange={handleChange}
							name='phone'
						/>

						<TextInput
							label='Company Role'
							placeholder='Enter company role'
							type='text'
							value={formData.company_role}
							handleChange={handleChange}
							name='company_role'
						/>

						<TextInput
							label='Password'
							placeholder='Enter Password'
							type='text'
							endIcon={eyeCloaseIcon}
							value={formData.password}
							handleChange={handleChange}
							name='password'
						/>
					</div>
					<div className='mt-[2.5rem] flex flex-col  space-y-[18px] w-full '>
						<Btn
							text='Next'
							handleClick={handleCreate}
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
