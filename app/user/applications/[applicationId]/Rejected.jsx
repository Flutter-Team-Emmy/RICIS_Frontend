import ApplicationStatus from "./ApplicationStatus";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DownloadIcon } from "@/svgs";
import { ClipLoader } from "react-spinners";
import { Tabs } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import ActivityTable from "./ActivityTable";
import { useGetApplicationActivityQuery } from "@/store/api/applicationApi";
import { useParams } from "next/navigation";

const ApplicationRejected = ({ data, reason }) => {
  const params = useParams();
  const applicationId = params.applicationId;

  const { data: applicationActivityData, isLoading } = useGetApplicationActivityQuery(applicationId);
  const activities = applicationActivityData?.data.application_activities;

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
        <Tabs defaultValue="staff-logs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-96 w-full mb-8">
            <TabsTrigger className="space-x-2" value="staff-logs">
              <span className="">Application Details</span>
              {/* <span className="">{Log}</span> */}
            </TabsTrigger>
            <TabsTrigger value="activity">Application Activity Log</TabsTrigger>
          </TabsList>
          <TabsContent value="staff-logs">
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
          </TabsContent>
          <TabsContent value="activity">
            <ActivityTable activities={activities} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ApplicationRejected;
