"use client";

import { SortIcon } from "@/svgs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  useGetAllApplicationsQuery,
  useGetAllDraftsQuery,
} from "@/store/api/applicationApi";
import { time } from "@/utils/time&dates";
import { cutString } from "@/utils/helpers";
import TableSkeleton from "./skeleton-loaders/TableSkeleton";
import { useEffect, useState } from "react";

const tableColumn = [
  "Ref No",
  "Applicant Name",
  "Payment Status",
  "Application Name",
  "Status",
  "Date Applied",
];

const Table = () => {
  const router = useRouter();
  const params = useSearchParams();
  const tab = params.get("tab");
  const [applications, setApplications] = useState([]);
  const { isLoading, isSuccess, isError, error, data } =
    useGetAllApplicationsQuery();

  const openApplicationDetails = (applicationId, applicationStatus) => {
    {
      router.push(
        `/user/applications/${applicationId}?status=${applicationStatus}&id=${applicationId}`
      );
    }
  };

  useEffect(() => {
    switch (tab) {
      case null:
        setApplications(data?.data.applications);
        break;

      case "all":
        setApplications(data?.data.applications);
        break;

      case "pending":
        const pendingApplications = data?.data.applications?.filter(
          (application) => application.status === "PENDING"
        );
        setApplications(pendingApplications);
        break;

      case "approved":
        const approvedApplications = data?.data.applications?.filter(
          (application) => application.status === "APPROVED"
        );
        setApplications(approvedApplications);
        break;

      case "rejected":
        const rejectedApplications = data?.data.applications?.filter(
          (application) => application.status === "REJECTED"
        );
        setApplications(rejectedApplications);
        break;

      default:
        break;
    }
  }, [data, tab]);

  // const openApplicationDrafts = (formId, userId, data) => {
  //   window.localStorage.setItem(userId, JSON.stringify(data));
  //   {
  //     router.push(`/user/new-application/?form_id=${formId}&user_id=${userId}`);
  //   }
  // };

  if (isLoading) return <TableSkeleton />;

  return applications?.length > 0 ? (
    <div className="relative overflow-x-auto lg:overflow-x-hidden shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-500 uppercas bg-gray-50">
          <tr className="whitespace-nowrap">
            {tableColumn.map((column) => (
              <th key={column} scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  {column}
                  <a href="#">{SortIcon}</a>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {applications?.map((application) => (
            <tr
              onClick={() =>
                openApplicationDetails(application.id, application.status)
              }
              key={application.id}
              className="whitespace-nowrap lg:whitespace-normal bg-white border-b w-full text-xs cursor-pointer hover:opacity-70"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {cutString(application.reference_id, 10)}
              </th>
              <td className="px-6 py-4 w-80">
                {application?.user?.first_name +
                  " " +
                  application?.user?.last_name}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`py-1.5 rounded-3xl ${
                    application?.transactions?.length === 0
                      ? "bg-red-100 text-red-600 px-3"
                      : "bg-green-100 text-green-700 px-6"
                  } `}
                >
                  {application?.transactions?.length === 0 ? "Unpaid" : "Paid"}
                </span>
              </td>
              <td className="px-6 py-4 w-80">{application?.form?.name}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2.5 py-1.5 text-xs ${
                    application?.isDraft
                      ? "bg-gray-100 text-gray-500"
                      : application?.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : application?.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-600"
                  } font-medium rounded-3xl`}
                >
                  {application?.isDraft ? "Draft" : application.status}
                </span>
              </td>
              <td className="px-6 py-4 space-y-1 flex flex-col items-end ">
                <p className="">{time.formatDate(application?.created_at)}</p>
                <p className="">{time.formatTime(application?.created_at)}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="flex items-center justify-center bg-white rounded-[4px] ">
      <h1>
        You currently dont have an application, create an application to get
        started
      </h1>
    </div>
  );
};

export default Table;
