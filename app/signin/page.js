"use client";
import Btn from "@/components/Btn";
import FPI from "@/components/FPI";
import FormLayout from "@/components/FormLayout";
import TextInput from "@/components/TextInput";
import { eyeCloaseIcon, peopleIcon } from "@/svgs";
import { apiCall } from "@/utils/helper";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		as_staff: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleLogin = async () => {
		setLoading(true);
		try {
			const res = await apiCall("api/v1/auth/login", "POST", formData);
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
				<div className='bg-white rounded-[12px] py-[3rem] px-[3.5rem] border border-[#E6E8EC]  '>
					<h1 className='formHeader'>Login</h1>

					<h2 className='inter500 text-[14px] leading-[21px] text-[#8D8D8D] mb-[12px] '>
						Login with the adjacent username and password field! The button only
						work with staff members.
					</h2>

					<div className='rounded-[8px] border-[2px] p-[1rem] flex space-x-[12px] border-[#3361FF] justify-center items-center mb-[1.5rem] '>
						<span>{peopleIcon}</span>

						<h3 className='text-[#3361FF] inter500 text-[14px] leading-[21px] '>
							Login as staff member
						</h3>
					</div>

					<TextInput
						label='Username'
						placeholder=''
						type='text'
						value={formData.email}
						handleChange={handleChange}
						name='email'
					/>

					<div className='flex flex-col items-end mt-[1.5rem] '>
						<TextInput
							label='Password'
							type='password'
							value={formData.password}
							handleChange={handleChange}
							placeholder='Enter Password'
							name='password'
							endIcon={eyeCloaseIcon}
						/>
						<h2 className='inter600 text-[12px] leading-[18px] text-[#0000008A] '>
							Forgot Password?
						</h2>
					</div>

					<div className='mt-[2.5rem] flex flex-col  space-y-[18px] w-full '>
						<Btn
							text='Login'
							handleClick={handleLogin}
							loading={loading}
							disabled={formData.email === "" || formData.password === ""}
						/>
						<h2 className='text-[12px] leading-[14px] text-[#3361FF] inter600 text-center '>
							Dont have an account? <Link href='/signup'>Sign up </Link>{" "}
						</h2>
					</div>
				</div>
			</div>
		</FormLayout>
	);
};

export default Page;
