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
    <footer className="lg:flex gap-x-12 space-y-12 lg:space-y-0 justify-center bg-[#2056A7] py-[5rem] px-4 lg:px-[4rem]">
      <div className="space-y-8">
        <div className="flex flex-col space-y-5 w-full lg:max-w-sm font-semibold">
          <span className="">{headerRound("white")}</span>
          <div>
            <h2 className="sf700 text-sm  lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              Technical Consultant
            </h2>
            <h2 className="sf700 text-sm lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              Boiler & Pressure Vessel Regulation{" "}
            </h2>
            <h2 className="sf700 text-sm lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              {" "}
              Lifting & Allied Work Equipment (Safety) Regulation
            </h2>
            <h2 className="sf700 text-xs lg:text-sm  lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              info@ries.gov.ng, www. ries.gov.ng
            </h2>
          </div>
        </div>

        <div className="space-y-[0.5rem] items-start md:mt-[2rem] lg:max-w-sm font-semibold">
          <img alt="" src="/images/logo.jpg" className="pb-4 w-12 h-12" />
          <div className="flex flex-col w-ful space-y-2">
            <h2 className="sf700 text-sm lg:text-[14px] 2xl:text-[16px] text-white leading-[19.2px] uppercase text-left">
              Regulatory IMPLEMentation & compliance scheme
            </h2>
            <h2 className="sf700 text-sm lg:text-[14px] 2xl:text-[16px] text-white leading-[19.2px] uppercase text-left">
              OCCUPATIONAL SAFETY & HEALTH DEPARTMENT
            </h2>
            <h2 className="sf700 text-sm lg:text-[14px] 2xl:text-[16px] text-white leading-[19.2px] uppercase text-left">
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
