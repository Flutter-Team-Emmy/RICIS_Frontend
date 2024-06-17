"use client";

import BgImgText from "@/components/BgImgText";
import React from "react";
import Text from "./Text";
import MainLayout from "@/components/mainLayout";
import { useGetAboutCertificateQuery } from "@/store/api/generalApi";

const Cert = () => {
  const { data, isSuccess, isLoading } = useGetAboutCertificateQuery();
  const results = data?.data.about_certificates;
  const imgUrl = data?.data.image;
  const description = data?.data.description;

  console.log(results);

  return (
    <MainLayout>
      <div>
        <BgImgText
          header="About Us"
          text="Certificate Issued"
          url={imgUrl}
          isLoading={isLoading}
        />
        {/* <div className="w-[90%] mx-auto pt-[4rem] pb-[6rem]">
          {isSuccess && (
            <h2 className="sf400 text-[1.25rem] leading-[30px]  text-[#00000084] ">
              {description}
            </h2>
          )}
          {isLoading && (
            <div className="w-[95%] bg-gray-200 mb-12 m-auto h-40 animate-pulse"></div>
          )}
          <div className="flex space-y-[2rem] flex-col mt-[64px]">
            {results?.map((data) => (
              <Text key={data.id} header={data.title} text={data.description} />
            ))}
            {(isLoading || results?.length === 0) &&
              [1, 2, 3, 4, 5, 6].map((loader) => (
                <div key={loader} className="flex jstify-between gap-4 w-full">
                  <div className="w-full h-16 bg-gray-200 animate-pulse rounded-md"></div>
                </div>
              ))}
          </div>
        </div> */}
        <div className="w-[90%] mx-auto pt-[4rem] pb-[6rem] space-y-20">
          <div className="space-y-10">
            <h1 className="font-semibold text-xl">Personnel Certification</h1>
            <div className="space-y-3">
              <h2 className="text-lg text-gray-800">
                Boiler and Pressure Vessel Certification
              </h2>
              <p className="text-gray-500">
                Certificates of competency, which may be issued by the Director
                of Factories under these Regulations include:
              </p>
              <ol className="space-y-1 list-disc text-gray-500">
                <li className="">Authorized Inspector</li>
                <li className="">Certified Power Engineer</li>
                <li className="">Certified Power Engineer</li>
                <li className=""> Certified Refrigeration Engineer</li>
                <li className=""> Certified Power Technician</li>
                <li className=""> Certified Refrigeration Plant Technician</li>
              </ol>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg text-gray-800">Pressure Welder</h2>
              <p className="text-gray-500">
                No person is permitted to weld on a boiler, pressure vessel,
                piping, fitting, or refrigeration plant without a valid licence
                from the Director of Factories, The classes of pressure welder
                licences include:
              </p>
              <ol className="space-y-1 list-disc text-gray-500">
                <li className=""> Class MW - Manual Welding</li>
                <li className="">
                  {" "}
                  Class SW - Semi-Automatic or Machine Welding.
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg text-gray-800">
                Lifting and Allied Work Certification
              </h2>
              <p className="text-gray-500">
                Certificates of competency, which may be issued by the Director
                of Factories under these Regulations include:
              </p>
              <ol className="space-y-1 list-disc text-gray-500">
                <li className=""> Technical Authority (Lifting Equipment)</li>
                <li className="">Appointed Person (Lifting Operations)</li>
                <li className="">Approved Lift Installer</li>
                <li className=""> Lifting Equipment Operator</li>
                <li className="">Work Equipment Operator</li>
                <li className="">Rigger</li>
                <li className=""> Lifting Equipment Operation Assistant</li>
                <li className=""> Scaffolding Technician</li>
                <li className=""> Abseiling Technician</li>
              </ol>
            </div>
          </div>

          <div className="space-y-10">
            <h1 className="font-semibold text-xl">
              Organization Certification
            </h1>
            <div className="space-y-3">
              <h2 className="text-lg text-gray-800">
                Boiler and Pressure Vessel Contractor Certification
              </h2>
              <p className="text-gray-500">
                A person or organisation involved in the business of
                manufacturing, inspection and certification, installing,
                altering, or repairing boilers, pressure vessels, fittings, or
                piping systems and training of engineers, Authorized Inspectors,
                boiler operators, and technicians include:
              </p>
              <ol className="space-y-1 list-disc text-gray-500">
                <li className="">Approved Contractor</li>
                <li className="">Approved Inspection Agency</li>
                <li className="">Training Contractor</li>
              </ol>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg text-gray-800">
                Lifting and Allied Work Contractor Certification
              </h2>
              <p className="text-gray-500">
                A person or organisation involved in the business of
                manufacturing, inspection and certification, installing,
                altering, or repairing boilers, pressure vessels, fittings, or
                piping systems and training of engineers, Authorized Inspectors,
                boiler operators, and technicians include:
              </p>
              <ol className="space-y-1 list-disc text-gray-500">
                <li className="">Mobile Crane and Tower Crane</li>
                <li className="">Travelling Cranes</li>
                <li className="">Overhead Travelling Cranes</li>
              </ol>
            </div>
          </div>

          <div className="space-y-10">
            <h1 className="font-semibold text-xl">
            Equipment Certification
            </h1>
            <div className="space-y-3">
              <h2 className="text-lg text-gray-800">
                Boiler and Pressure Vessel Contractor Certification
              </h2>
              <p className="text-gray-500">
                A person or organisation involved in the business of
                manufacturing, inspection and certification, installing,
                altering, or repairing boilers, pressure vessels, fittings, or
                piping systems and training of engineers, Authorized Inspectors,
                boiler operators, and technicians include:
              </p>
              <ol className="space-y-1 list-disc text-gray-500">
                <li className="">Approved Contractor</li>
                <li className="">Approved Inspection Agency</li>
                <li className="">Training Contractor</li>
              </ol>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg text-gray-800">
                Lifting and Allied Work Contractor Certification
              </h2>
              <p className="text-gray-500">
                A person or organisation involved in the business of
                manufacturing, inspection and certification, installing,
                altering, or repairing boilers, pressure vessels, fittings, or
                piping systems and training of engineers, Authorized Inspectors,
                boiler operators, and technicians include:
              </p>
              <ol className="space-y-1 list-disc text-gray-500">
                <li className="">Mobile Crane and Tower Crane</li>
                <li className="">Travelling Cranes</li>
                <li className="">Overhead Travelling Cranes</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cert;
