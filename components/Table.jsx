"use client";

import { SortIcon } from "@/svgs";
import { usePathname, useRouter } from "next/navigation";
import { useGetAllApplicationsQuery } from "@/store/api/applicationApi";
import { time } from "@/utils/time&dates";
import { cutString } from "@/utils/helpers";
import TableSkeleton from "./skeleton-loaders/TableSkeleton";
import { useEffect } from "react";

const drafttableHeadData = [
  "Ref No",
  "Company Details",
  "Status",
  "Date started",
];

const Table = () => {
  const router = useRouter();
  const previousRoute = router.asPath;

  const previousRouteName = previousRoute?.split('/').pop();

  const { isLoading, isSuccess, isError, error, data, refetch } =
    useGetAllApplicationsQuery();

  useEffect(() => {
    if (previousRouteName?.includes("new-application")) {
      refetch();
    }
  }, [previousRouteName, refetch]);

  const applications = data?.data.applications;

  const openApplicationDetails = (applicationId, applicationStatus) => {
    if (
      applicationStatus.toLocaleLowerCase() === "approved" ||
      applicationStatus.toLocaleLowerCase() === "rejected"
    ) {
      router.push(
        `/user/applications/${applicationId}?status=${applicationStatus}`
      );
    }
  };

  if (isLoading) return <TableSkeleton />;

  return (
    <div className="relative overflow-x-auto lg:overflow-x-hidden shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-500 uppercas bg-gray-50">
          <tr className="whitespace-nowrap">
            <th scope="col" className="px-6 py-3">
              Ref No
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Applicant Name
                <a href="#">{SortIcon}</a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Application
                <a href="#">{SortIcon}</a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Status
                <a href="#">{SortIcon}</a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Date Applied
                <a href="#">{SortIcon}</a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {applications?.map((application) => (
            <tr
              onClick={() =>
                openApplicationDetails(application.id, application.status)
              }
              key={application.id}
              className="whitespace-nowrap lg:whitespace-normal bg-white border-b w-full text-sm cursor-pointer hover:opacity-70"
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
              <td className="px-6 py-4 w-80">{application?.form?.name}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2.5 py-1.5 text-xs ${
                    application?.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  } font-medium rounded-3xl`}
                >
                  {application.status}
                </span>
              </td>
              <td className="px-6 py-4 space-y-1">
                <p className="">{time.formatDate(application?.updated_at)}</p>
                <p className="text-center">
                  {time.formatTime(application?.updated_at)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
