"use client"

import React from "react";
import TextHeader from "./TextHeader";
import CardCenter from "../components/CardCenter";
import Link from "next/link";
import { useGetServicesQuery } from "@/store/api/generalApi";

const Services = () => {

	const { data, isLoading, isSuccess } = useGetServicesQuery();

	const results = data?.data.services;


	return (
		<div className='w-[90%] mx-auto mb-[3rem]'>
			<TextHeader
				header='Our Services'
				subHeader='Are you tired of manual billing processes, revenue leakage, and the complexity of managing recurring revenue? Look no further – We is here to transform your business!'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] w-full'>
				{isSuccess && results?.map((data) =>
					<CardCenter
						key={data.id}
						header={data.name}
						subHeader={data.description}
						id={data.id}
						img={data.image}
						results={results}
					/>
				)}
				{(isLoading || results?.length === 0) && [0, 1, 2, 3, 4, 5].map(loader =>
					<div className="">
						<div className='rounded-t-[12px] bg-gray-200 w-[20rem] h-[180px]'></div>
						<h1 className='w-[20rem] mt-4 mb-4 h-4 bg-gray-200 animate-pulse'></h1>
						<h2 className='w-[20rem] h-4 bg-gray-200 animate-pulse'></h2>
					</div>
				)}
			</div>

			{results?.length <= 9 &&
				<Link href='/services' className='mx-auto w-fit bg-black'>
					<h2 className='sf400 text-[1rem] leading-[1.5rem] mt-[5rem] text-[#3361FF] text-center mx-auto'>
						View all &rarr;
					</h2>
				</Link>
			}
		</div>
	);
};

export default Services;
