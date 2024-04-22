"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
import FPI from "@/app/user/FPI";
import Drop from "./Drop";
import Document from "./Document";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Check, DocumentEmpty, file } from "@/svgs";
import { toast } from "react-toastify";
import { validator } from "@/utils/validator";
import {
  deleteAllDocuments,
  deleteSingleDocument,
  saveDocumentData,
  transferDocuments,
  updateSingleDocument,
} from "@/lib/indexDB";
import { getDocuments } from "@/lib/indexDB";
import { useCreateDraftMutation } from "@/store/api/applicationApi";
import SaveDraftLoader from "@/components/loaders/saveDraftLoader";

const Documents = () => {
  const router = useRouter();
  const params = useParams();
  const applicationId = params.applicationId;

  const [
    createNewDraft,
    { data: draftData, isLoading: isDraftLoading, isSuccess: isDraftSuccess },
  ] = useCreateDraftMutation();

  const generatedDocuments = JSON.parse(
    localStorage.getItem("generatedDocuments")
  );
  const defaultDoc = generatedDocuments[0]?.name;
  let InitialDocs = {};

  // // auto generate form Fields object of dynamic form field
  // useEffect(() => {
  //   const documentNames = documents.map((doc) => doc.name);
  //   const createInitialObject = () => {
  //     // if (formFields?.length !== 0) {
  //     documentNames?.forEach((doc) => {
  //       InitialDocs[doc] = [];
  //     });
  //     return InitialDocs;
  //   };
  //   if (documents?.length !== 0) {
  //     const initialDocs = createInitialObject();
  //     setFiles(initialDocs);
  //   }
  // }, []);

  // const initializer = () => JSON.parse(localStorage.getItem("documents"));
  const [files, setFiles] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(defaultDoc);

  const [selectedDocFiles, setSelectedDocFiles] = useState([]);
  const [sizeErrorFiles, setSizeErrorFiles] = useState([]);
  console.log(files[selectedDoc]);
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

          // Add file data to the list
          // setSelectedDocFiles((prevList) => [
          //   ...prevList,
          //   { name: file.name, type: file.type, content: fileContent },
          // ]);
          updatedSelectedDocFiles.push({
            name: file.name,
            type: file.type,
            content: fileContent,
          });
          setSelectedDocFiles((prevDocs) => [
            ...prevDocs,
            ...updatedSelectedDocFiles,
          ]);
          const isExist = documents?.find((doc) => doc?.name === selectedDoc);
          if (isExist) {
            updateSingleDocument(
              "applicationDocuments",
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
            saveDocumentData("applicationDocuments", {
              name: selectedDoc,
              data: updatedSelectedDocFiles,
              docId: applicationId
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
        // localStorage.setItem(
        //   selectedDoc,
        //   JSON.stringify([...selectedDocFiles])
        // );
      } else {
        // Display error message for files larger than 10MB
        setSizeErrorFiles((prevErrorFiles) => [...prevErrorFiles, file.name]);
        // setErrorMessage(`${file.name} exceeds the maximum file size of 10MB.`);
      }
    }
    // const filesArray = Array.from(docs).map((file) => {
    //   if (file.size > 10 * 1024 * 1024) {
    //     // File size exceeds 10MB
    //     return {
    //       name: file.name,
    //       sizeError: true,
    //     };
    //   } else {
    //     const reader = new FileReader();
    //     reader.onload = function (event) {
    //       const fileContent = event.target.result;
    //       // Save file content to localStorage
    //       localStorage.setItem("fileContent", fileContent);
    //     };
    //     reader.readAsText(selectedFile);
    //     return {
    //       name: file.name,
    //       type: file.type,
    //       size: file.size,
    //       file: file,
    //     };
    //   }
    // });
    // const updatedFiles = filesArray.filter((file) => !file.sizeError);
    // const updatedSizeErrorFiles = filesArray.filter((file) => file.sizeError);

    // setSelectedDocFiles((prevState) => [...prevState, ...updatedFiles]);
    // localStorage.setItem(
    //   selectedDoc,
    //   JSON.stringify([...selectedDocFiles, ...updatedFiles])
    // );

    // if (updatedSizeErrorFiles.length > 0) {
    //   setSizeErrorFiles((prevErrors) => [
    //     ...prevErrors,
    //     ...updatedSizeErrorFiles.map((file) => file.name),
    //   ]);
    // }
  };

  //   Delete from selected document
  const removeAllDocument = () => {
    deleteAllDocuments("applicationDocuments")
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
    deleteSingleDocument("applicationDocuments", itemId)
      .then(() => {
        console.log("Item deleted successfully from document data");
      })
      .catch((error) => {
        console.error("Failed to delete item from document data:", error);
      });

    getDocuments("applicationDocuments")
      .then((documents) => {
        setDocuments(documents);
        console.log(documents);
      })
      .catch((error) => {
        console.error("Failed to load documents from IndexedDB:", error);
      });
  };

  console.log(documents);

  useEffect(() => {
    getDocuments("applicationDocuments")
      .then((documents) => {
        setDocuments(documents);
        console.log(documents);
      })
      .catch((error) => {
        console.error("Failed to load documents from IndexedDB:", error);
      });
  }, [selectedDocFiles]);

  // const currentDocuments = documents?.find((doc) => doc.name === selectedDoc);

  // useEffect(() => {
  //   setFiles((prevState) => {
  //     return { ...prevState, [selectedDoc]: selectedDocFiles };
  //   });
  // }, [selectedDocFiles]);

  // useEffect(() => {
  //   const storedFiles = JSON.parse(localStorage.getItem(selectedDoc)) || [];
  //   setSelectedDocFiles(storedFiles);
  // }, [selectedDoc]);

  // // fetch files from localstorage whenever it changes
  // useEffect(() => {
  //   const storedDocuments = localStorage.getItem("documents");
  //   if (storedDocuments) {
  //     setFiles(JSON.parse(storedDocuments));
  //   }
  // }, []);

  // // Save form files to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem(
  //     "documents",
  //     JSON.stringify({ ...files, [selectedDoc]: selectedDocFiles })
  //   );
  // }, [files]);

  const previewForm = () => {
    router.push(`/user/application-type/${applicationId}/preview`);
  };

  const addedDocs = JSON.parse(localStorage.getItem("documents"));

  const documentsEmpty =
    documents?.length === 0
      ? true
      : documents?.length !== generatedDocuments?.length;
  // console.log(documentsNotEmpty);
  console.log(currentDocuments);

  useEffect(() => {
    if (isDraftSuccess) {
      console.log(draftData);
      router.push(`/user/drafts`);
      // Transfer all curent application documents to draft documents when save as draft is triggered
      transferDocuments(applicationId, documents)
        .then(() => {
          console.log("Documents transfer successfull");
        })
        .catch((error) => {
          console.error("Failed to transfer documents data:", error);
        });
      // delete all application documents after transfer
      deleteAllDocuments("applicationDocuments")
        .then(() => {
          console.log("All documents deleted successfully");
          // Optionally, update the state or perform any other actions after deletion
        })
        .catch((error) => {
          console.error("Failed to delete all documents:", error);
        });
    }
  }, [isDraftSuccess]);

  const createDraft = async () => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    const payload = {
      form_id: applicationId,
      data: storedFormData,
    };
    await createNewDraft(payload);
  };

  return (
    <>
      {isDraftLoading && <SaveDraftLoader />}
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
                  Please add all required documents
                </p>
              </div>
            </div>
            <div className="flex justify-auto mx-auto">
              <FPI length={4} shade={4} />
            </div>
            <div className="bg-white w-full shadow-md rounded-md space-y-6 p-6 h-fit">
              <div className="flex items-center gap-1">
                <h1 className="text-[#46B038] font-bold">
                  APPLICATION DETAILS:
                </h1>
                <span className="font-semibold text-gray-500">
                  {applicationId}
                </span>
              </div>
              <div className="grid lg:grid-cols-[3fr_7fr] grid-cols-1 gap-4">
                <div className="bg-gray-100 space-y-3 px-3 py-2 text-[#0F5805] rounded-md text-sm">
                  {generatedDocuments?.map((doc) => {
                    // const filledDoc =
                    //   documents.find((current) => doc.name === selectedDoc)?.data
                    //     ?.length !== 0;
                    return (
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
                        {/* {filledDoc && (
                        <span className="flex items-center justify-center rounded-full bg-[#69CB5C] w-4 h-4">
                          {Check}
                        </span>
                      )} */}
                        {doc?.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="w-full space-y-5">
                  <Drop
                    documentName={selectedDoc}
                    onChange={handleFileChange}
                  />
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
                      onClick={createDraft}
                      className="px-4 py-2 border border-[#46B038] text-gray-600 rounded-md hover:opacity-70"
                    >
                      Save as Draft
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
    </>
  );
};

export default WithAuth(Documents);
