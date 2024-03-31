import React from "react";
import FooterText from "./FooterText";
import { headerRound } from "../svgs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#2056A7] py-[5rem] px-4 lg:px-[4rem] relative">
      <div className="flex justify-between mb-[2rem]">
        <div className="flex flex-col space-y-[10px] w-[40%] ">
          <span className="pb-4">{headerRound("white")}</span>
          <div>
            <h2 className="sf700  lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              Technical Consultant
            </h2>
            <h2 className="sf700  lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              Boiler & Pressure Vessel Regulation{" "}
            </h2>
            <h2 className="sf700  lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              {" "}
              Lifting & Allied Work Equipment (Safety) Regulation
            </h2>
            <h2 className="sf700  lg:text-[14px] 2xl:text-[16px] mb-[4px] uppercase leading-[19.2px] tracking-[-0.2px] text-white">
              info@ries.gov.ng, www. ries.gov.ng
            </h2>
          </div>
        </div>
        <div className="w-[20%]">
          <FooterText
            header="About Us"
            data={[
              {
                text: "Activities",
                href: "/about_us",
              },
              {
                text: "Administrative Structure",
                href: "/about_us/administrative_structure",
              },
              {
                text: "Certificate issued",
                href: "/about_us/certificate_issued",
              },
            ]}
          />
        </div>
        <div className="w-[30%]">
          <FooterText
            header="Services"
            data={[
              {
                text: "Regulation of Boilers & Pressure Vessels",
                href: "/",
              },
              {
                text: "Registration of Passenger Lift & Elevators",
                href: "",
              },
              {
                text: "Certificate issuedRegistration of Crane & Lifting Equipment",
                href: "",
              },
              {
                text: "Removal of Personal Certification",
                href: "",
              },
              {
                text: "Approval of Training Contractor",
                href: "",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex justify-between md:mt-[3.5rem]">
        <div className="flex flex-col space-y-[0.5rem] items-start w-[40%] md:mt-[2rem]">
          <Image
            width="0"
            height="0"
            alt=""
            src="/images/logo_bottom 1.jpg"
            className="pb-4"
          />
          <div className="flex flex-col space-y-[8px]">
            <h2 className="sf700 lg:text-[14px] 2xl:text-[16px] text-white leading-[19.2px] uppercase text-left">
              Regulatory IMPLEMentation & compliance scheme
            </h2>
            <h2 className="sf700 lg:text-[14px] 2xl:text-[16px] text-white leading-[19.2px] uppercase text-left">
              OCCUPATIONAL SAFETY & HEALTH DEPARTMENT
            </h2>
            <h2 className="sf700 lg:text-[14px] 2xl:text-[16px] text-white leading-[19.2px] uppercase text-left">
              FEDERAL MINISTRY OF LABOUR & EMPLOYMENT
            </h2>
          </div>
        </div>

        <div className="w-[20%]">
          <FooterText
            header="Legislation/Rules"
            data={[
              {
                text: "Factories Act 2004",
                href: "/",
              },
              {
                text: "Boiler & Pressure Vessel Regulation, 2018",
                href: "",
              },
              {
                text: "Lifting & Allied Work Equipment (Safety) Regulation",
                href: "",
              },
              {
                text: "Approved Code of Practice",
                href: "",
              },
              {
                text: "Guidelines",
                href: "",
              },
            ]}
          />
        </div>
        <div className="w-[30%]">
          <FooterText
            header="Information"
            data={[
              {
                text: "Approval of Boiler & Pressure Vessel Manufacturer",
                href: "/",
              },
              {
                text: "Personnel Certification",
                href: "",
              },
              {
                text: "Certificate Verification",
                href: "",
              },
              {
                text: "Renewal of certificate on Boiler & Pressure Vessels",
                href: "",
              },
              {
                text: "Renewal of certificates on Passenger  & Elevators",
                href: "",
              },
              {
                text: "Approval of  AIA",
                href: "",
              },
              {
                text: "Renewal of certificates on Passenger & Litty Equipment",
                href: "",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex space-x-[12px] items-center justify-center pt-8">
        <Image width="0" height="0" alt="" src="/images/fb.jpg" />
        <Image width="0" height="0" alt="" src="/images/linkedin.jpg" />
        <Image width="0" height="0" alt="" src="/images/x.jpg" />
      </div>
    </div>
  );
};

export default Footer;
