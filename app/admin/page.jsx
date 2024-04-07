"use client";
import Table from "@/components/Table";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatsCard from "../user/dashboard/statsCard";
import Link from "next/link";
import { AddCircleIcon } from "@/svgs";
import { stats } from "../user/dashboard/stats";
import { applications } from "@/utils/data";
import { useGetAllApplicationsQuery } from "@/store/api/applicationApi";
import axios from "axios";
import { baseUrl } from "@/lib/configs";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/authHelpers";
import WithAuth from "@/components/withAuth";

const Admin = () => {
  const [data, setData] = useState([]);
  // hello george, i dont understand the way u handle ur api, so i decided to do something over here
  const getApplications = async () => {
    try {
      const token = getToken();
      const res = await axios.get(`${baseUrl}/application/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res) {
        console.log(res.data.data.stats);
        setData(res.data.data.stats);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <DashboardLayout header="Admin">
      <div className="space-y-10 w-full">
        <div className="lg:flex lg:justify-between w-full items-center">
          <div className="space-y-2">
            <h1 className="text-gray-900 text-3xl font-medium">Welcome Back</h1>
            <p className="text-gray-500">
              Here is a preview of your activities and information
            </p>
          </div>
        </div>
        <div className="flex w-full gap-6 flex-wrap w-fit">
          {data?.map((stat) => (
            <StatsCard
              key={stat.id}
              status={stat.status}
              amount={stat.amount}
              percentage={Number(stat.percentage.toFixed(2))}
              increase={stat.daily_stats[0]}
              dailyStat={Object.values(stat.daily_stats)}
              colorCode={stat.chart_color}
              colorClass={`text-[#${stat.chart_color[0]}]`}
            />
          ))}
        </div>
        <Table />
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(Admin);
