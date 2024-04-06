import ApplicationStatus from "./ApplicationStatus";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DownloadIcon } from "@/svgs";
import { ClipLoader } from "react-spinners";

const ApplicationRejected = ({ data, reason }) => {
  console.log(reason);
  return (
    <DashboardLayout header="Application">
      <div className="lg:flex lg:justify-between w-[95%] pb-8">
        <div className="w-full pb-8">
          <h1 className="text-black font-bold text-2xl">
            Application <span className="text-red-600">Rejected</span>
          </h1>
          {/* <p className="text-gray-600 text-sm">
            Sorry! Your Application was unsuccessful
          </p> */}
        </div>
        <div className="lg:w-[30%]">
          {/* <Image src={certificateIcon} alt="download certificate icon" /> */}
          {/* <button className="flex items-center gap-1 text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md hover:opacity-70">
            <span className="">{DownloadIcon}</span>
            <span className="">Download Certificate</span>
          </button> */}
        </div>
      </div>
      <div className="bg-white lg:flex lg:justify-between rounded-md pt-12 px-6 pb-6">
        {data ? (
          <ApplicationStatus data={data} />
        ) : (
          <div className="flex items-center justify-center h-[40vh] w-full  ">
            <ClipLoader color="#46B038" size={30} />
          </div>
        )}
        <div className="lg:w-[45%] h-[80%] mt-8 pb-6 px-6 pt-8 bg-[#FFF6F6] text-[#7D3434] border-solid border-[1px] border-[#7D3434] rounded-md">
          <p className="pb-4 font-bold">Reason:</p>
          <p className="text-sm text-justify">{reason}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplicationRejected;
