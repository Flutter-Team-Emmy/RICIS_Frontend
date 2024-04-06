"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import TextFieldSkeleton from "@/components/skeleton-loaders/TextFieldSkeleton";
import { useGetUserQuery } from "@/store/api/userApi";
import { time } from "@/utils/time&dates";
import { useParams, useSearchParams } from "next/navigation";

const UserProfile = () => {
  const params = useSearchParams();
  const userId = params.get("id");
  console.log(userId);
  const { isLoading, isSuccess, isError, error, data } =
    useGetUserQuery(userId);
  const details = data?.data;
  console.log(details);
  const userDetails = [
    {
      header: "Name",
      des: details?.first_name + " " + details?.last_name,
    },
    {
      header: "Email Address",
      des: details?.email,
    },
    {
      header: "Phone Number",
      des: details?.phone,
    },
    {
      header: "Date Added",
      des: time.formatDate(details?.created_at),
    },
  ];

  return (
    <DashboardLayout header="Admin">
      <div className="w-full pb-8">
        <h1 className="text-black font-bold text-2xl">User Profile</h1>
        <p className="text-gray-600 text-sm">
          view all user account details below
        </p>
      </div>
      <div className="bg-white rounded-lg pl-6 pb-6">
        <h1 className="text-[#46B038] font-bold pt-4 pb-6">USER DETAILS:</h1>
        <div className="space-y-6">
          {isSuccess &&
            userDetails.map((data, index) => (
              <div key={index} className="w-[70%] lg:w-[25%] space-y-2">
                <h2 className="font-bold">{data.header}</h2>
                <div className="border-[1px] border-gray-150 border-solid rounded-lg py-2 pl-4">
                  <p className="text-sm text-gray-400">{data.des}</p>
                </div>
              </div>
            ))}
          {isLoading &&
            [1, 2, 3, 4].map((loader) => <TextFieldSkeleton key={loader} />)}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
