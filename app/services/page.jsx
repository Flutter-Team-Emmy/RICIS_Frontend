"use client";

import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import { useGetServicesQuery } from "@/store/api/generalApi";
import { ArrowDown } from "@/svgs";
// import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import Default from "./Default";
import { services, subServices } from "@/utils/servicesData";

const faqs = ["f1", "f2", "f3"];

 
const Accordion = ({
  boorderBottom,
  isOpen,
  toggleAccordion,
  service,
  changeDefault,
}) => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div
      className={`w-full ${
        boorderBottom && !isOpen && "border-b border-gray-500"
      } ${isOpen ? "border-b border-[#D5B69A] rounded-xl" : ""}`}
    >
      <div
        onClick={toggleAccordion}
        className={`${
          isOpen ? "bg-[#D5B69A] text-slate-800" : "bg-transparent"
        } flex items-center justify-between py-3 px-3`}
      >
        <p className="">{service.name}</p>
        <p className={`w-fi ${isOpen ? "rotate-180" : "rotate-0"}`}>
          {ArrowDown}
        </p>
      </div>
      {isOpen &&
        service.subServices?.map((equip, index) => (
          <div key={index} className="px-3">
            <p
              className={`py-3 cursor-pointer ${
                equip.id === selectedId ? "text-[#C7854A]" : "text-black"
              }`}
              onClick={() => {
                changeDefault(equip.id);
                setSelectedId(equip.id);
              }}
            >
              {equip.name}
            </p>
          </div>
        ))}
    </div>
  );
};

const Services = () => {
  const { data, isLoading, isSuccess } = useGetServicesQuery();
  const [openedAccordion, setOpenedAccordion] = useState([""]);
  const [selectedService, setSelectedService] = useState([]);

  const toggleAccordion = (accordion_id) => {
    if (openedAccordion.includes(accordion_id)) {
      setOpenedAccordion([]);
    } else {
      setOpenedAccordion([accordion_id]);
    }
  };

  const changeDefault = (id) => {
    console.log(id);
    const newService = subServices.filter((service) => id === service.id);
    setSelectedService(newService);

    console.log(selectedService);
  };

  const results = data?.data.services;
  console.log(results);
  const imgUrl = data?.data.image;
  const description = data?.data.description;

  return (
    <MainLayout>
      <BgImgText text="Our Services" url={imgUrl} />
      <div className="py-10 px-16 flex justify-between gap-2">
        <div className="rounded-xl w-[25rem] border border-gray-500 h-fit">
          <div className="bg-[#2056A7] w-full py-2 px-3 rounded-t-xl">
            <p className="font-semibold text-white">Services</p>
          </div>
          {services.map((service, index) => {
            const isNotLast = services.length - 1 !== index;
            return (
              <Accordion
                key={index}
                isOpen={openedAccordion.includes(service)}
                boorderBottom={isNotLast}
                service={service}
                changeDefault={changeDefault}
                toggleAccordion={() => toggleAccordion(service)}
              />
            );
          })}
        </div>

        {/* <div className="space-y-10 text-gray-500"></div> */}
        {selectedService.length === 0 && <Default />}
        {selectedService.map((data) => (
          <div key={data.id} className="space-y-4 max-w-2xl">
            <h1 className="text-md font-bold">{data.details.header}</h1>
            {data.details.title && (
              <p className="text-sm text-gray-500">{data.details.title}</p>
            )}
            <ol className="text-gray-500 ml-6 space-y-10 text-sm list-decimal">
              {data.details.lists.map((list, id) => (
                <li key={id} className="space-y-4">
                  {list.des}
                  {list.subLists &&
                    list.subLists.map((data, id) => (
                      <ol key={id} className="text-sm list-disc list-inside">
                        <li
                          key={Math.ceil(Math.random()) * id}
                          className="pt-2 text-gray-500"
                        >
                          {data}
                        </li>
                      </ol>
                    ))}
                  {list.subDetails && (
                    <div className="space-y-4 py-4">
                      <h2 className="text-black font-bold">
                        {list.subDetails.subHeader}
                      </h2>
                      <p>{list.subDetails.subTitle}</p>
                      <ol className="text-sm list-disc list-inside space-y-2">
                        {list.subDetails.subLists.map((el, id) => (
                          <li key={Date.now()}>{el}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {list.mainSubLists &&
                    list.mainSubLists.map((mainSubList, id) => (
                      <ol
                        key={id}
                        className="space-y-4 text-sm list-inside alphaListStyle"
                      >
                        <li className="space-y-2">
                          <span className="text-sm">{mainSubList.name}</span>
                          {mainSubList.subLists &&
                            mainSubList.subLists.map((subList, id) => (
                              <ol
                                key={id}
                                className="text-sm list-disc list-inside ml-4"
                              >
                                <li>{subList}</li>
                              </ol>
                            ))}
                        </li>
                      </ol>
                    ))}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Services;
