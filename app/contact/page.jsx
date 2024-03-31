"use client"

import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import { useGetContactInfosQuery } from "@/store/api/generalApi";
import React from "react";

const page = () => {

	const { data, isLoading, isSuccess } = useGetContactInfosQuery();
	const contactInfos = data?.data.contactInfo;
	const imgUrl = data?.data.image;

	console.log(data);


	return (
		<MainLayout>
			<div className='mb-[6rem]'>
				<BgImgText isLoading={isLoading} header='CONTACT' url={imgUrl} text='Contact Us' />
				<div className='pt-[6rem] w-[80%] mx-auto'>
					<h1 className='sf600 text-[2rem] leading-[48px] mb-[5rem] '>
						Having issues? Please contact us!
					</h1>
					<div className='grid lg:grid-cols-[2fr_2fr] gap-x-40 gap-y-12 mt-[48px]'>
						{isSuccess && contactInfos.map((info) =>
							<div key={info.id} className=' '>
								<h1 className='sf700 text-[1.5rem] leading-[36px] mb-[1.5rem] '>
									{info.name}
								</h1>
								<div>
									<h2 className=' text-[#0000008A] sf400 text-[20px] leading-[30px] '>
										{info.address}
									</h2>
									<h2 className=' text-[#0000008A] sf400 text-[20px] leading-[30px] '>
										{info.email}
									</h2>
									<h2 className=' text-[#0000008A] sf400 text-[20px] leading-[30px] '>
										{info.phone}
									</h2>
								</div>
							</div>
						)}
					</div>

				</div>
			</div>
			<div className="grid lg:grid-cols-2 w-full px-12 gap-y-16 gap-x-40 pb-12">
				{(isLoading || contactInfos?.length === 0) && [1, 2, 3, 4].map(loader =>
					<div className="space-y-4">
						<h1 className="w-[80%] mb-8 h-8 lg:h-12 bg-gray-200 animate-pulse rounded-md" ></h1>
						<h2 className="w-[80%] h-4 lg:h-8 bg-gray-200 animate-pulse rounded-md"></h2>
						<h2 className="w-[80%] h-4 lg:h-8 bg-gray-200 animate-pulse rounded-md"></h2>
						<h2 className="w-[80%] h-4 lg:h-8 bg-gray-200 animate-pulse rounded-md"></h2>
					</div>
				)}
			</div>
		</MainLayout>
	);
};

export default page;
