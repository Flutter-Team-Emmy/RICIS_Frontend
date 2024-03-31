"use client"

import BgImgText from "@/components/BgImgText";
import React from "react";
import Card from "./Card";
import MainLayout from "@/components/mainLayout";
import { useGetAdministrativePersonnelsQuery } from "@/store/api/generalApi";

const Admin = () => {

	const { data, isLoading, isSuccess } = useGetAdministrativePersonnelsQuery();

	const results = data?.data.administrative_personnel;
	const imgUrl = data?.data.image;
	const description = data?.data.description;

	return (
		<MainLayout>
			<div>
				<BgImgText isLoading={isLoading} url={imgUrl} header='About Us' text='Administrative Structure' />
				<div className='pt-[4rem] pb-[6rem] w-[90%] mx-auto lg:flex flex-col space-y-[4rem]'>
					{isSuccess && results?.map((data) => (
						<Card
							key={data.id}
							name={data.name}
							position={data.position}
							text={data.description}
							img={data.image}
						/>
					))}
					{(isLoading || results?.length === 0) && [0, 1, 2, 3].map(loader =>
						<div className="grid lg:grid-cols-[25rem,1fr] gap-x-0 pt-6">
							<div className="w-[20rem] h-[20rem] bg-gray-200 animate-pulse rounded-[8px]" ></div>
							<div className="pl-4 pt-6">
								<h1 className="h-4 w-[25%] mb-4 bg-gray-200 animate-pulse"></h1>
								<h2 className="h-6 w-[40%] mb-4 bg-gray-200 animate-pulse"></h2>
								<h2 className="h-[75%] w-[90%] bg-gray-200 animate-pulse"></h2>
							</div>
						</div>
					)}
				</div>

				<div className='w-[90%]  mx-auto bg-[#F8F9FA] px-[40px] py-[64px] mb-[6rem]'>
					<h1 className=' sf700 text-[2.5rem] leading-[60px] text-center '>
						List of Our RICIS Structure{" "}
					</h1>

					<h2 className=' sf400 text-[1.25rem] leading-[30px] text-center mt-[40px] '>
						Our RICIS structure encompasses a comprehensive framework that
						drives our organization's approach to addressing complex societal
						challenges It guides our endeavors towards meaningful and enduring
						contributions to the world.
					</h2>

					<img src='/images/table.jpg' className=' mx-auto mt-[64px] ' />
				</div>
			</div>
		</MainLayout>
	);
};

export default Admin;
