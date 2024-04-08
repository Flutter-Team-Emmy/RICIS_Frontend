"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { applications, applicationsTabs } from "@/utils/data";
import Table from "@/components/Table";
import { Suspense } from "react";
import TabSwitcher from "./TabSwitcher";
import WithAuth from "@/components/withAuth";

const Applications = () => {
  return (
    <DashboardLayout header="Dashboard">
      <div className="space-y-12 w-full bg-white">
        {/* <Suspense>
          <TabSwitcher applicationsTabs={applicationsTabs} />
        </Suspense> */}
        <Table tableData={applications} />
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(Applications);
