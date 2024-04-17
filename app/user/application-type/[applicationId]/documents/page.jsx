"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
import FPI from "@/app/user/FPI";
import Drop from "./Drop";
import Document from "./Document";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Check, DocumentEmpty, file } from "@/svgs";

const documents = [
  {
    id: "d1",
    name: "Oil_and_Gas_Authorization",
  },
  {
    id: "d2",
    name: "Oil_and_Gas_Authorizatiok",
  },
  {
    id: "d3",
    name: "Oil_and_Gas_Authorizatioa",
  },
  {
    id: "d4",
    name: "Oil_and_Gas_Authorizatiob",
  },
  {
    id: "d5",
    name: "Oil_and_Gas_Authorizatioc",
  },
  {
    id: "d6",
    name: "Oil_and_Gas_Authorizatiod",
  },
  {
    id: "d7",
    name: "Oil_and_Gas_Authorizatioe",
  },
  {
    id: "d8",
    name: "Oil_and_Gas_Authorizatiof",
  },
  {
    id: "d9",
    name: "Oil_and_Gas_Authorizatiog",
  },
  {
    id: "d10",
    name: "Oil_and_Gas_Authorizatioh",
  },
  {
    id: "d11",
    name: "Oil_and_Gas_Authorizatioj",
  },
];

const InitialDocs = {
  Oil_and_Gas_Authorization: [],
  Oil_and_Gas_Authorizatiok: [],
  Oil_and_Gas_Authorizatioa: [],
  Oil_and_Gas_Authorizatiob: [],
  Oil_and_Gas_Authorizatioc: [],
  Oil_and_Gas_Authorizatiod: [],
  Oil_and_Gas_Authorizatioe: [],
  Oil_and_Gas_Authorizatiof: [],
  Oil_and_Gas_Authorizatiog: [],
  Oil_and_Gas_Authorizatioh: [],
  Oil_and_Gas_Authorizatioj: [],
};

const Documents = () => {
  const router = useRouter();
  const params = useParams();
  const applicationId = params.applicationId;
  const defaultDoc = documents[0]?.name;
  const [selectedDoc, setSelectedDoc] = useState(defaultDoc);

  const initializer = () =>
    JSON.parse(localStorage.getItem("documents")) || InitialDocs;
  const [files, setFiles] = useState(initializer);

  const [selectedDocFiles, setSelectedDocFiles] = useState([]);
  const [sizeErrorFiles, setSizeErrorFiles] = useState([]);
  console.log(files[selectedDoc]);
  //   console.log(currentDocument);

  const handleFileChange = (event) => {
    // Clear the error state
    setSizeErrorFiles([]);

    const { name, value } = event.target;
    const docs = event.target.files;
    console.log(Array.from(docs));
    const filesArray = Array.from(docs).map((file) => {
      if (file.size > 10 * 1024 * 1024) {
        // File size exceeds 10MB
        return {
          name: file.name,
          sizeError: true,
        };
      } else {
        return {
          name: file.name,
          type: file.type,
          size: file.size,
          file: file,
        };
      }
    });
    const updatedFiles = filesArray.filter((file) => !file.sizeError);
    const updatedSizeErrorFiles = filesArray.filter((file) => file.sizeError);

    setSelectedDocFiles((prevState) => [...prevState, ...updatedFiles]);
    localStorage.setItem(
      selectedDoc,
      JSON.stringify([...selectedDocFiles, ...updatedFiles])
    );

    if (updatedSizeErrorFiles.length > 0) {
      setSizeErrorFiles((prevErrors) => [
        ...prevErrors,
        ...updatedSizeErrorFiles.map((file) => file.name),
      ]);
    }
  };

  //   Delete from selected document
  const removeDocument = (name) => {
    const currentDocument = files[selectedDoc];
    const updatedDocFiles = currentDocument?.filter((doc) => doc.name !== name);
    setFiles((prev) => {
      return { ...prev, [selectedDoc]: updatedDocFiles };
    });
    setSelectedDocFiles(updatedDocFiles);
    localStorage.setItem(selectedDoc, JSON.stringify(updatedDocFiles));
  };

  useEffect(() => {
    setFiles((prevState) => {
      return { ...prevState, [selectedDoc]: selectedDocFiles };
    });
  }, [selectedDocFiles]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem(selectedDoc)) || [];
    setSelectedDocFiles(storedFiles);
  }, [selectedDoc]);

  // fetch files from localstorage whenever it changes
  useEffect(() => {
    const storedDocuments = localStorage.getItem("documents");
    if (storedDocuments) {
      setFiles(JSON.parse(storedDocuments));
    }
  }, []);

  // Save form files to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "documents",
      JSON.stringify({ ...files, [selectedDoc]: selectedDocFiles })
    );
  }, [files]);

  const previewForm = () => {
    router.push(`/user/application-type/${applicationId}/preview`);
  };

  return (
    <DashboardLayout header={`Application - ${applicationId}`} icon="">
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
          <div className="flex justify-auto mx-auto">
            <FPI length={4} shade={4} />
          </div>
          <div className="bg-white w-full shadow-md rounded-md space-y-6 p-6 h-fit">
            <div className="flex items-center gap-1">
              <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS:</h1>
              <span className="font-semibold text-gray-500">
                {applicationId}
              </span>
            </div>
            <div className="grid grid-cols-[3fr_7fr] gap-4">
              <div className="bg-gray-100 space-y-5 px-3 py-2 text-[#0F5805] rounded-md text-sm">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc.name)}
                    className={`flex items-center gap-3 cursor-pointer px-2 py-1.5 rounded-lg ${
                      selectedDoc === doc.name
                        ? "bg-gray-300 font-semibold"
                        : ""
                    }`}
                  >
                    <p>{doc.name.split("_").join(" ")}</p>
                    {files[doc.name]?.length !== 0 && (
                      <span className="flex items-center justify-center rounded-full bg-[#69CB5C] w-4 h-4">
                        {Check}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="w-full space-y-5">
                <Drop documentName={selectedDoc} onChange={handleFileChange} />
                {sizeErrorFiles.length > 0 && (
                  <div className="text-red-700 font-medium text-sm space-y-2">
                    <p className="font-semibold">
                      File size must be less than 10mb.
                    </p>
                    {sizeErrorFiles.map((file) => (
                      <p className="italic">{file}</p>
                    ))}
                  </div>
                )}
                <div className="w-full space-y-4">
                  {files[selectedDoc]?.length === 0 && (
                    <div className="flex flex-col items-center space-y-3">
                      <span>{DocumentEmpty}</span>
                      <p className="text-sm text-gray-500">
                        No document selected.
                      </p>
                    </div>
                  )}
                  {files[selectedDoc].map((doc) => (
                    <Document
                      key={doc.name}
                      name={doc?.name}
                      removeDocument={() => removeDocument(doc?.name)}
                    />
                  ))}
                </div>
                <div className="pt-20 space-x-3 text-sm">
                  <button
                    type="button"
                    className="px-4 py-2 border border-[#46B038] text-gray-600 rounded-md hover:opacity-70"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    onClick={previewForm}
                    className="px-6 py-2 bg-[#46B038] hover:opacity-70 text-white rounded-md"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(Documents);
