"use client";

import { useGetSingleFormFieldsQuery } from "@/store/api/applicationApi";
import InputField from "./InputField";
import { useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/helpers";
import Pagination from "@/components/Pagination";

const ApplicationForm = () => {
<<<<<<< HEAD
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
=======
    return (
        <div>
            <div className="w-[95%] m-auto pb-8">
                <h1 className="text-black font-bold">NEW APPLICATION</h1>
                <p className="text-gray-600 text-sm">Please fill all information correctly</p>
                <p className="text-sm text-gray-600 text-end pt-4">{pagination}</p>
            </div>
            <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6">
                <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS</h1>
                <form className=" ">
                    <div className="lg:flex gap-x-8 w-full lg:justify-around">
                        <div className="space-y-4 w-full pb-8">
                            <div className="">
                                <label for="applicationType" className="block mb-2 font-medium">Application Type</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-[90%] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected >Clearance</option>
                                    <option value="docs">Oil and greasing equipments check</option>
                                    <option value="exe">Suit check</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Union Certificate</label>
                                <button className="bg-gray-200 px-4 py-2 rounded-3xl text-sm">Choose File</button>
                            </div>
                        </div>

                        <div className="space-y-4 w-full pb-8">
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Union Certificate</label>
                                <button className="bg-gray-200 px-4 py-2 rounded-3xl text-sm">Choose File</button>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                        </div>

                        <div className="space-y-4 w-full pb-8">
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Union Certificate</label>
                                <button className="bg-gray-200 px-4 py-2 rounded-3xl text-sm">Choose File</button>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-2 mt-8">
                        <button className="bg-black px-4 py-2 text-white text-sm font-medium rounded-sm">Back</button>
                        <button className="bg-[#46B038] px-4 py-2 text-white text-sm font-medium rounded-sm">Save and Proceed</button>
                    </div>
                </form>
            </div>
>>>>>>> 83b35a0aedaa8a228603c151285f8625f5d3b47d
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
