import ApplicationStatus from "./ApplicationStatus";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DownloadIcon } from "@/svgs";

const ApplicationApproved = () => {
  return (
    <DashboardLayout header="Application">
      <div className="lg:flex lg:justify-between w-[95%] pb-8">
        <div className="w-full pb-8">
          <h1 className="text-black font-bold text-2xl">
            APPLICATION APPROVED
          </h1>
          <p className="text-gray-600 text-sm">
            Congratulations! Your Application was successful
          </p>
        </div>
        <div className="lg:w-[30%]">
          <button className="flex items-center gap-1 text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md hover:opacity-70">
            <span className="">{DownloadIcon}</span>
            <span className="">Download Certificate</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md pt-8 pl-6 pb-6">
        <ApplicationStatus />
      </div>
    </DashboardLayout>
  );
};

export default ApplicationApproved;
