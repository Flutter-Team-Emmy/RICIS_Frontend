"use client";

import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { AddCircleIcon } from "@/svgs";
import StatsCard from "./dashboard/statsCard";
import { stats } from "./dashboard/stats";
import Link from "next/link";
import { getToken } from "@/utils/authHelpers";
import { baseUrl } from "@/lib/configs";
import axios from "axios";
// import { applications } from "@/utils/data";
// import TableSkeleton from "@/components/skeleton-loaders/TableSkeleton";
// import useForm from "@/hooks/useForm";
// import { useUploadImageMutation } from "@/store/api/cloudinaryApi";
// import useApiToast from "@/hooks/useApiToast";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { normalizeErrors } from "@/utils/helpers";
// import { cloud_name, upload_preset } from "@/lib/configs";

// const initialData = {
//   media: new Blob(),
// };

const Dashboard = () => {
  
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

      console.log(res);

      if (res) {
        console.log(res);
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
    <DashboardLayout header="Dashboard" icon="">
      <div className="space-y-10 w-full">
        {/* <div className="">
          <input
            className=""
            type="file"
            accept="image/*"
            name="media"
            onChange={handleChange}
          />
          <button className="" type="button" onClick={handleUpload}>
            <span className="">{isLoading ? "submitting..." : "submit"}</span>
            {isLoading && <ClipLoader size={15} />}
          </button>
        </div> */}
        <div className="lg:flex lg:justify-between w-full items-center">
          <div className="space-y-2">
            <h1 className="text-gray-900 text-3xl font-medium">Welcome Back</h1>
            <p className="text-gray-500">
              Here is a preview of your activities and information
            </p>
          </div>
          <Link
            href="user/application-details"
            className="bg-blue-700 mt-6 w-[50%] lg:w-[20%] px-4 py-2.5 flex items-center gap-2 rounded-md text-white hover:bg-blue-600"
          >
            <span className="">{AddCircleIcon}</span>
            <span className="">New Application</span>
          </Link>
        </div>
        <div className="flex w-full gap-6 ">
          {data?.map((stat) => (
            <StatsCard
              key={stat.id}
              status={stat.status}
              amount={stat.amount}
              percentage={
                stat.percentage === null
                  ? 0
                  : Number(stat.percentage.toFixed(2))
              }              
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

export default Dashboard;
