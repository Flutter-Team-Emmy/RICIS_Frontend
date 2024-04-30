"use client"
import Link from "next/link";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
import { useGetNotificationsQuery } from "@/store/api/userApi";
import { time } from "@/utils/time&dates";
import { useRouter } from "next/navigation";

const NotificationsAdmin = () => {

    const router = useRouter()

    const { data } = useGetNotificationsQuery();
    const notifications = data?.data.notifications.data;

    console.log(data);

    return (
        <DashboardLayout header="Notifications" icon="">
            <div className="">
                <div className="w-full pb-8">
                    <h1 className="text-black font-bold">NOTIFICATIONS</h1>
                    <p className="text-gray-600 text-sm">
                        view all your notifications below
            </p>
                </div>
                {notifications?.map((notification) =>
                    <div onClick={() => router.push(`/user/notifications/${notification?.id}`)} className="border-b-gray border-b-solid border-b-[1px] pb-4 space-y-2 bg-gray-100 w-full p-4 rounded-md" key={notification.id}>
                        <div className="lg:flex lg:justify-between space-y-2">
                            <p
                                className="px-4 py-1 text-[0.7rem] font-bold rounded-md w-fit"
                                style={{
                                    backgroundColor: `#${notification?.bgColor}`,
                                    color: `#${notification?.textColor}`
                                }}
                            >
                                {notification?.type}
                            </p>
                            <div className="flex text-sm items-center gap-x-2 w-full lg:w-[20%]">
                                <img src="/images/timeIcon.svg" alt="" />
                                <p>{time.formatDate(notification?.created_at)}</p>
                                <p>at {time.formatTime(notification?.created_at)}</p>
                            </div>
                        </div>
                        <h3 className="font-bold text-sm">{notification?.title}</h3>
                        <p className="text-sm message-container">{notification?.message}</p>
                    </div>
                )}
            </div>
        </DashboardLayout>
    )
};

export default WithAuth(NotificationsAdmin);