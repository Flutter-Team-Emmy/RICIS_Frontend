"use client";

import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import { useGetContactInfosQuery } from "@/store/api/generalApi";
import React from "react";
// import {Display} from "next/font/google"

const Contact = () => {
  const { data, isLoading, isSuccess } = useGetContactInfosQuery();
  const contactInfos = data?.data.contactInfo;
  const imgUrl = data?.data.image;

  console.log(data);

  // const inter = SFP({ subsets: ["latin"] });

  return (
    <MainLayout>
      <div className="">
        <div className="grid bg-[url('/images/contact-us.png')] bg-cover bg-no-repeat w-full h-[45rem] pt-20 lg:px-10 px-4">
          <div className="relative flex justify-center items-center p-6 lg:h-[26rem] lg:w-[35rem] w-full h-full rounded-md ml-auto">
            <div className="absolute lg:h-[26rem] lg:w-[35rem] w-full h-full bg-white opacity-[42%] z-[10] rounded-md"></div>
            <div className="w-full h-full bg-white z-[100] py-8 lg:px-10 px-4 space-y-12 rounded-md">
              <h1 className="lg:text-xl text-lg font-semibold text-slate-900">
                Having issues? Please contact us!
              </h1>
              <div className="max-w-sm space-y-4 lg:px-16 px-3">
                <h2 className="font-semibold">RIC Inspection Services LTD</h2>
                <div className="text-sm text-gray-600 space-y-1 max-w-[15rem]">
                  <p className="">
                    P.O BOX 2500, 48 George Street, Houston, Texas .B.C. USA
                  </p>
                  <p className="">info@technical.consultant.com</p>
                  <p className="">09019133316</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 -mb-16 align-self-end">
            <h1 className="text-white text-4xl font-semibold">Contact us</h1>
          </div>
        </div>
      </div>
      {/* <div className="grid lg:grid-cols-2 w-full px-12 gap-y-16 gap-x-40 pb-12">
        {(isLoading || contactInfos?.length === 0) &&
          [1, 2, 3, 4].map((loader) => (
            <div key={loader} className="space-y-4">
              <h1 className="w-[80%] mb-8 h-8 lg:h-12 bg-gray-200 animate-pulse rounded-md"></h1>
              <h2 className="w-[80%] h-4 lg:h-8 bg-gray-200 animate-pulse rounded-md"></h2>
              <h2 className="w-[80%] h-4 lg:h-8 bg-gray-200 animate-pulse rounded-md"></h2>
              <h2 className="w-[80%] h-4 lg:h-8 bg-gray-200 animate-pulse rounded-md"></h2>
            </div>
          ))}
      </div> */}
    </MainLayout>
  );
};

export default Contact;
