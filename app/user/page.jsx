"use client";

import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useEffect } from "react";
import Table from "../../components/Table";
import { AddCircleIcon } from "@/svgs";
import StatsCard from "./dashboard/statsCard";
import { stats } from "./dashboard/stats";
import Link from "next/link";
import { applications } from "@/utils/data";
// import TableSkeleton from "@/components/skeleton-loaders/TableSkeleton";
// import useForm from "@/hooks/useForm";
// import { useUploadImageMutation } from "@/store/api/cloudinaryApi";
// import useApiToast from "@/hooks/useApiToast";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { normalizeErrors } from "@/utils/helpers";
// import { cloud_name, upload_preset } from "@/lib/configs";

// const initialData = {
//   media: new Blob(),
// };

const Dashboard = () => {
  // const { formData, setFormData, handleChange, mediaPreview, setMediaPreview } = 
  //   useForm(initialData);
  // const [
  //   uploadImage,
  //   { isLoading, isSuccess, isError, error, data: media_data }
  // ] = useUploadImageMutation();

  // useEffect(() => {
  //   if (error) {
  //     const err = normalizeErrors(error);
  //     toast.error(err, { autoClose: 2000 });
  //   }
  //   if (isSuccess) {
  //     toast.success("success!", { autoClose: 1000 });
  //   }
  // }, [isSuccess, isError]);

  // const handleUpload = async () => {
  //   if (!formData.media) {
  //     toast.warning("select an image!", { autoClose: 2000 });
  //   }
  //   const data = new FormData();
  //   data.append("file", formData.media);
  //   data.append("upload_preset", upload_preset);
  //   data.append("cloud_name", cloud_name);
  //   await uploadImage(data);
  // };

  // console.log(media_data);
  return (
    <DashboardLayout header="Dashboard" icon="">
      <div className="space-y-10 w-full">
        {/* <div className="">
          <input
            className=""
            type="file"
            accept="image/*"
            name="media"
            onChange={handleChange}
          />
          <button className="" type="button" onClick={handleUpload}>
            <span className="">{isLoading ? "submitting..." : "submit"}</span>
            {isLoading && <ClipLoader size={15} />}
          </button>
        </div> */}
        <div className="lg:flex lg:justify-between w-full items-center">
          <div className="space-y-2">
            <h1 className="text-gray-900 text-3xl font-medium">Welcome Back</h1>
            <p className="text-gray-500">
              Here is a preview of your activities and information
            </p>
          </div>
          <Link
            href="user/application-details"
            className="bg-blue-700 mt-6 w-[50%] lg:w-[20%] px-4 py-2.5 flex items-center gap-2 rounded-md text-white hover:bg-blue-600"
          >
            <span className="">{AddCircleIcon}</span>
            <span className="">New Application</span>
          </Link>
        </div>
        <div className="flex justify-between w-full gap-6 overflow-x-scroll lg:overflow-x-hidden">
          {stats.map((stat) => (
            <StatsCard
              key={stat.id}
              status={stat.status}
              amount={stat.amount}
              percentage={stat.percentage}
              increase={stat.increase}
              colorCode={stat.colorCode}
              colorClass={stat.colorClass}
            />
          ))}
        </div>
        <Table tableData={applications} />
        {/* <TableSkeleton /> */}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
