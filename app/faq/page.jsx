"use client";

import BgImgText from "@/components/BgImgText";
import React, { useState } from "react";
import FAQ from "./FAQ";
import MainLayout from "@/components/mainLayout";
import { useGetFAQSQuery } from "@/store/api/generalApi";
import { faqs, faqsTypes } from "@/utils/faqData";
import Default from "./Default";

const Accordion = ({ data, changeDefault, selectedId, setSelectedId }) => {
  return (
    <div className={`w-full border-b border-[#D5B69A] rounded-xl`}>
      <div
        onClick={() => {
          setSelectedId(data.id);
          console.log(selectedId);
          changeDefault(data.id);
        }}
        className={`${
          data.id === selectedId
            ? "bg-[#D5B69A] text-slate-800"
            : "bg-transparent"
        }  py-3 px-3`}
      >
        <p className="">{data.name}</p>
      </div>
    </div>
  );
};

const FAQs = () => {
  const { isLoading, isSuccess, isError, error, data } = useGetFAQSQuery();
  const description = data?.data.description;
  const imgUrl = data?.data.image;

  const [selectedFaqType, setSelectedFaqType] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  const changeDefault = (id) => {
    console.log(id);
    const newFaqType = faqs.filter((faq) => id === faq.faqTypeId);
    setSelectedFaqType(newFaqType);

    console.log(selectedFaqType);
  };

  return (
    <MainLayout>
      <BgImgText
        isLoading={isLoading}
        header="FAQS"
        url={imgUrl}
        text="FREQUENTLY ASKED QUESTIONS"
      />
      <div className="py-10 px-12 grid grid-cols-[4fr_6fr]">
        <div className="rounded-xl w-[25rem] border border-gray-500 h-fit">
          <div className="bg-[#2056A7] w-full py-2 px-3 rounded-t-xl">
            <p className="font-semibold text-white">FAQS</p>
          </div>
          {faqsTypes.map((data, index) => {
            return (
              <Accordion
                key={data.id}
                data={data}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                changeDefault={changeDefault}
              />
            );
          })}
        </div>
        {selectedFaqType.length === 0 ? <Default /> : <FAQ selectedFaqType={selectedFaqType} />}
      </div>
    </MainLayout>
  );
};

export default FAQs;
