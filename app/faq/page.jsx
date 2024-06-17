"use client";

import BgImgText from "@/components/BgImgText";
import React from "react";
import FAQ from "./FAQ";
import MainLayout from "@/components/mainLayout";
import { useGetFAQSQuery } from "@/store/api/generalApi";

const FAQs = () => {
  const { isLoading, isSuccess, isError, error, data } = useGetFAQSQuery();
  const description = data?.data.description;
  const imgUrl = data?.data.image;

  return (
    <MainLayout>
      <div className="mb-[6rem]">
        <BgImgText
          isLoading={isLoading}
          header="FAQS"
          url={imgUrl}
          text="FREQUENTLY ASKED QUESTIONS"
        />
        <div className="w-[90%] mx-auto pt-[3rem] ">
          {isSuccess && (
            <h2 className="sf400 leading-[30px]  text-[#00000084] mb-[64px] ">
              {description}
            </h2>
          )}
          {isLoading && (
            <div className="w-[95%] bg-gray-200 mb-12 m-auto h-40 animate-pulse"></div>
          )}
          <FAQ />
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQs;
