"use client";

import { StatTrend, StatTrendDown, TrendArrow } from "@/svgs";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Image from "next/image";
import { capitalizeFirstLetter } from "@/utils/helpers";
import YearlyTransactionStats from "./YearlyTransactionStats";
import YearlyIncome from "./YearlyIncome";
import OverviewTable from "./OverviewTable";

const FirstStat = () => {
  return (
    <div className="bg-white p-6 rounded-2xl space-y-6">
      <h1 className="text-gray-500 lg:text-lg text-md">Overall revenue generated</h1>
      <div className="flex justify-between items-end self-end">
        <h2 className="font-semibold text-2xl text-[#46B038]">500,000</h2>
        <div className="flex items-center self-end gap-1">
          <span className="text-[#46B038]">+100%</span>
          <span className="">{StatTrend}</span>
        </div>
      </div>
    </div>
  );
};

const SecondStat = ({ state }) => {
  return (
    <div
      className={`bg-white rounded-2xl space-y-6 border-l-[1.6rem] w-fit ${
        state === "highest" ? "border-[#46B038]" : "border-[#C40E0E]"
      } `}
    >
      <div className="space-y-2 px-6 pt-6">
        <h1 className="text-gray-500 lg:text-lg text-md">
          {capitalizeFirstLetter(state)} revenue generating Application
        </h1>
        <p className="text-gray-800 text-xs lg:text-sm">Personnel Application</p>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-4 gap-2">
        <div className="flex flex-col lg:gap-3 gap-2 items-center lg:py-4 py-2 pl-6">
          <h2
            className={`font-semibold text-xl ${
              state === "highest" ? "text-[#46B038]" : "text-[#C40E0E]"
            }`}
          >
            500,000
          </h2>
          <div className="flex items-center gap-4">
            <span
              className={`${
                state === "highest" ? "text-[#46B038]" : "text-[#C40E0E]"
              }`}
            >
              +100%
            </span>
            <span className="">
              {state === "highest" ? StatTrend : StatTrendDown}
            </span>
          </div>
        </div>
        {/* <div className="w-full"> */}
          <Image
            src={`${
              state === "highest"
                ? "/images/chart-1.png"
                : "/images/chart-2.png"
            }`}
            height={80}
            width={180}
          />
        {/* </div> */}
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <DashboardLayout header="Dashboard" icon="">
      <div className="space-y-10 w-full">
        <div className="">
          <h1 className="text-lg font-semibold">
            Transactions Statistics Overview
          </h1>
          <p className="text-gray-500">View transaction stat below</p>
        </div>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <FirstStat />
          <SecondStat state="highest" />
          <SecondStat state="lowest" />
        </section>
        <section className="space-y-4">
          <h1 className="font-semibold text-lg">Yearly Transaction Stats</h1>
          <div className="grid lg:grid-cols-[7fr_3fr] gap-8 grid-cols-1">
            <YearlyTransactionStats />
            <YearlyIncome />
          </div>
        </section>
        <section className="bg-white rounded-md">
          <h1 className="font-semibold text-lg px-6 py-8">
            Order by Application Overview
          </h1>
          <OverviewTable />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;
