/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { Suspense, useEffect, useState } from "react";
import BgImgText from "@/components/BgImgText";
import Tab from "./Tab";
import News from "./News";
import Notice from "./Notice";
import Circular from "./Circular";
import { useRouter, useSearchParams } from "next/navigation";
import MainLayout from "@/components/mainLayout";

const PageBoundary = () => {
  const router = useRouter();
  const param = useSearchParams();
  const selectedTab = param.get("selected");
  const tabs = ["News", "Notice", "Circular", "Order"];

  const handleClick = (name) => {
    router.push(`/notification?selected=${name}`);
  };

  return (
    <MainLayout>
      <div className="mb-[6rem]">
        <BgImgText
          header="NOTIFICATION"
          text="News, Notice & Circular"
          url="/images/bg4.png"
        />
        <div className="flex flex-col lg:flex-row justify-between gap-10 p-10">
          <div className="rounded-xl w-[35rem] border border-gray-400 h-fit">
            <div className="bg-[#2056A7] py-3 px-3 rounded-t-xl">
              <p className="text-white font-semibold">Notifications</p>
            </div>
            <div className="">
              {tabs.map((tab, index) => {
                const isNotLast = tabs.length - 1 !== index;

                return (
                  <p
                    key={tab}
                    className={`border-b border-gray-400 px-5 py-4 cursor-pointer font-semibold ${
                      (!selectedTab && index === 0) || tab === selectedTab
                        ? "bg-[#D5B69A]"
                        : "bg-white"
                    }   ${isNotLast ? "" : "rounded-b-xl"}`}
                    onClick={() => handleClick(tab)}
                  >
                    {tab}
                  </p>
                );
              })}
            </div>
          </div>
          {selectedTab === "News" ? (
            <News />
          ) : selectedTab === "Notice" ? (
            <Notice />
          ) : selectedTab === "Circular" ? (
            <Circular />
          ) : (
            <News />
          )}
        </div>
        {/* <div className="border-b-[2px] border-transparent border-b-[#0000000A]    ">
          <div className="w-[90%] mx-auto flex space-x-[64px] pt-[2rem]">
            <Tab
              name="News"
              selected={selectedTab === "News"}
              handleClick={handleClick}
            />
            <Tab
              name="Notice"
              selected={selectedTab === "Notice"}
              handleClick={handleClick}
            />
            <Tab
              name="Circular"
              selected={selectedTab === "Circular"}
              handleClick={handleClick}
            />
          </div>
        </div> */}
      </div>
    </MainLayout>
  );
};

const Page = () => {
  return (
    <Suspense>
      <PageBoundary />
    </Suspense>
  );
};

export default Page;
