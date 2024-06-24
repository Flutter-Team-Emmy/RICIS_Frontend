"use client";

import BgImgText from "@/components/BgImgText";
import PdfComp from "@/components/PdfComp";
import MainLayout from "@/components/mainLayout";
import { useGetlegislaionsQuery } from "@/store/api/generalApi";
import React, { useEffect, useState } from "react";
import Loader from "./loader";
import {
  legislationAndRules,
  subLegislationAndRules,
} from "@/utils/legislationAndRulesData";
import { ArrowDown } from "@/svgs";

const Accordion = ({
  boorderBottom,
  isOpen,
  toggleAccordion,
  data,
  id,
  currentRuleId,
  currentAccordion,
  setCurrentAccordion,
  changeDefault,
}) => {
  return (
    <div
      className={`w-full cursor-pointer ${
        boorderBottom && !isOpen && "border-b border-gray-500"
      } ${
        isOpen && data.hasDrop ? "border-b border-[#D5B69A] rounded-xl" : ""
      }`}
    >
      <div
        onClick={() => {
          toggleAccordion();
          !data.hasDrop && changeDefault(data.id);
          setCurrentAccordion(id);
        }}
        className={`${
          isOpen || currentAccordion === id
            ? "bg-[#D5B69A] text-slate-800"
            : "bg-transparent"
        } flex items-center justify-between py-3 px-3`}
      >
        <p className="">{data.name}</p>
        {data.hasDrop && (
          <p className={`w-fi ${isOpen ? "rotate-180" : "rotate-0"}`}>
            {ArrowDown}
          </p>
        )}
      </div>
      {isOpen &&
        data.hasDrop &&
        data.subRule?.map((data, index) => (
          <div key={index} className="px-3">
            <p
              className={`py-3 cursor-pointer ${
                data.id === currentRuleId ? "text-[#C7854A]" : "text-black"
              }`}
              onClick={() => {
                changeDefault(data.id);
              }}
            >
              {data.name}
            </p>
          </div>
        ))}
    </div>
  );
};

const LegislationRules = () => {
  const { data, isLoading, isSuccess } = useGetlegislaionsQuery();
  console.log(data);

  const results = data?.data.legislations;
  const description = data?.data.description;
  const imgUrl = data?.data.image;

  const [openedAccordion, setOpenedAccordion] = useState([""]);
  const [selectedRule, setSelectedRule] = useState([]);
  const [currentRuleId, setCurrentRuleId] = useState(1);
  const [currentAccordion, setCurrentAccordion] = useState(0);

  useEffect(() => {
    const newSubRule = subLegislationAndRules.filter(
      (rule) => currentRuleId === rule.id
    );
    setSelectedRule(newSubRule);
  }, [currentRuleId]);

  const toggleAccordion = (accordion_id) => {
    if (openedAccordion.includes(accordion_id)) {
      setOpenedAccordion([]);
    } else {
      setOpenedAccordion([accordion_id]);
    }
  };

  const changeDefault = (id) => {
    console.log(id);
    setCurrentRuleId(id);
  };

  return (
    <MainLayout>
      <BgImgText
        header="Legislations/Rules"
        text={
          selectedRule.length === 0
            ? "Legislations/Rules"
            : selectedRule[0]?.name
        }
        isLoading={isLoading}
        url={imgUrl}
      />
      <div className="py-10 px-12 grid grid-cols-[4fr_6fr]">
        <div className="rounded-xl w-[25rem] border border-gray-500 h-fit">
          <div className="bg-[#2056A7] w-full py-2 px-3 rounded-t-xl">
            <p className="font-semibold text-white">Legislations/Rules</p>
          </div>
          {legislationAndRules.map((data, index) => {
            const isNotLast = legislationAndRules.length - 1 !== index;
            return (
              <Accordion
                key={index}
                id={index}
                isOpen={openedAccordion.includes(data)}
                boorderBottom={isNotLast}
                data={data}
                currentRuleId={currentRuleId}
                currentAccordion={currentAccordion}
                setCurrentAccordion={setCurrentAccordion}
                changeDefault={changeDefault}
                toggleAccordion={() => toggleAccordion(data)}
              />
            );
          })}
        </div>

        <div>
          {selectedRule[0]?.details.pdfs && (
            <div className="space-y-4 text-xs">
              {selectedRule[0]?.details.pdfs.map((pdf, id) => (
                <div
                  key={id}
                  className="bg-[#EFF0F3] flex justify-between shadow-sm rounded-md items-center px-4 py-2"
                >
                  <div className="flex gap-x-4 items-center">
                    <img className="w-5 h-5" src={pdf.icon} alt="" />
                    <p>{pdf.des}</p>
                  </div>
                  {pdf.link && (
                    <a
                      href={pdf.link}
                      target="blank"
                      className="text-[#B12A27]"
                    >
                      Download
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default LegislationRules;
