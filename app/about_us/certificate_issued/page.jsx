"use client"

import BgImgText from "@/components/BgImgText";
import React from "react";
import Text from "./Text";
import MainLayout from "@/components/mainLayout";
import { useGetAboutCertificateQuery } from "@/store/api/generalApi";

const Cert = () => {

	const { data, isSuccess, isLoading } = useGetAboutCertificateQuery();
	const results = data?.data.about_certificates;
	const imgUrl = data?.data.image;
	const description = data?.data.description;

	console.log(results);

	return (
		<MainLayout>
			<div>
				<BgImgText header='About Us' text='Certificate Issued' url={imgUrl} isLoading={isLoading} />
				<div className='w-[90%] mx-auto pt-[4rem] pb-[6rem]'>
					{isSuccess &&
						<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
							{description}
						</h2>
					}
					{isLoading &&
						<div className="w-[95%] bg-gray-200 mb-12 m-auto h-40 animate-pulse"></div>
					}
					<div className='flex space-y-[2rem] flex-col mt-[64px]'>
						{results?.map((data) =>
							<Text
								key={data.id}
								header={data.title}
								text={data.description}
							/>
						)}
						{(isLoading || results?.length === 0) && [1, 2, 3, 4, 5, 6,].map(loader =>
							<div className="flex jstify-between gap-4 w-full">
								<div className="w-full h-16 bg-gray-200 animate-pulse rounded-md"></div>
								{/* <div className="w-10 h-4 bg-gray-200 animate-pulse rounded-md"></div> */}
							</div>)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Cert;
