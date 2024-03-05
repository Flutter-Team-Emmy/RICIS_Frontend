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
			question: "What is Lorem Ipsum?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
		},
		{
			question: "Why do we use it?",
			answer:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
		},
		{
			question: "Where does it come from?",
			answer:
				"Contrary to popular belief, Lorem Ipsum is not simply random text...",
		},
	];

	return (
		<div className='w-full flex flex-col space-y-[2rem] '>
			{faqs.map((faq, index) => (
				<FAQItem key={index} question={faq.question} answer={faq.answer} />
			))}
		</div>
	);
};

export default FAQ;
