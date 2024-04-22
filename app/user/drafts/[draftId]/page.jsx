"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useGetSingleDraftQuery } from "@/store/api/applicationApi";
import { useParams, useRouter } from "next/navigation";
import FPI from "../../FPI";
import TextFieldSkeleton from "@/components/skeleton-loaders/TextFieldSkeleton";
import { validator } from "@/utils/validator";
import TextInput from "../../application-type/[applicationId]/TextInput";
import TextArea from "../../application-type/[applicationId]/TextArea";
import DatePicker from "../../application-type/[applicationId]/DatePicker";
import { FieldTypes } from "../../application-type/[applicationId]";
import useForm from "@/hooks/useForm";
import { useEffect } from "react";

const Draft = () => {
  const router = useRouter();
  const params = useParams();
  const param = params.draftId;
  const draftId = param.split("-")[0];
  const applicationId = param.split("-")[1];
  console.log(draftId);

  const { data, isLoading, isSuccess, refetch } =
    useGetSingleDraftQuery(draftId);
  const draft = data?.data.draft_application;

  const formFields = draft?.data?.filter(
    (field) => field?.form_field?.page === 1 || field?.form_field?.page === 2
  );

  // documents are on page 3 of fiels data
  const generatedDraftDocuments = draft?.data?.filter(
    (field) => field.form_field.page === 3
  );
  console.log(generatedDraftDocuments);

  useEffect(() => {
    if (generatedDraftDocuments?.length !== 0) {
      localStorage.setItem(
        "generatedDraftDocuments",
        JSON.stringify(generatedDraftDocuments)
      );
    }
  }, [draft]);

  let InitialData = {};
  // let fieldsInitialErrorStates = {};

  // auto generate form Fields object of dynamic form field
  useEffect(() => {
    const createInitialObject = () => {
      if (formFields?.length !== 0) {
        formFields?.forEach((field) => {
          InitialData[field?.form_field?.name] = field.value;
          // fieldsInitialErrorStates[field?.name] = false;
        });
        return InitialData;
      }
      return {};
    };
    if (formFields?.length !== 0) {
      const initialData = createInitialObject();
      setFormData(initialData);
    }
  }, [draft]);

  // persist form fields object
  const initializer = () =>
    JSON.parse(localStorage.getItem("draftFormData")) || InitialData;
  const { formData, setFormData, handleChange } = useForm(initializer);

  // fetch persisted data from local storage
  useEffect(() => {
    const storedFormData = localStorage.getItem("draftFormData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("draftFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    refetch();
  }, []);

  console.log(draft);

  const navigateToNextStep = () => {
    const id = `${draftId}-${applicationId}`;
    router.push(`/user/drafts/${id}/documents`);
  };

  const allfieldsNotFilled = validator.whiteSpaces(formData);

  return (
    <DashboardLayout header="Drafts" icon="">
      <div className="space-y- w-full">
        <div className="space-y-6">
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
          {/* <div className="flex justify-auto mx-auto">
            <FPI length={4} shade={3} />
          </div> */}
          <div className="bg-white w-full shadow-md rounded-md space-y-16 p-6 h-fit">
            <div className="flex items-center gap-2">
              <h1 className="text-[#46B038] font-bold">Draft's Form:</h1>
              <span className="">{draftId}</span>
            </div>
            <form
              autoComplete="off"
              className="grid lg:grid-cols-2 grid-cols-1 gap-y-8 lg:gap-y-10 w-full"
            >
              {isSuccess &&
                draft?.data?.map((field) => {
                  return field.form_field.type === "SHORT_TEXT" ||
                    field.form_field.type === "EMAIL" ||
                    field.form_field.type === "PHONE" ? (
                    <TextInput
                      key={field.id}
                      id={field.id}
                      type={FieldTypes[field.form_field.type]}
                      name={field.form_field.name}
                      onChange={handleChange}
                      value={formData[field.form_field.name]}
                      fieldCustomType={field.form_field.type}
                      // isValid={isValid}
                      // onFocus={}
                    />
                  ) : field.form_field.type === "LONG_TEXT" ? (
                    <TextArea
                      key={field.id}
                      id={field.id}
                      name={field.form_field.name}
                      onChange={handleChange}
                      value={formData[field.form_field.name]}
                      // isValid={isValid}
                    />
                  ) : field.form_field.type === "DATE" ? (
                    <DatePicker
                      key={field.id}
                      id={field.id}
                      name={field.form_field.name}
                      onChange={handleChange}
                      value={formData[field.form_field.name]}
                      // isValid={isValid}
                    />
                  ) : (
                    ""
                  );
                })}{" "}
              {(isLoading || !data) &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((loader) => (
                  <TextFieldSkeleton key={loader} />
                ))}
            </form>
            <div className="space-x-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:opacity-70"
              >
                Back
              </button>
              <button
                disabled={allfieldsNotFilled}
                type="button"
                onClick={navigateToNextStep}
                className="lg:px-8 px-6 py-2 bg-[#46B038] hover:opacity-70 text-white rounded-md disabled:cursor-not-allowed disabled:opacity-70"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Draft;
