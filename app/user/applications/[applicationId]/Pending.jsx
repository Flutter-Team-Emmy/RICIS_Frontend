import ApplicationStatus from "./ApplicationStatus";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DownloadIcon } from "@/svgs";

const ApplicationPending = ({data}) => {
  return (
    <DashboardLayout header="Application">
      <div className="lg:flex lg:justify-between w-[95%] pb-8">
        <div className="w-full pb-8">
          <h1 className="text-black font-bold text-2xl capitalize">
            Application <span className="text-yellow-400">Pending</span>
          </h1>
        </div>
        {/* <div className="lg:w-[30%]">
          <button className="flex items-center gap-1 text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md hover:opacity-70">
            <span className="">{DownloadIcon}</span>
            <span className="">Download Certificate</span>
          </button>
        </div> */}
      </div>
      <div className="bg-white rounded-md pt-8 pl-6 pb-6">
        <ApplicationStatus data={data} />
      </div>
    </DashboardLayout>
  );
};

export default ApplicationPending;
