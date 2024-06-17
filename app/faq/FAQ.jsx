"use client";
import React, { useState } from "react";
import { chevUp, chevDown } from "@/svgs";
import { useGetFAQSQuery } from "@/store/api/generalApi";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-t border-[#0000001F] w-full py-[1rem] ">
      <div
        className="flex items-center justify-between w-full focus:outline-none "
        onClick={toggleOpen}
      >
        <span className="sf600 text-[1rem] lg:text-xl leading-[48px] text-[#000000CC]">
          {question}
        </span>
        {isOpen ? chevUp : chevDown}
      </div>
      {isOpen && (
        <div className="py-[1.5rem]">
          <p className="sf400  leading-[30px] text-[#0000008A] ">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const { isLoading, isSuccess, isError, error, data } = useGetFAQSQuery();
  const faqs = data?.data.faqs;
  const description = data?.des;

  console.log(data);

  return (
    <div className="w-full flex flex-col space-y-[2rem] ">
      {isSuccess &&
        faqs?.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      {(isLoading || faqs?.length === 0) &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((loader) => (
          <div key={loader} className="flex jstify-between gap-4 w-full">
            <div className="w-full h-16 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="w-10 h-4 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export default FAQ;
