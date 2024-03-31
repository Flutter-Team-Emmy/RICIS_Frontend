"use client";

import { SortIcon } from "@/svgs";
import { useRouter } from "next/navigation";

const drafttableHeadData = [
  "Ref No",
  "Company Details",
  "Status",
  "Date started",
];

const Table = ({ tableData }) => {
  const router = useRouter();

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
                Company Details
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
          {tableData?.map((application) => (
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
                {application.ref_no}
              </th>
              <td className="px-6 py-4 w-80">{application.company_details}</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1.5 bg-green-100 text-green-700 font-medium rounded-3xl">
                  {application.status}
                </span>
              </td>
              <td className="px-6 py-4"> {application.date_applied} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
