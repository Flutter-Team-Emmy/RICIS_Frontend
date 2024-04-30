"use client";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
import { useGetSingleNotificationQuery } from "@/store/api/userApi";
import { time } from "@/utils/time&dates";
import { useParams } from "next/navigation";

const Notification = () => {

  const params = useParams();
  const notificationId = params.notificationId;

  const { data } = useGetSingleNotificationQuery(notificationId);
  const notification = data?.data.notification;

  console.log(data)

  return (
    <DashboardLayout header="Notification" icon="">
      <div className="pb-4 bg-gray-100 w-full space-y-6 bg-white px-4 py-8 space-y-10 w-full h-screen">

        <div className="lg:flex lg:justify-between">
          <p
            className="px-4 py-1 text-[0.7rem] font-bold rounded-md w-fit"
            style={{
              backgroundColor: `#${notification?.bgColor}`,
              color: `#${notification?.textColor}`
            }}
          >
            {notification?.type}
          </p>
          <div className="flex text-sm items-center gap-x-2 space-y-2 w-full lg:w-[20%]">
            <img src="/images/timeIcon.svg" alt="" />
            <p>{time.formatDate(notification?.created_at)}</p>
            <p>at {time.formatTime(notification?.created_at)}</p>
          </div>
        </div>
        <h3 className="font-bold text-sm">{notification?.title}</h3>
        <p className="text-sm ">{notification?.message}</p>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(Notification);
