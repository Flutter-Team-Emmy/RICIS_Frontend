"use client";

import BgImgText from "@/components/BgImgText";
import CardCenter from "@/components/CardCenter";
import MainLayout from "@/components/mainLayout";
import { useGetServicesQuery } from "@/store/api/generalApi";
import { ArrowDown } from "@/svgs";
import { useRouter } from "next/navigation";
// import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import Default from "./Default";

const faqs = ["f1", "f2", "f3"];

const services = [
  {
    name: "Registration",
    equipments: [
      {
        name: "Boiler and Pressure Vessel",
        id: 1,
      },
      {
        name: "Lifting and Allied Works",
        id: 2,
      },
    ],
  },
  {
    name: "Authorization",
    equipments: [
      {
        name: "Boiler and Pressure Vessel",
        id: 3,
      },
      {
        name: "Lifting and Allied Works",
        id: 4,
      },
    ],
  },
  {
    name: "Certification",
    equipments: [
      {
        name: "Boiler and Pressure Vessel",
        id: 5,
      },
      {
        name: "Lifting and Allied Works",
        id: 6,
      },
    ],
  },
];

const subServices = [
  {
    id: 1,
    details: {
      header: "Boiler and Pressure Vessel Equipment Registration",
      title:
        "The Director of Factories shall register a boiler or pressure vessel manufactured, installed, operated, or used in Nigeria and assign a registration number to it accordingly:",
      lists: [
        {
          des: " Provided the Authorised Inspector is satisfied that the review of the design, quality control program, and manufacturing process is in compliance with the requirements of these Regulations.",
        },
        {
          des: "An application for the registration of a boiler or pressure vessel shall be submitted to the Director of Factories in the prescribed form, together with the prescribed fees, either after its manufacture or before installation.",
        },
        {
          des: "Drawings, calculations, specifications, and other information required for the purposes of an application for registration must be submitted in duplicate.",
        },
        {
          des: "With respect to an application for the registration of a boiler or pressure vessel, or its alteration or repair, other information referred to in sub-regulation (3) of this regulation includes:",
          subLists: [
            "The design pressure and temperature",
            "Details of the arrangement and dimensions of all component parts",
            "The material details and specifications as required by the adopted code or standard ;",
            "Details of the proposed manufacture, welded joint configuration, and quality control plan",
            "The section and paragraph number of the adopted code and standards under which it is being constructed",
            "A report of physical tests conducted for the purpose of establishing the maximum allowable working pressure.",
          ],
        },
      ],
    },
  },

  {
    id: 2,
    details: {
      header: "Lifting and Allied Works Equipment Registration",
      lists: [
        {
          des: "The designated classes of Elevating Vehicles include:",
          mainSubLists: [
            {
              name: "Elevator Comprising:",
              subLists: [
                "Passenger Elevators",
                "Freight Elevators",
                "Material Lifts",
              ],
            },
            {
              name: "Escalators:",
            },
            {
              name: "Manlifts",
            },
            {
              name: "Construction and Material Hoists",
            },
            {
              name: "Special Elevating Devices",
            },
          ],
        },
        {
          des: "A Certificate of Competency for an Approved Person shall be by endorsement in the following categories:",
          mainSubLists: [
            {
              name: "Category A",
              subLists: [
                "Overhead Travelling Cranes",
                "Goliath and Semi-Goliath Cranes",
                "Monorail Cranes",
              ],
            },
            {
              name: "Category B",
              subLists: ["Tower Cranes", "Self Erecting Tower Cranes"],
            },
            {
              name: "Category C",
              subLists: [
                "Mobile Cranes",
                "Truck-Mounted Cranes",
                "Vehicle-Mounted Truck Loader Cranes",
                "Forklifts",
              ],
            },
            {
              name: "Category D",
              subLists: [
                "Offshore Cranes",
                "Guy Derrick Cranes",
                "Container Cranes",
              ],
            },
            {
              name: "Category E",
              subLists: ["Escalators", "Lifts"],
            },
          ],
        },
      ],
    },
  },

  {
    id: 3,
    details: {
      header: "Boiler and Pressure Vessel Authorization",
      lists: [
        {
          des: "A person or organisation involved in the business of manufacturing, installing, altering, or repairing boilers, pressure vessels, fittings, or piping systems shall be registered as an Approved Contractor, by the Director of Factories.",
        },
        {
          des: "An organisation involved in the business of inspection and certification of boilers, pressure vessels, fittings, or piping systems shall be registered as an Approved Inspection Agency, by the Director of Factories.",
        },
        {
          des: "A person or organisation, involved in the training of engineers, Authorized Inspectors, boiler operators, and technicians shall be registered as a Training Contractor, by the Director of Factories.",
        },
      ],
    },
  },

  {
    id: 4,
    details: {
      header: "Lifting and Allied Works Equipment Authorization",
      title: "The Director of Factories shall register-",
      lists: [
        {
          des: "As a Lift Contractor, a person or organization involved in the construction, installation, alteration, repair, maintenance, servicing, or testing of an elevating device",
        },
        {
          des: "As an Inspection Agency, an organization involved in inspection, thorough examination, and testing of lifting equipment, lifting accessory, other allied work equipment for lifting application, and elevating device",
        },
        {
          des: "As a Training Contractor, a person or organization involved in the raining of lifting equipment operators and Approved Inspectors.",
        },
      ],
    },
  },

  {
    id: 5,
    details: {
      header: "Boiler and Pressure Vessel Certification",
      lists: [
        {
          des: "Certificates of competency, which may be issued by the Director of Factories under these Regulations include:",
          subLists: [
            "Authorized Inspector",
            "Certified Power Engineer",
            "Certified Refrigeration Engineer",
            "Certified Power Technician",
            "Certified Refrigeration Plant Technician",
          ],
          subDetails: {
            subHeader: "Pressure Welder",
            subTitle:
              "No person is permitted to weld on a boiler, pressure vessel, piping, fitting, or refrigeration plant without a valid licence from the Director of Factories, The classes of pressure welder licences include:",
            subLists: [
              "Class MW - Manual Welding",
              "Class SW - Semi-Automatic or Machine Welding.",
            ],
          },
        },
        {
          des: "A person or organisation involved in the business of manufacturing, inspection and certification, installing, altering, or repairing boilers, pressure vessels, fittings, or piping systems and training of engineers, Authorized Inspectors, boiler operators, and technicians include:",
          subLists: [
            "Approved Contractor",
            "Approved Inspection Agency",
            "Training Contractor",
          ],
        },
      ],
    },
  },

  {
    id: 6,
    details: {
      header: "Lifting and Allied Work Certification",
      lists: [
        {
          des: "Certificates of competency, which may be issued by the Director of Factories under these Regulations include:",
          subLists: [
            "Technical Authority (Lifting Equipment)",
            "Appointed Person (Lifting Operations)",
            "Approved Person (Thorough Examination)",
            "Approved Lift Installer",
            "Lifting Equipment Operator",
            "Work Equipment Operator",
            "Rigger",
            "Lifting Equipment Operation Assistant",
            "Scaffolding Technician",
            "Abseiling Technician",
          ],
        },
        {
          des: "A person or organisation involved in the business of manufacturing, inspection and certification, installing, altering, or repairing boilers, pressure vessels, fittings, or piping systems and training of engineers, Authorized Inspectors, boiler operators, and technicians include:",
          subLists: [
            "Mobile Crane and Tower Crane",
            "Travelling Cranes",
            "Overhead Travelling Cranes",
          ],
        },
      ],
    },
  },
];

