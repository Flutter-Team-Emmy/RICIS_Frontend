"use client"

import DashboardLayout from "../../components/layouts/DashboardLayout";
import Table from "../../components/Table";
import { AddCircleIcon } from "@/svgs";
import StatsCard from "./dashboard/statsCard";
import { stats } from "./dashboard/stats";
import Link from "next/link";

const Dashboard = () => {
  return (
    <DashboardLayout header="Dashboard" icon="">
      <div className="space-y-10 w-full">
        <div className="lg:flex lg:justify-between w-full items-center">
          <div className="space-y-2">
            <h1 className="text-gray-900 text-3xl font-medium">Welcome Back</h1>
            <p className="text-gray-500">
              Here is a preview of your activities and information
            </p>
          </div>
          <Link href="user/new-application" className="bg-blue-700 mt-6 w-[60%] lg:w-[20%] px-4 py-2.5 flex items-center gap-2 rounded-md text-white hover:bg-blue-600">
            <span className="">{AddCircleIcon}</span>
            <span className="">New Application</span>
          </Link>
        </div>
        <div className="flex justify-between w-full gap-6 overflow-x-scroll lg:overflow-x-hidden">
          {stats.map((stat) => (
            <StatsCard
              key={stat.id}
              status={stat.status}
              amount={stat.amount}
              percentage={stat.percentage}
              increase={stat.increase}
              colorCode={stat.colorCode}
              colorClass={stat.colorClass}
            />
          ))}
        </div>
        <Table />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
