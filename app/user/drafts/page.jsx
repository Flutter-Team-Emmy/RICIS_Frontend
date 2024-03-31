"use client";

import Table from "@/components/Table";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { drafts } from "@/utils/data";


const Drafts = () => {
  return (
    <DashboardLayout header="Dashboard" icon="">
      <div className="space-y-10 w-full text-sm">
        <div className="bg-gray-100">
          <div className="w-full pb-8">
            <h1 className="text-black font-bold">DRAFTS</h1>
            <p className="text-gray-600 text-sm">
              view all your drafted application below
            </p>
          </div>
          <div className="w-full bg-white overflow-x-scroll lg:overflow-x-hidden z-[-10] rounded-lg">
            <Table tableData={drafts} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Drafts;