const Accordion = ({
  boorderBottom,
  isOpen,
  toggleAccordion,
  service,
  changeDefault,
}) => {
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
        service.equipments.map((equip,index) => (
          <div key={index} className="px-3">
            <p
              className="py-3 cursor-pointer"
              onClick={() => changeDefault(equip.id)}
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
      <div className="py-10 px-10 flex justify-between gap-10">
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

        <div className="space-y-10 text-gray-500"></div>
        {selectedService.length === 0 && <Default />}
        {selectedService.map((data) => (
          <div key={data.id} className="space-y-4 max-w-2xl">
            <h1 className="text-md font-bold">{data.details.header}</h1>
            {data.details.title && (
              <p className="text-sm text-gray-500">{data.details.title}</p>
            )}
            <ol className="text-gray-500 ml-6 space-y-4 text-sm list-decimal">
              {data.details.lists.map((list, id) => (
                <li key={id} className="space-y-4">
                  {list.des}
                  {list.subLists &&
                    list.subLists.map((data) => (
                      <ol key={id} className="text-sm list-disc ml-4">
                        <li className="pt-2">{data}</li>
                      </ol>
                    ))}
                  {list.subDetails && (
                    <div className="space-y-4 py-4">
                      <h2 className="text-black font-bold">
                        {list.subDetails.subHeader}
                      </h2>
                      <p>{list.subDetails.subTitle}</p>
                      <ol className="text-sm list-disc ml-4 space-y-2">
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
                        className="space-y-4 text-sm list-[upper-roman] ml-4"
                      >
                        <li className="space-y-2">
                          {mainSubList.name}
                          {mainSubList.subLists &&
                            mainSubList.subLists.map((subList, id) => (
                              <ol key={id} className="text-sm list-disc ml-4">
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
