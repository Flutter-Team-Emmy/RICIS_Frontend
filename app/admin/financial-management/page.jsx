"use client";

import InputField from "@/app/user/new-application/InputField";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { SearchIcon } from "@/svgs";
import TransactionsTable from "@/components/TransactionsTable";
import WithAuth from "@/components/withAuth";
import Search from "@/components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import Paginations from "@/components/Pagination";
import { setPage, selectTotalPage } from "@/store/features/transactionSlice";
import { useRouter } from "next/navigation";

const FinancialManagement = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pageCount = useSelector(selectTotalPage);

  return (
    <DashboardLayout header="Admin">
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-between w-full ">
          <div className="w-full">
            <h1 className="text-black font-bold text-lg">
              Financial Management
            </h1>
            <p className="text-gray-600 text-sm">view all users transactions</p>
          </div>
          <button
            onClick={() => router.push("/admin/statistics")}
            className="bg-[#46B038] px-4 py-2 text-white text-xs rounded-md shadow-md whitespace-nowrap "
          >
            View Transaction Stat
          </button>
        </div>
        <div className="bg-white rounded-lg space-y-6 p-4">
          <h1 className="text-black font-bold">Payment Information</h1>
          {/* <Search /> */}
          <TransactionsTable />
        </div>
        <div className="mt-8">
          <Paginations
            pageCount={pageCount}
            setPage={(event) => dispatch(setPage(event.selected + 1))}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(FinancialManagement);
