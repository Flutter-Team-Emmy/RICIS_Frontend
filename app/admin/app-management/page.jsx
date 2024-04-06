"use client";
import Table from "@/components/Table";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AppManagement = () => {
  const params = useSearchParams();

  return (
    <DashboardLayout header="Admin">
      <div className="w-full pb-8">
        <h1 className="text-black font-bold text-2xl">
          Application Management
        </h1>
        <p className="text-gray-600 text-sm">view all your staff list below</p>
      </div>
      <Table />
    </DashboardLayout>
  );
};

export default AppManagement;
