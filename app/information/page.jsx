"use client";

import BgImgText from "@/components/BgImgText";
import PdfComp from "@/components/PdfComp";
import MainLayout from "@/components/mainLayout";
import { useGetInformationQuery } from "@/store/api/generalApi";
import Link from "next/link";
import React from "react";
import Loader from "../legislation_rules/loader";

const Information = () => {
  const { data, isLoading, isSuccess } = useGetInformationQuery();

  console.log(data);

  const results = data?.data.information;
  const description = data?.data.description;
  const imgUrl = data?.data.image;

  return (
    <MainLayout>
      <div>
        <BgImgText text="Information" url={imgUrl} isLoading={isLoading} />
        <div className="w-[90%] mx-auto pt-[64px] pb-[6rem] flex flex-col space-y-[64px] ">
          <p className="leading-[30px] text-[18px] text-gray-500">
            On August 20, 2007 the Company changed its name to ‘Africa Oil
            Corp.’ On June 19, 2009, the shareholders of the Company passed a
            special resolution increasing the Company’s authorized share capital
            to an unlimited number of common shares. On June 3, 2013, the
            shareholders of Africa Oil passed a special resolution authorizing
            an alteration of the Company’s articles to include advance notice
            provisions for the nomination of directors.
          </p>
          <p className="leading-[30px] text-[18px] text-gray-500">
            The registrar for the common shares of the Company in Sweden is
            Euroclear Sweden AB, 103 97 Stockholm, Sweden. Africa Oil’s
            registered and records office is located at 2500 Park Place, 666
            Burrard Street, Vancouver, B.C., V6C 2X8. The Company’s corporate
            office is located at Suite 2500, 666 Burrard Street, Vancouver,
            B.C., Canada, V6C 2X8. The Company also has an office located at 1st
            Floor Fidelity Centre, Waridi Lane, Off Waiyaki Way, P.O. Box
            1194-00606, Nairobi, Kenya, and a registered office at 16 Great
            Queen Street, Covent Garden, London, United Kingdom, WC2B 5AH.
          </p>
          {/* {isSuccess && (
            <h2 className="sf400 text-[1.25rem] leading-[30px]  text-[#00000084] ">
              {description}
            </h2>
          )}
          {isLoading && (
            <div className="w-[95%] bg-gray-200 mb-12 m-auto h-40 animate-pulse"></div>
          )} */}
          <div className="border border-[#DDDDDD] rounded-[12px] p-[20px] lg:p-[48px] ">
            <h1 className="inter600 text-[2.25rem] leading-[54px]">
              Checklist
            </h1>
            <h2 className="sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mt-[20px]">
              The section is with its headquarters in Wolfsburg is one of the
              world’s leading automobile manufacturers and the largest carmaker
              in Europe. The Group is made up of ten brands from seven European
              countries: Volkswagen, Volkswagen Nutzfahrzeuge, ŠKODA, SEAT,
              CUPRA, Audi, Lamborghini, Bentley, Porsche and Ducati.
            </h2>

            <Link href="/checklist">
              <h2 className="sf500 text-[1rem] leading-[24px] text-[#3361FF] mt-[2rem] text-center">
                View all &rarr;
              </h2>
            </Link>
          </div>

          <div className="flex flex-col space-y-[5rem]">
            {results?.map((doc) => (
              <PdfComp
                key={doc.id}
                data={{
                  type: doc.file_type,
                  page: doc.pages,
                  name: doc.name,
                  img: doc.image,
                  url: doc.download_url,
                }}
              />
            ))}
            {(isLoading || results?.length === 0) &&
              [1, 2, 3, 4, 5].map((loader) => <Loader key={loader} />)}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Information;
