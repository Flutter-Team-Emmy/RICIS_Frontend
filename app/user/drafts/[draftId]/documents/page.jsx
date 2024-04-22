"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
// import FPI from "@/app/user/FPI";
import Drop from "@/app/user/application-type/[applicationId]/documents/Drop";
// import Document from "@/app/user/application-type/[applicationId]/preview/Document";
import Document from "@/app/user/application-type/[applicationId]/documents/Document";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Check, DocumentEmpty, file } from "@/svgs";
import { toast } from "react-toastify";
import { validator } from "@/utils/validator";
import {
  deleteAllDocuments,
  deleteSingleDocument,
  saveDocumentData,
  updateSingleDocument,
} from "@/lib/indexDB";
import { getDocuments } from "@/lib/indexDB";

const Documents = () => {
  const router = useRouter();
  const params = useParams();
  const draftId = params.draftId;

  const generatedDraftDocuments = JSON.parse(
    localStorage.getItem("generatedDraftDocuments")
  );
  const defaultDoc = generatedDraftDocuments[0]?.form_field.name;

  const [documents, setDocuments] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(defaultDoc);

  const [selectedDocFiles, setSelectedDocFiles] = useState([]);
  const [sizeErrorFiles, setSizeErrorFiles] = useState([]);
  //   console.log(files[selectedDoc]);
  //   console.log(currentDocument);
  const currentDocuments = documents?.find((doc) => doc.name === selectedDoc);

  const handleFileChange = (event) => {
    // Clear the error state
    setSizeErrorFiles([]);

    const { name, value } = event.target;
    const files = event.target.files;
    console.log(files);
    const fileTypeIsValid = validator.validateFileType(files[0]);
    // console.log(Array.from(doc));

    if (files.length > 1 || currentDocuments?.data?.length === 1) {
      return toast.warning("Select just one file", { autoClose: 10000 });
    }

    if (!fileTypeIsValid) {
      return toast.warning("Please upload a PDF or image file.", {
        autoClose: 10000,
      });
    }

    const updatedSelectedDocFiles = [];
    // Loop through each selected file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check if file size is less than or equal to 10MB (in bytes)
      if (file.size <= 10 * 1024 * 1024) {
        const reader = new FileReader();

        // Read file content asynchronously
        reader.onload = function (event) {
          const fileContent = event.target.result;

          updatedSelectedDocFiles.push({
            name: file.name,
            type: file.type,
            content: fileContent,
          });
          setSelectedDocFiles((prevDocs) => [
            ...prevDocs,
            ...updatedSelectedDocFiles,
          ]);
          const isExist = documents?.find(
            (doc) => doc?.name === selectedDoc && doc?.draftId === draftId
          );
          if (isExist) {
            updateSingleDocument(
              "draftDocuments",
              selectedDoc,
              updatedSelectedDocFiles
            )
              .then(() => {
                console.log("Item updated successfully");
              })
              .catch((error) => {
                console.error("Failed to update item:", error);
              });
          } else {
            saveDocumentData("draftDocuments", {
              name: selectedDoc,
              data: updatedSelectedDocFiles,
              docId: draftId,
            })
              .then(() => {
                console.log("Document data saved successfully");
              })
              .catch((error) => {
                console.error("Failed to save document data:", error);
              });
          }
        };

        // Read the file as data URL
        reader.readAsDataURL(file);
      } else {
        // Display error message for files larger than 10MB
        setSizeErrorFiles((prevErrorFiles) => [...prevErrorFiles, file.name]);
      }
    }
  };

  //   Delete from selected document
  const removeAllDocument = () => {
    deleteAllDocuments("draftDocuments")
      .then(() => {
        console.log("All documents deleted successfully");
        // Optionally, update the state or perform any other actions after deletion
      })
      .catch((error) => {
        console.error("Failed to delete all documents:", error);
      });
  };

  // console

  const removeSingleDocument = (itemId) => {
    deleteSingleDocument("draftDocuments", itemId)
      .then(() => {
        console.log("Item deleted successfully from document data");
      })
      .catch((error) => {
        console.error("Failed to delete item from document data:", error);
      });

    getDocuments("draftDocuments")
      .then((documents) => {
        const singleDraftDocuments = documents?.filter(
          (doc) => doc.draftId === draftId
        );
        setDocuments(singleDraftDocuments);
        console.log(deleteSingleDocument);
      })
      .catch((error) => {
        console.error("Failed to load documents from IndexedDB:", error);
      });
  };

  console.log(documents);

  useEffect(() => {
    getDocuments("draftDocuments")
      .then((documents) => {
        const singleDraftDocuments = documents?.filter(
          (doc) => doc.docId === draftId
        );
        setDocuments(singleDraftDocuments);
        console.log(deleteSingleDocument);
      })
      .catch((error) => {
        console.error("Failed to load documents from IndexedDB:", error);
      });
  }, [selectedDocFiles]);

  const previewForm = () => {
    router.push(`/user/drafts/${draftId}/preview`);
  };

  const addedDocs = JSON.parse(localStorage.getItem("documents"));

  const documentsEmpty =
    documents?.length === 0
      ? true
      : documents?.length !== generatedDraftDocuments?.length;
  console.log(documentsEmpty);
  console.log(currentDocuments);

  return (
    <DashboardLayout header={`Application - ${draftId}`} icon="">
      <div className="space-y- w-full">
        <div className="space-y-4">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <h1 className="text-black font-bold">
                Personnel certification:{" "}
                <span className="text-[#46B038]">CLEARANCE</span>
              </h1>
              <p className="text-gray-600 text-sm">
                Please add all required documents
              </p>
            </div>
          </div>
          <div className="bg-white w-full shadow-md rounded-md space-y-6 p-6 h-fit">
            <div className="flex items-center gap-1">
              <h1 className="text-[#46B038] font-bold">Draft's Documents:</h1>
              <span className="font-semibold text-gray-500">{draftId}</span>
            </div>
            <div className="grid lg:grid-cols-[3fr_7fr] grid-cols-1 gap-4">
              <div className="bg-gray-100 space-y-3 px-3 py-2 text-[#0F5805] rounded-md text-sm">
                {generatedDraftDocuments?.map((doc) => {
                  // const filledDoc =
                  //   documents.find((current) => doc.name === selectedDoc)?.data
                  //     ?.length !== 0;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc?.form_field.name)}
                      className={`flex items-center gap-3 cursor-pointer px-2 py-1.5 rounded-lg ${
                        selectedDoc === doc.form_field.name
                          ? "bg-gray-300 font-semibold"
                          : ""
                      }`}
                    >
                      <p>{doc.form_field.name.split("_").join(" ")}</p>
                      {/* {filledDoc && (
                        <span className="flex items-center justify-center rounded-full bg-[#69CB5C] w-4 h-4">
                          {Check}
                        </span>
                      )} */}
                      {doc?.required && <span className="text-red-500">*</span>}
                    </div>
                  );
                })}
              </div>
              <div className="w-full space-y-5">
                <Drop documentName={selectedDoc} onChange={handleFileChange} />
                {sizeErrorFiles.length > 0 && (
                  <div className="text-red-700 font-medium text-sm space-y-2">
                    <p className="font-semibold">
                      File size must be less than 10mb.
                    </p>
                    {sizeErrorFiles.map((file) => (
                      <p key={file} className="italic">{file}</p>
                    ))}
                  </div>
                )}
                <div className="w-full space-y-4">
                  {(currentDocuments?.data?.length === 0 ||
                    !currentDocuments) && (
                    <div className="flex flex-col items-center space-y-3">
                      <span>{DocumentEmpty}</span>
                      <p className="text-sm text-gray-500">
                        No document selected.
                      </p>
                    </div>
                  )}
                  {currentDocuments?.data?.map((doc) => (
                    <Document
                      key={doc.name}
                      name={doc?.name}
                      removeDocument={() => removeSingleDocument(doc.name)}
                    />
                  ))}
                </div>
                <div className="pt-20 space-x-3 text-sm">
                  <button
                    type="button"
                    onClick={() => router.push("/user/drafts")}
                    className="px-4 py-2 border border-[#46B038] text-gray-600 rounded-md hover:opacity-70"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={documentsEmpty}
                    type="button"
                    onClick={previewForm}
                    className="px-6 py-2 bg-[#46B038] hover:opacity-70 text-white rounded-md disabled:cursor-not-allowed disabled:opacity-70"
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
