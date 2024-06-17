import React from "react";
import FooterText from "./FooterText";
import { FacebookIcon, LinkedInIcon, TwitterIcon, headerRound } from "../svgs";
import Image from "next/image";
import { useGetInformationQuery, useGetServicesQuery, useGetlegislaionsQuery } from "@/store/api/generalApi";

const Footer = () => {

  const { data: servicesData } = useGetServicesQuery();
  const { data: informationData } = useGetInformationQuery();
  const { data: legislationData } = useGetlegislaionsQuery();

  const services = servicesData?.data.services;
  const legislation = legislationData?.data.legislations;
  const information = informationData?.data.information;

  console.log(services)

  return (
    <footer className="lg:flex gap-x-12 space-y-12 lg:space-y-0 justify-center bg-[#2056A7] pt-[20rem] pb-[5rem] px-4 lg:px-[4rem]">
      <div className="space-y-8 lg:pr-28">
        <div className="flex flex-col space-y-5 w-full lg:max-w-sm">
          <img src="/images/logo2.svg" className="w-16 h-16" alt=""/>
          <div className="text-[0.75rem]">
            <h2 className="sf700 mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              Technical Consultant
            </h2>
            <h2 className="sf700 mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              Boiler & Pressure Vessel Regulation
            </h2>
            <h2 className="sf700 mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              Lifting & Allied Work Equipment (Safety) Regulation
            </h2>
            <h2 className="sf700 text-xs mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              info@ries.gov.ng, www. ries.gov.ng
            </h2>
          </div>
        </div>

        <div className="space-y-[0.5rem] items-start md:mt-[2rem] lg:max-w-sm  ">
          <img alt="" src="/images/logo.svg" className="pb-4 w-16 h-16" />
          <div className="flex flex-col w-ful space-y-2 text-[0.75rem]">
            <h2 className="sf700 text-white leading-[19.2px] uppercase text-left">
              Regulatory IMPLEMentation & compliance scheme
            </h2>
            <h2 className="sf700 text-white leading-[19.2px] uppercase text-left">
              OCCUPATIONAL SAFETY & HEALTH DEPARTMENT
            </h2>
            <h2 className="sf700 text-white leading-[19.2px] uppercase text-left">
              FEDERAL MINISTRY OF LABOUR & EMPLOYMENT
            </h2>
          </div>
        </div>

        <div className="hidden lg:flex space-x-[12px] items-center justify-start pt-8">
          <span>{FacebookIcon}</span>
          <span>{LinkedInIcon}</span>
          <span>{TwitterIcon}</span>
        </div>
      </div>

      <div className="space-y-8">
        <FooterText
          header="About Us"
          data={[
            {
              name: "Activities",
              href: "/about_us",
            },
            {
              name: "Administrative Structure",
              href: "/about_us/administrative_structure",
            },
            {
              name: "Certificate issued",
              href: "/about_us/certificate_issued",
            },
          ]}
        />
        <FooterText
          header="Services"
          data={services && [...services]}
        />
      </div>

      <div className="space-y-8">
        <FooterText
          header="Legislation/Rules"
          data={legislation && [...legislation]}
        />
        <FooterText
          header="Information"
          data={information && [...information]}
        />
      </div>

      <div className="flex lg:hidden space-x-[16px] justify-center items-center justify-start pt-8">
        <span>{FacebookIcon}</span>
        <span>{LinkedInIcon}</span>
        <span>{TwitterIcon}</span>
      </div>
    </footer>
  );
};

export default Footer;
