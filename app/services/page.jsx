"use client"

import BgImgText from "@/components/BgImgText";
import CardCenter from "@/components/CardCenter";
import MainLayout from "@/components/mainLayout";
import { useGetServicesQuery } from "@/store/api/generalApi";
import React from "react";

const page = () => {

	const { data, isLoading, isSuccess } = useGetServicesQuery();

	const results = data?.data.services;
	const imgUrl = data?.data.image;
	const description = data?.data.description;

	return (
		<MainLayout>
			<div>
				<BgImgText text='Our Services' url={imgUrl} />
				<div className='w-[90%] mx-auto my-[4rem]'>
					<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
						{description}
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] w-[80%] mb-[6rem] mx-auto'>
					{isSuccess && results?.map((data) =>
						<CardCenter
							key={data.id}
							header={data.name}
							subHeader={data.description}
							id={data.id}
							img={data.image}
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
			</div>
		</MainLayout>
	);
};

export default page;
