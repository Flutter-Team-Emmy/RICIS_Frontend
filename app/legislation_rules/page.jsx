"use client"

import BgImgText from "@/components/BgImgText";
import PdfComp from "@/components/PdfComp";
import MainLayout from "@/components/mainLayout";
import { useGetlegislaionsQuery } from "@/store/api/generalApi";
import React from "react";
import Loader from "./loader";

const page = () => {

	const { data, isLoading, isSuccess } = useGetlegislaionsQuery();
	console.log(data);

	const results = data?.data.legislations;
	const description = data?.data.description;
	const imgUrl = data?.data.image;

	return (
		<MainLayout>
			<div>
				<BgImgText text='Legislation / Rules' isLoading={isLoading} url={imgUrl} />
				<div className='w-[90%] mx-auto pt-[64px] pb-[6rem] flex flex-col space-y-[64px] '>
					{isSuccess &&
						<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
							{description}
						</h2>
					}
					{isLoading &&
						<div className="w-[95%] bg-gray-200 mb-12 m-auto h-40 animate-pulse"></div>
					}
					<div className='flex flex-col space-y-[5rem]'>
						{isSuccess && results?.map((doc) =>
							<PdfComp
								key={doc.id}
								data={{
									type: "",
									page: doc.pages,
									name: doc.name,
									img: doc.image,
									url: doc.download_url
								}}
							/>
						)}
						{(isLoading || results?.length === 0) && [1, 2, 3, 4, 5].map(loader =>
							<Loader />
						)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
