import Table from "@/components/Table";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatsCard from "../user/dashboard/statsCard";
import Link from "next/link";
import { AddCircleIcon } from "@/svgs";
import { stats } from "../user/dashboard/stats";
import { applications } from "@/utils/data";

const Admin = () => {
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
        <Table tableData={applications} />
      </div>
    </DashboardLayout>
  );
};

export default Admin;
