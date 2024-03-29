"use client";

import { useGetFormsQuery } from "@/store/api/applicationApi";
import Pagination from "@/components/Pagination";

const ApplicationDetails = ({
  forms,
  proceedToNextStep,
  handleChange,
  formData,
  setFormData,
  isLoading,
  isSuccess,
}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center w-[95%] m-auto pb-8">
        <div className="">
          <h1 className="text-black font-bold">NEW APPLICATION</h1>
          <p className="text-gray-600 text-sm">
            Please fill all information correctly
          </p>
        </div>
      </div>
      <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6">
        <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS</h1>
        <form className="max-w-sm">
          <label htmlFor="applicationType" className="block mb-2 font-medium">
            Application Type
          </label>
          <select
            onChange={handleChange}
            name="application_type"
            value={formData.application_type}
            id=""
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg lg:w-[70%] p-2.5"
          >
            <option selected className="">
              Select a Type
            </option>
            {isSuccess &&
              forms?.map((form) => (
                <option key={form.id} value={form.name}>
                  {form.name}
                </option>
              ))}
            {(isLoading || forms?.length === 0) &&
              [1, 2, 3, 4, 5].map((loader) => (
                <option
                  key={loader}
                  value={loader}
                  className="w-60 h-3 bg-gray-200 animate-pulse rounded-xl"
                ></option>
              ))}
          </select>
        </form>
        <button
          onClick={proceedToNextStep}
          className="bg-[#46B038] px-4 py-2 text-white text-sm font-medium rounded-md shadow-lg hover:bg-lime-700"
        >
          Save and Proceed
        </button>
      </div>
    </div>
  );
};

export default ApplicationDetails;
