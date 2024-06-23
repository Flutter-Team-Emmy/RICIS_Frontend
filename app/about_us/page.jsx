"use client";

import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import React, { useState } from "react";
import Default from "./Default";
import { aboutUs, subActs } from "@/utils/aboutUsData";
import { ArrowDown } from "@/svgs";

const Accordion = ({
  boorderBottom,
  isOpen,
  toggleAccordion,
  data,
  changeDefault,
}) => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div
      className={`w-full ${
        boorderBottom && !isOpen && "border-b border-gray-500"
      } ${
        isOpen && data.hasDrop ? "border-b border-[#D5B69A] rounded-xl" : ""
      }`}
    >
      <div
        onClick={() => {
          toggleAccordion();
          changeDefault(data.id);
        }}
        className={`${
          isOpen ? "bg-[#D5B69A] text-slate-800" : "bg-transparent"
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
        data.subActs?.map((abtData, index) => (
          <div key={index} className="px-3">
            <p
              className={`py-3 cursor-pointer ${
                abtData.id === selectedId ? "text-[#C7854A]" : "text-black"
              }`}
              onClick={() => {
                changeDefault(abtData.id);
                setSelectedId(abtData.id);
              }}
            >
              {abtData.name}
            </p>
          </div>
        ))}
    </div>
  );
};

const Activities = () => {
  const [openedAccordion, setOpenedAccordion] = useState([""]);
  const [selectedAct, setSelectedAct] = useState([]);

  const toggleAccordion = (accordion_id) => {
    if (openedAccordion.includes(accordion_id)) {
      setOpenedAccordion([]);
    } else {
      setOpenedAccordion([accordion_id]);
    }
  };

  const changeDefault = (id) => {
    console.log(id);
    const newAct = subActs.filter((act) => id === act.id);
    setSelectedAct(newAct);

    console.log(selectedAct);
  };

  return (
    <MainLayout>
      <BgImgText
        header="About Us"
        text={selectedAct.length === 0 ? "Activities" : selectedAct[0]?.name}
        url="/images/9347.jpg"
      />
      <div className="py-10 px-12 grid grid-cols-[4fr_6fr]">
        <div className="rounded-xl w-[25rem] border border-gray-500 h-fit">
          <div className="bg-[#2056A7] w-full py-2 px-3 rounded-t-xl">
            <p className="font-semibold text-white">About Us</p>
          </div>
          {aboutUs.map((data, index) => {
            const isNotLast = aboutUs.length - 1 !== index;
            return (
              <Accordion
                key={index}
                isOpen={openedAccordion.includes(data)}
                boorderBottom={isNotLast}
                data={data}
                changeDefault={changeDefault}
                toggleAccordion={() => toggleAccordion(data)}
              />
            );
          })}
        </div>

        <div className="text-gray-500">
          {selectedAct.length === 0 && <Default />}
          {selectedAct.map((data, index) => (
            <div className="space-y-6" key={data.id}>
              <h1 className="font-bold text-black text-lg">
                {data.details.mainHeader}
              </h1>
              <div className="text-sm space-y-6 text-justify">
                {data.details.paragraphs &&
                  data.details.paragraphs.map((paragraph, id) => (
                    <p key={id}>{paragraph}</p>
                  ))}
              </div>
              <ol className="text-sm list-disc space-y-4 pl-4 list-inside">
                {data.details.mainLists &&
                  data.details.mainLists.map((mainList, id) => (
                    <li key={id}>{mainList.des}</li>
                  ))}
              </ol>
              {data.details.sections &&
                data.details.sections.map((section, id) => (
                  <div key={id} className="space-y-4">
                    <h1 className="font-medium text-black">
                      {section.subHeader}
                    </h1>
                    <p className="text-sm">{section.subTitle}</p>
                    <ol className="text-sm list-disc space-y-4 pl-4 list-inside">
                      {section.lists.map((list, id) => (
                        <li key={id}>{list}</li>
                      ))}
                    </ol>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Activities;
