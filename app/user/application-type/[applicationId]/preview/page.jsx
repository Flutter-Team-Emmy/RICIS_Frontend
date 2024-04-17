"use client";

import { useParams, useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
import { Check } from "@/svgs";
import { document } from "@/svgs";
import Document from "./Document";
import Btn from "@/components/Btn";

const Preview = () => {
  const router = useRouter();
  const params = useParams();
  const applicationId = params.applicationId;

  const storedFormData = JSON.parse(localStorage.getItem("formData"));
  const formData = Object.keys(storedFormData);
  const storedDocuments = JSON.parse(localStorage.getItem("documents"));
  const documents = Object.keys(storedDocuments);

  return (
    <DashboardLayout header={`Application- ${applicationId}`} icon="">
      <div className="space-y- w-full">
        <div className="space-y-4">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <h1 className="text-black font-bold">
                Personnel certification:{" "}
                <span className="text-[#46B038]">CLEARANCE</span>
              </h1>
              <p className="text-gray-600 text-sm">
                Please fill all information correctly
              </p>
            </div>
          </div>
          <div className="bg-white w-full shadow-md rounded-md space-y-6 p-6 h-fit">
            <div className="flex items-center gap-1">
              <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS:</h1>
              <span className="font-semibold text-gray-500">
                {applicationId}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-y-6 text-sm">
              {formData.map((name) => (
                <div key={name} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      {name.split("_").join(" ")}
                    </span>
                    <span className="flex items-center justify-center rounded-full bg-[#69CB5C] w-4 h-4">
                      {Check}
                    </span>
                  </div>
                  <p className="text-gray-400">{storedFormData[name]}</p>
                </div>
              ))}
            </div>
            <div className="pt-8 space-y-6">
              <p className="font-semibold">Applicant's Documents</p>
              <div className="grid grid-cols-2 gap-y-8 text-sm">
                {documents?.map((doc) => (
                  <div key={doc} className="space-y-3">
                    <p className="text-[#69CB5C]">{doc.split("_").join(" ")}</p>
                    <div className="space-y-3">
                      {storedDocuments[doc]?.length === 0 ? (
                        <p className="text-gray-500">No file selected.</p>
                      ) : (
                        storedDocuments[doc].map((file) => (
                          <Document key={file.name} documentName={file.name} />
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-12 space-x-3 flex items-center">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 bg-gray-700 text-white rounded-md hover:opacity-70"
              >
                Back
              </button>
              <Btn text="Submit" bgColorClass="bg-[#46B038]" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(Preview);
