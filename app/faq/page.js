import BgImgText from "@/components/BgImgText";
import React from "react";
import FAQ from "./FAQ";
import MainLayout from "@/components/mainLayout";

const page = () => {
	return (
		<MainLayout>
			<div className='mb-[6rem]'>
				<BgImgText header='FAQS' text='FREQUENTLY ASKED QUESTIONS' />
				<div className='w-[90%] mx-auto pt-[3rem] '>
					<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mb-[64px] '>
						Doctors and researchers might ask Sienna’s team whether a particular
						drug was ever linked to an adverse event, like “Has amoxycillin ever
						caused encephalitis?” Or they might answer questions about new drug
						delivery platforms, like “How do you get our large molecule drug
						inside the cell so that it can actually get to the target, where it
						will do the work of curing the disease?” For questions like these,
						Sienna and her team seek information to compile resource lists or
						reports.
					</h2>

					<FAQ />
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
