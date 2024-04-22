"use client";

import InputField from "@/app/user/new-application/InputField";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { SearchIcon } from "@/svgs";
import TransactionsTable from "@/components/TransactionsTable";
import WithAuth from "@/components/withAuth";
import Search from "@/components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import Paginations from "@/components/Pagination";
import { selectTotalPage, setPage } from "@/store/features/transactionSlice";

const FinancialManagement = () => {

  const dispatch = useDispatch();
  const pageCount = useSelector(selectTotalPage) + 1;

  return (
    <DashboardLayout header="Admin">
      <div className="space-y-8">
        <div className="w-full">
          <h1 className="text-black font-bold text-lg">Financial Management</h1>
          <p className="text-gray-600 text-sm">view all users transactions</p>
        </div>
        <div className="bg-white rounded-lg space-y-6 p-4">
          <h1 className="text-black font-bold">Payment Information</h1>
          <Search />
          <TransactionsTable />
        </div>
        <div className="mt-8">
          <Paginations
            pageCount={pageCount}
            setPage={(event) => dispatch(setPage(event.selected))}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(FinancialManagement);
