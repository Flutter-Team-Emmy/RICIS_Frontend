"use client";
import TabSwitcher from "@/components/TabSwitcher";
import Search from "@/components/Search";
import Table from "@/components/Table";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
import { applicationsTabs } from "@/utils/data";
import { Suspense } from "react";

const AppManagement = () => {
  return (
    <DashboardLayout header="Admin">
      <div className="w-full space-y-6">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-lg">
            Application Management
          </h1>
          <p className="text-gray-600 text-sm">
            view all your staff list below
          </p>
        </div>
        <TabSwitcher applicationsTabs={applicationsTabs} />
        <div className="space-y-8 bg-white py-4">
          <Search />
          <Suspense>
            <Table />
          </Suspense>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(AppManagement);
