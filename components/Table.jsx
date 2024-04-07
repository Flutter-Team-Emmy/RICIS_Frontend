"use client";

import { SortIcon } from "@/svgs";
import { usePathname, useRouter } from "next/navigation";
import {
  useGetAllApplicationsQuery,
  useGetAllDraftsQuery,
} from "@/store/api/applicationApi";
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

const Table = ({ type, drafts }) => {
  console.log(type, "dsd");
  console.log(drafts);
  // console.log(draftData);
  const router = useRouter();
  const previousRoute = router.asPath;

  const previousRouteName = previousRoute?.split("/").pop();

  // const { isLoading, isSuccess, isError, error, data, refetch } =

  const { data, isLoading, error, isError, isSuccess, refetch } = drafts
    ? useGetAllDraftsQuery()
    : useGetAllApplicationsQuery();

  let draftData = [];

  if (drafts) {
    draftData = data?.data.application;
    console.log(data);
  }

  useEffect(() => {
    if (previousRouteName?.includes("new-application")) {
      refetch();
    }
  }, [previousRouteName, refetch]);

  const applications = drafts ? draftData : data?.data.applications || [];

  console.log(applications);

  const openApplicationDetails = (applicationId, applicationStatus) => {
    {
      router.push(
        `/user/applications/${applicationId}?status=${applicationStatus}&id=${applicationId}&type=${type}`
      );
    }
  };

  const openApplicationDrafts = (formId, userId, data) => {
    window.localStorage.setItem(userId, JSON.stringify(data));
    {
      router.push(`/user/new-application/?form_id=${formId}&user_id=${userId}`);
    }
  };

  if (isLoading) return <TableSkeleton />;

  return applications?.length > 0 ? (
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
                drafts
                  ? openApplicationDrafts(
                      application.formId,
                      application.user.id,
                      application.data
                    )
                  : openApplicationDetails(application.id, application.status)
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
                <p className="">{time.formatDate(application?.updated_at)}</p>
                <p className="">{time.formatTime(application?.updated_at)}</p>
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
