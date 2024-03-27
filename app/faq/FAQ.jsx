"use client";
import React, { useState } from "react";
import { chevUp, chevDown } from "@/svgs";
const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='border-b border-t border-[#0000001F] w-full py-[1rem] '>
			<div
				className='flex items-center justify-between w-full focus:outline-none '
				onClick={toggleOpen}
			>
				<span className='sf600 text-[2rem] leading-[48px] text-[#000000CC]'>
					{question}
				</span>
				{isOpen
					? // <ChevronUpIcon className='h-5 w-5 text-gray-400 transform rotate-180' />
					  chevUp
					: // <ChevronDownIcon className='h-5 w-5 text-gray-400' />
					  chevDown}
			</div>
			{isOpen && (
				<div className='py-[1.5rem]'>
					<p className='sf400 text-[20px] leading-[30px] text-[#0000008A] '>
						{answer}
					</p>
				</div>
			)}
		</div>
	);
};

const FAQ = () => {
	const faqs = [
		{
			q: "Why do I need to renew my boiler and pressure vessel certificates?",
			a: "Failing to renew your boiler and pressure vessel certificates can lead to safety hazards, operational disruptions, and even legal repercussions. Regular inspections and compliance with regulations ensure the safe operation of your equipment.",
		},
		{
			q: "What happens if my boiler or pressure vessel certificate expires?",
			a: "Operating equipment with an expired certificate is prohibited by law and can result in fines and penalties. Additionally, expired certificates can lead to insurance coverage issues in case of an accident.",
		},
		{
			q: "How often do I need to renew my boiler and pressure vessel certificates?",
			a: "The renewal frequency typically varies depending on the specific type of boiler or pressure vessel and local regulations. It's generally recommended to check with your local regulatory authority for specific renewal deadlines.",
		},
		{
			q: "What's involved in the boiler and pressure vessel certificate renewal process?",
			a: "The renewal process typically involves contacting a qualified inspector to conduct an on-site inspection of your equipment. They will ensure it meets all safety standards. Once the inspection is complete and any necessary repairs are made, you can submit a renewal application to the relevant authority.",
		},
		{
			q: "Can you help me with the boiler and pressure vessel certificate renewal process?",
			a: "Yes! We offer comprehensive renewal services to ensure a smooth and efficient process. We can help you track deadlines, coordinate inspections, and complete the necessary paperwork.",
		},
		// pasender lift and elevatro
		{
			q: "Why do I need to renew my passenger lift and elevator certificates?",
			a: "Similar to boiler and pressure vessel certificates, expired lift and elevator certificates pose safety risks and can lead to operational disruptions and potential fines. Regular inspections and adherence to regulations are crucial for safe passenger transport.",
		},
		{
			q: "How often do I need to renew my passenger lift and elevator certificates?",
			a: "The renewal frequency for passenger lifts and elevators can vary depending on local regulations and the specific equipment type.  It's best to consult with your local regulatory authority for exact renewal deadlines.",
		},
		{
			q: "What's involved in the passenger lift and elevator certificate renewal process?",
			a: "The renewal process usually involves scheduling an inspection by a qualified inspector who will verify the lift or elevator meets all safety standards.  Following a successful inspection and any necessary repairs, you can submit a renewal application to the appropriate authority.",
		},
		{
			q: "Can you help me with the passenger lift and elevator certificate renewal process?",
			a: "The renewal process usually involves scheduling an inspection by a qualified inspector who will verify the lift or elevator meets all safety standards.  Following a successful inspection and any necessary repairs, you can submit a renewal application to the appropriate authority.",
		},
		{
			q: "an you help me with the passenger lift and elevator certificate renewal process?",
			a: "Absolutely!  Our services can streamline the renewal process for your lifts and elevators. We can track deadlines, facilitate inspections, and assist with completing the required paperwork.",
		},
        // general
		{
			q: "What if my 'litty equipment' refers to something other than loading dock or material handling equipment?",
			a: "No problem!  Just provide the specific term for your equipment (e.g., dumbwaiter, wheelchair lift) and we can update the FAQs accordingly.",
		},
	];

	return (
		<div className='w-full flex flex-col space-y-[2rem] '>
			{faqs.map((faq, index) => (
				<FAQItem key={index} question={faq.q} answer={faq.a} />
			))}
		</div>
	);
};

export default FAQ;
