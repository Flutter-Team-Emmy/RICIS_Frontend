import BgImgText from "@/components/BgImgText";
import CardCenter from "@/components/CardCenter";
import MainLayout from "@/components/mainLayout";
import React from "react";

const page = () => {
	return (
		<MainLayout>
			<div>
				<BgImgText text='Our Services' url='/images/services.png' />
				<div className='w-[90%] mx-auto my-[4rem]'>
					<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
						She set up some Google Alerts, and subscribed to emails from
						assorted websites, but it was messy. And if members of the team
						weren’t already experts in an area (like bioprocessing, for
						example), Sienna found it hard to know which sources to look at for
						relevant research. Sienna and her team needed a way to ​track dozens
						of different topics and trends in biopharma at the same time from a
						large range of source <br /> <br />
						For certain queries, Sienna and her team get their information from
						published literature in research journals, like PubMed. However,
						Sienna remembers how tricky things got when her team started getting
						requests for information about broader topics like drug innovations,
						regulatory decisions, political decisions, or industry updates.
						“Rather than being about a specific disease, we started getting
						asked about things like drug pricing, or the gene and cell therapy
						industry.” Sienna commented that it wasn’t easy to capture this type
						of news about “those more general areas where there is news, rather
						than just published literature.”
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] w-[80%] mb-[6rem] mx-auto'>
					<CardCenter
						header='Regulation of Boilers & Pressure Vessel'
						subHeader='Experience the power of our Good Sign today and take your business to new heights.'
						href=''
						img='/images/r&b.jpg'
					/>
					<CardCenter
						header='Registration of Passenger Lift & Elevators'
						subHeader='Experience the power of our Good Sign today and take your business to new heights.'
						href=''
						img='/images/rop.jpg'
					/>
					<CardCenter
						header='Registration of Crane & Lifting Equipment'
						subHeader='Experience the power of our Good Sign today and take your business to new heights.'
						href=''
						img='/images/roc.jpg'
					/>
					<CardCenter
						header='Removal of Personal Certification'
						subHeader='Experience the power of our Good Sign today and take your business to new heights.'
						href=''
						img='/images/ropc.jpg'
					/>
					<CardCenter
						header='Approval of Training Contractor'
						subHeader='Experience the power of our Good Sign today and take your business to new heights.'
						href=''
						img='/images/aot.jpg'
					/>
					<CardCenter
						header='Approval of Boiler & Pressure Vessel Manufacturer'
						subHeader='Experience the power of our Good Sign today and take your business to new heights.'
						href=''
						img='/images/aoc.jpg'
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
