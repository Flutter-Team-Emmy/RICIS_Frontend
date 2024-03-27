"use client";

import Sidebar from "./Sidebar";
import { useState } from "react";
import { BellIcon } from "@/svgs";
import Image from "next/image";

const DashboardLayout = ({ children, header, icon }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible && (
        <Sidebar display="block" lg_display="hidden" zIndex="z-[999]" />
      )}
      <div className={`h-full w-full mt-28`}>
        <Sidebar />
        <div className={`space-y-6 px-6 lg:pr-20 pb-12`}>
          <div
            className={`flex justify-between py-5 px-5 w-full lg:w-[calc(100%-12rem)] lg:left-[12rem] left-0 lg:r-56 shadow-sm fixed top-0 bg-nav-bg backdrop-blur-md  transition ease-out delay-100 duration-500 z-[100]`}
          >
            <div className="w-full flex justify-between items-center">
              <div className="items-center gap-x-2 hidden lg:flex">
                {icon}
                <h1 className="text-slate-800 text-2xl font-semibold">
                  {header}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                  <div className="p-2 border-2 rounded-full">
                      <span className="">{BellIcon}</span>
                  </div>
                  <div className="p-1.5 border-2 rounded-full">
                      <Image width={30} height={30} src="/images/avatar.png" alt="" className="" />
                  </div>
              </div>
            </div>
          </div>
          <main className="lg:w-[calc(100%-8.5rem)] overflow-none lg:ml-[12rem]">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
