"use client";

import { useGetSingleFormFieldsQuery } from "@/store/api/applicationApi";
import InputField from "./InputField";
import { useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/helpers";
import Pagination from "@/components/Pagination";

const ApplicationForm = () => {
  const param = useSearchParams();
  const formId = param.get("formId");
  const { isLoading, isSuccess, isError, error, data } =
    useGetSingleFormFieldsQuery(formId);
  const fields = data?.data.fields;
  const total_pages = data?.data.total_pages;

  return (
    <div>
      <div className="flex justify-between items-center w-[95%] m-auto pb-8">
        <div className="">
          <h1 className="text-black font-bold">NEW APPLICATION</h1>
          <p className="text-gray-600 text-sm">
            Please fill all information correctly
          </p>
        </div>
        <Pagination totalPages={total_pages} />
      </div>
      <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6">
        <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS</h1>
        <form className="">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 align-items-center gap-y-8 w-full">
              {isSuccess &&
                fields?.map((field) => (
                  <div className="w-full">
                    <label
                      className="block mb-3 font-medium"
                      htmlFor={field.name}
                    >
                      {capitalizeFirstLetter(field.name)}
                    </label>
                    <InputField
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={`Enter ${capitalizeFirstLetter(field.name)}`}
                    />
                  </div>
                ))}
              {(isLoading || !data) &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((loader) => (
                  <div className="w-full">
                    <span className="block mb-3 w-24 h-4 bg-gray-200 animate-pulse"></span>
                    <div
                      key={loader}
                      className="w-72 h-12 bg-gray-200 animate-pulse rounded-xl"
                    ></div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex gap-x-2 mt-8">
            <button className="bg-black px-4 py-2 text-white text-sm font-medium rounded-sm">
              Back
            </button>
            <button className="bg-[#46B038] px-4 py-2 text-white text-sm font-medium rounded-sm">
              Save and Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
