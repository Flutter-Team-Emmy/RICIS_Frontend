"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useSearchParams } from "next/navigation";
import useForm from "@/hooks/useForm";
import { useGetFormsQuery } from "@/store/api/applicationApi";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import WithAuth from "@/components/withAuth";

const initialFormData = {
  application_type: "",
};

const ApplicationDetails = () => {
  const { isLoading, isSuccess, isError, error, data } = useGetFormsQuery();
  const { formData, handleChange, setFormData } = useForm(initialFormData);
  const forms = data?.data.forms;
  const selectedFormId = forms?.find(
    (form) => form.name === formData.application_type
  )?.id;
  const router = useRouter();
  console.log(forms);

  const proceedToNextStep = () => {
    if (!formData.application_type) {
      toast("Select a field to proceed!", { autoClose: 3000 });
      return;
    }
    router.push(
      `/user/new-application/?form_id=${selectedFormId}`
    );
  };

  return (
    <DashboardLayout header="Application Details" icon="">
      <div className="space-y-10 w-full">
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
              <label
                htmlFor="applicationType"
                className="block mb-2 font-medium"
              >
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
                  forms.length !== 0 &&
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
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(ApplicationDetails);
