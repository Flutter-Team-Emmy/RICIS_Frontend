"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { applications, applicationsTabs } from "@/utils/data";
import Table from "@/components/Table";
import { Suspense, useState } from "react";
import TabSwitcher from "../../../components/TabSwitcher";
import { SearchIcon } from "@/svgs";
import WithAuth from "@/components/withAuth";
import Search from "@/components/search/Search";
import Paginations from "@/components/Pagination";
import { useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/helpers";

const ApplicationsSuspense = () => {
  const param = useSearchParams();
  const status = param.get("tab");

  return (
    <DashboardLayout header="Applications">
      <div className="space-y-6 w-full">
        <Suspense>
          <TabSwitcher applicationsTabs={applicationsTabs} />
        </Suspense>
        {/* <div className="">
          <input type="date" />
        </div> */}
        <div className="flex items-center gap-2 px-4 font-semibold lg:text-lg text-md text-gray-600">
          <span
            className={`${
              status === "approved"
                ? "text-green-500"
                : status === "pending"
                ? "text-yellow-500"
                : status === "rejected"
                ? "text-red-500"
                : "text-gray-600"
            }`}
          >
            {!status ? "All" : capitalizeFirstLetter(status)}
          </span>
          <span>Applications</span>
        </div>
        <div className="space-y-8 bg-white py-4 px-4">
          <Search />
          <Suspense>
            <Table />
          </Suspense>
        </div>
        <Paginations />
      </div>
    </DashboardLayout>
  );
};

const Applications = () => {
  return (
    <Suspense>
      <ApplicationsSuspense />
    </Suspense>
  );
};

export default WithAuth(Applications);
