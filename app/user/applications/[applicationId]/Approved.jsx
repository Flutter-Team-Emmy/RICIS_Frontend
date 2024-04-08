import ApplicationStatus from "./ApplicationStatus";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import {
  useDownloadCertificateQuery,
  useLazyDownloadCertificateQuery,
  useLazyMailCertificateQuery,
} from "@/store/api/applicationApi";
import { DownloadIcon, MailIcon } from "@/svgs";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { normalizeErrors } from "@/utils/helpers";
import { toast } from "react-toastify";

const ApplicationApproved = ({ data }) => {
  const [
    downloadCertificate,
    { isLoading: isDownloading, isSuccess, isError, error, data: certificate },
  ] = useLazyDownloadCertificateQuery();
  const [
    mailCertificate,
    {
      isLoading: mailing,
      isSuccess: mailingSuccess,
      error: mailingError,
      data: mail,
    },
  ] = useLazyMailCertificateQuery();


  useEffect(() => {
    if (mailingSuccess) {
      toast.success("Certifcate successfully sent to our mail!", {
        autoClose: 3000,
      });
    }
  }, [mailingSuccess]);

  const handleDownload = async () => {
    await downloadCertificate(data?.application?.id);
    const url = window.URL.createObjectURL(new Blob([certificate]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "certificate.pdf"); // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
  };

  return (
    <DashboardLayout header="Application">
      <div className="lg:flex lg:justify-between w-[95%] pb-8">
        <div className="w-full pb-8">
          <h1 className="text-black font-bold text-2xl">
            Application <span className="text-green-300">Approved</span>
          </h1>
          {/* <p className="text-gray-600 text-sm">
            Congratulations! Your Application was successful
          </p> */}
        </div>
        <div className="lg:w-[30%] space-y-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md hover:opacity-70"
          >
            {isDownloading ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              <span className="">{DownloadIcon}</span>
            )}
            <span className="">
              {isDownloading
                ? "downloading certificate..."
                : "Download Certificate"}
            </span>
          </button>
          <button
            onClick={() => mailCertificate(data?.application?.id)}
            className="flex items-center gap-1 text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md hover:opacity-70"
          >
            {mailing ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              <span className="">{MailIcon}</span>
            )}
            <span className="">
              {mailing ? "mailing certificate..." : "Mail Certificate"}
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md pt-8 pl-6 pb-6">
        {data ? (
          <ApplicationStatus data={data} />
        ) : (
          <div className="flex items-center justify-center h-[40vh] w-full  ">
            <ClipLoader color="#46B038" size={30} />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ApplicationApproved;
