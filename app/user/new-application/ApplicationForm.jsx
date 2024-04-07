"use client";

import {
  useAddNewApplicationMutation,
  useGetSingleFormFieldsQuery,
} from "@/store/api/applicationApi";
import { useEffect, useState } from "react";
import InputField from "./InputField";
import { useRouter, useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/helpers";
import Pagination from "@/components/Pagination";
import TextFieldSkeleton from "@/components/skeleton-loaders/TextFieldSkeleton";
import Btn from "@/components/Btn";
import useForm from "@/hooks/useForm";
import { validator } from "@/utils/validator";
import { toast } from "react-toastify";
import { normalizeErrors } from "@/utils/helpers";
import PaymentModal from "@/components/modals/paymentModal";

const ApplicationForm = () => {
  const param = useSearchParams();
  const router = useRouter();
  const formId = param.get("form_id");
  const currentPageNum = param.get("page");
  const { isLoading, isSuccess, isError, error, data } =
    useGetSingleFormFieldsQuery(formId);
  const fields = data?.data.fields;
  console.log(fields);
  const total_pages = data?.data.total_pages;
  const [
    addNewApplication,
    {
      isLoading: isApplicationLoading,
      isSuccess: isApplicationSuccess,
      error: applicationError,
      data: newApplication,
    },
  ] = useAddNewApplicationMutation();
  console.log(newApplication);

  let InitialData = {};

  useEffect(() => {
    const createInitialObject = () => {
      if (fields?.length !== 0) {
        fields?.forEach((field) => {
          InitialData[field?.name] = "";
        });
      }
      return InitialData;
    };
    if (fields?.length !== 0) {
      InitialData = createInitialObject();
      // Update formData directly when InitialData changes
      setFormData(InitialData);
    }
  }, [fields]);

  const { formData, setFormData, handleChange } = useForm(InitialData);
  console.log(formData);

  const invalidFields = validator.whiteSpaces(formData);

  const createNewApplication = async () => {
    if (invalidFields) {
      toast.warning("Fill in all fields correctly!", { autoClose: 2000 });
      return;
    }
    const payload = { form_id: formId, as_draft: false, data: formData };
    console.log(payload);
    await addNewApplication(payload);
  };

  useEffect(() => {
    if (isApplicationSuccess) {
      router.push("/user/applications");
    }
  }, [router, isApplicationSuccess]);

  console.log(applicationError);

  useEffect(() => {
    if (applicationError) {
      const err = normalizeErrors(applicationError);
      toast.error(err, { autoClose: 2000 });
    }
    if (isApplicationSuccess) {
      toast.success("Successfully created application form!", {
        autoClose: 2000,
      });
    }
  }, [isApplicationSuccess, applicationError, InitialData, setFormData]);

  // get inputfields for currentpage
  const currentPage = fields?.filter((field) => {
    if (!currentPageNum) {
      return +field.page === 1;
    } else {
      return +field.page === +currentPageNum;
    }
  });

  console.log(data);

  return (
    <>
      <PaymentModal />
      <div className="w-full">
        <div className="flex justify-between items-center w-[95%] m-auto pb-8">
          <div className="">
            <h1 className="text-black font-bold">NEW APPLICATION</h1>
            <p className="text-gray-600 text-sm">
              Please fill all information correctly
            </p>
          </div>
          <Pagination
            totalPages={total_pages}
            form_Id={formId}
            currentPageNum={currentPageNum}
          />
        </div>
        <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6">
          <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS</h1>
          <form className="">
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3 md:grid-cols-2 align-items-center gap-y-8 w-full">
                {isSuccess &&
                  currentPage?.map((field) => (
                    <div key={field.id} className="w-full">
                      <label
                        className="block mb-3 font-medium max-w-[17rem]"
                        htmlFor={field.name}
                      >
                        {capitalizeFirstLetter(field.name)}
                      </label>
                      {field.type === "LONG_TEXT" ? (
                        <textarea
                          className="border boder-gray-200 outline-none p-3 "
                          name={field.name}
                          placeholder={`Enter ${field.name}`}
                          value={formData[field.name]}
                          onChange={handleChange}
                        ></textarea>
                      ) : field.type.toLowerCase() === "file" ? (
                        <input
                          type="file"
                          name={field.name}
                          required
                          onChange={handleChange}
                        />
                      ) : (
                        <InputField
                          id={field.id}
                          type={field?.type.toLowerCase()}
                          required={field.required}
                          name={field.name}
                          placeholder={`Enter ${capitalizeFirstLetter(
                            field.name
                          )}`}
                          handleChange={handleChange}
                          value={formData[field.name]}
                        />
                      )}
                    </div>
                  ))}
                {(isLoading || !data) &&
                  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((loader) => (
                    <TextFieldSkeleton key={loader} />
                  ))}
              </div>
            </div>
            <div className="flex gap-x-2 mt-8">
              <Btn
                text="save as daft"
                loadingMsg="saving to draft..."
                // loading={isApplicationLoading}
                // handleClick={createNewApplication}
                bgColorClass="bg-[#46B038]"
              />
              <Btn
                text="save and continue"
                loadingMsg="submitting..."
                loading={isApplicationLoading}
                handleClick={createNewApplication}
                disabled={invalidFields}
                bgColorClass="bg-[#46B038]"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
