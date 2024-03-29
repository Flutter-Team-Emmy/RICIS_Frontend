import React from "react";
import TextHeader from "./TextHeader";
import Link from "next/link";
import CardLeft from "../components/CardLeft";

const Notice = () => {
	return (
		<div className='w-[90%] mx-auto mb-[3rem]'>
			<TextHeader
				header='Notice, News & Circular'
				subHeader='Are you tired of manual billing processes, revenue leakage, and the complexity of managing recurring revenue? Look no further – We is here to transform your business!'
			/>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] w-full'>
				<CardLeft
					header='Regulation of Boilers & Pressure Vessel'
					subHeader='Experience the power of our Good Sign today and take your business to new heights.'
					href=''
					img='/images/r&b.jpg'
				/>
				<CardLeft
					header='Registration of Passenger Lift & Elevators'
					subHeader='Experience the power of our Good Sign today and take your business to new heights.'
					href=''
					img='/images/rop.jpg'
				/>
				<CardLeft
					header='Registration of Crane & Lifting Equipment'
					subHeader='Experience the power of our Good Sign today and take your business to new heights.'
					href=''
					img='/images/roc.jpg'
				/>
				<CardLeft
					header='Removal of Personal Certification'
					subHeader='Experience the power of our Good Sign today and take your business to new heights.'
					href=''
					img='/images/ropc.jpg'
				/>
				<CardLeft
					header='Approval of Training Contractor'
					subHeader='Experience the power of our Good Sign today and take your business to new heights.'
					href=''
					img='/images/aot.jpg'
				/>
				<CardLeft
					header='Approval of Boiler & Pressure Vessel Manufacturer'
					subHeader='Experience the power of our Good Sign today and take your business to new heights.'
					href=''
					img='/images/aoc.jpg'
				/>
			</div>

			<Link href='' className='mx-auto w-fit bg-black'>
				<h2 className='sf400 text-[1rem] leading-[1.5rem] mt-[5rem] text-[#3361FF] text-center mx-auto'>
					View all &rarr;
				</h2>
			</Link>
		</div>
	);
};

export default Notice;
