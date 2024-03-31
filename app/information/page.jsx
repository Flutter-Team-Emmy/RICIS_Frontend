"use client"

import BgImgText from "@/components/BgImgText";
import PdfComp from "@/components/PdfComp";
import MainLayout from "@/components/mainLayout";
import { useGetInformationQuery } from "@/store/api/generalApi";
import Link from "next/link";
import React from "react";
import Loader from "../legislation_rules/loader";

const page = () => {

	const { data, isLoading, isSuccess } = useGetInformationQuery();

	console.log(data);

	const results = data?.data.information;
	const description = data?.data.description;
	const imgUrl = data?.data.image;

	return (
		<MainLayout>
			<div>
				<BgImgText text='Information' url={imgUrl} isLoading={isLoading} />
				<div className='w-[90%] mx-auto pt-[64px] pb-[6rem] flex flex-col space-y-[64px] '>
					{isSuccess &&
						<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
							{description}
						</h2>
					}
					{isLoading &&
						<div className="w-[95%] bg-gray-200 mb-12 m-auto h-40 animate-pulse"></div>
					}
					<div className='border border-[#DDDDDD] rounded-[12px] p-[20px] lg:p-[48px] '>
						<h1 className='inter600 text-[2.25rem] leading-[54px]'>Checklist</h1>
						<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mt-[20px]'>
							The section is with its headquarters in Wolfsburg is one of the
							world’s leading automobile manufacturers and the largest carmaker in
							Europe. The Group is made up of ten brands from seven European
							countries: Volkswagen, Volkswagen Nutzfahrzeuge, ŠKODA, SEAT, CUPRA,
							Audi, Lamborghini, Bentley, Porsche and Ducati.
						</h2>

						<Link href="/checklist" >
							<h2 className='sf500 text-[1rem] leading-[24px] text-[#3361FF] mt-[2rem] text-center'>
								View all &rarr;
							</h2>
						</Link>
					</div>

					<div className='flex flex-col space-y-[5rem]'>
						{results?.map((doc) =>
							<PdfComp
								key={doc.id}
								data={{
									type: doc.file_type,
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
