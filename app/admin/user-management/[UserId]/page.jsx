"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import TextFieldSkeleton from "@/components/skeleton-loaders/TextFieldSkeleton";
import WithAuth from "@/components/withAuth";
import { useGetUserQuery } from "@/store/api/userApi";
import { time } from "@/utils/time&dates";
import { useParams, useSearchParams } from "next/navigation";
import UserProfileTab from "./userProfileTab";
import UserLog from "./userLog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserProfile = () => {

  return (
    <DashboardLayout header="Admin">
      <div className="w-full pb-8">
        <h1 className="text-black font-bold text-lg">User Profile</h1>
        <p className="text-gray-600 text-sm">
          view all user account details below
        </p>
      </div>
      <div className="bg-white rounded-lg pl-6 pb-6">
        <h1 className="text-[#46B038] font-bold pt-4 pb-6">USER DETAILS:</h1>
        <Tabs defaultValue="user-profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-96 w-full mb-8">
            <TabsTrigger className="space-x-2" value="user-profile">
              <span className="">User Profile</span>
              {/* <span className="">{Log}</span> */}
            </TabsTrigger>
            <TabsTrigger value="user-log">User Log</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="user-profile">
            <UserProfileTab />
          </TabsContent>
          <TabsContent value="user-log">
            <UserLog />
          </TabsContent>
          {/* <TabsContent value="activity"><ActivityTable /></TabsContent> */}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(UserProfile);
