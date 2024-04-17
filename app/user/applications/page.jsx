"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { applications, applicationsTabs } from "@/utils/data";
import Table from "@/components/Table";
import { Suspense, useState } from "react";
import TabSwitcher from "../../../components/TabSwitcher";
import { SearchIcon } from "@/svgs";
import WithAuth from "@/components/withAuth";
import Search from "@/components/Search";

// const searchFilters = [
//   {
//     id: "c1",
//     filterKey: "referrence_no",
//     name: "Referrence No",
//   },
//   {
//     id: "c2",
//     filterKey: "applicant_name",
//     name: "Applicant Name",
//   },
//   {
//     id: "c1",
//     filterKey: "application_name",
//     name: "Application Name",
//   },
// ];

const Applications = () => {
  return (
    <DashboardLayout header="Applications">
      <div className="space-y-6 w-full">
        <Suspense>
          <TabSwitcher applicationsTabs={applicationsTabs} />
        </Suspense>
        <h1 className="px-4 font-semibold text-lg text-gray-600">
          All Applications
        </h1>
        <div className="space-y-8 bg-white py-4 px-4">
          <Search />
          <Suspense>
            <Table />
          </Suspense>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(Applications);
