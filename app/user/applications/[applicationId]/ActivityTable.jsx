"use client";

import { useGetApplicationActivityQuery } from "@/store/api/applicationApi";
import { useGetStaffActivitiesQuery } from "@/store/api/userApi";
import { time } from "@/utils/time&dates";

import { useParams, useRouter } from "next/navigation";

const columns = [
  "Date",
  "Time",
  "Action",
  "Application Name",
  "Applicant Name",
];


const ActivityTable = () => {
  const params = useParams();
  const applicationId = params.applicationId;

  const router = useRouter();
  console.log(applicationId);

  const { data, isLoading, isSuccess } =
    useGetApplicationActivityQuery(applicationId);
  const activities = data?.data.application_activities;

  console.log(data?.data);


  let action;

  //   if (isLoading) return <TableSkeleton />;
  return (
    <div className="w-full overflow-x-scroll lg:overflow-x-hidden z-[-10] rounded-lg text-xs">
      <table className="w-full text-left rtl:text-right">
        <thead className={`bg-dark-gray text-gray-400 py-4`}>
          <tr className="whitespace-nowrap">
            {columns.map((column, index) => (
              <th key={column} scope="col" className="lg:px-6 px-4 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {activities?.map((activity, index) => {
            const formattedDate = time.formatDate(activity.created_at);
            const formattedTime = time.formatTime(activity.created_at);
            const actor = activity.actor.name;
            const isStaff = activity.actor.isStaff;
            const route = isStaff
              ? `/admin/staff-management/${activity.staff_id}`
              : `/admin/user-management/${activity.user_id}?id=${activity.user_id}`;

            switch (activity.action) {
              case "REJECTED":
                action = "Application was rejected by";
                break;

              case "CREATED":
                action = "Application was created by";
                break;

              case "APPROVED":
                action = "Application was approved by";
                break;

              case "RESUBMITTED":
                action = "Application was resubmitted by";
                break;

              default:
                break;
            }
            return (
              <tr
                // onClick={() => openTransactionInvoice(transaction?.id)}
                key={activity.id}
                className="whitespace-nowrap lg:whitespace-normal bg-white border-b w-full cursor-pointer hover:opacity-70"
              >
                <th
                  scope="row"
                  className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {formattedDate}
                </th>
                <td className="px-6 py-6 w-72">{formattedTime}</td>
                <td className="px-6 py-6 w-72 space-x-2">
                  <span>{action}</span>
                  <span
                    onClick={() => router.push(route)}
                    className={`py-[1px] px-1 rounded-lg ${
                      isStaff
                        ? "bg-green-200 text-green-600"
                        : "bg-blue-200 text-blue-600"
                    }`}
                  >
                    {actor}
                  </span>
                </td>
                <td className="px-6 py-6 w-72">
                  {activity.applicationDetails.form_name}
                </td>
                <td className="px-6 py-6 w-72">
                  {activity.applicationDetails.user_name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
