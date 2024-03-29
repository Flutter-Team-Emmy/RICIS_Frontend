"use client";

import useForm from "@/hooks/useForm";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import ApplicationForm from "./ApplicationForm";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ApplicationDetails from "./ApplicationDetails";
import { useGetFormsQuery } from "@/store/api/applicationApi";
import { Suspense } from "react";

const initialFormData = {
  application_type: "",
};

const NewApp = () => {
  const param = useSearchParams();
  const fieldId = param.get("formId");
  const { isLoading, isSuccess, isError, error, data } = useGetFormsQuery();
  const { formData, handleChange, setFormData } = useForm(initialFormData);
  const forms = data?.data.forms;
  const selectedFormId = forms?.find(
    (form) => form.name === formData.application_type
  )?.id;
  const pathname = usePathname();
  const router = useRouter();

  const proceedToNextStep = () => {
    if (!formData.application_type) {
      toast("Select a field to proceed!", { autoClose: 3000 });
      return;
    }
    router.push(`${pathname}?formId=${selectedFormId}`);
  };

  if (!fieldId) {
    return (
      <DashboardLayout header="Dashboard" icon="">
        <div className="space-y-10 w-full">
          <ApplicationDetails
            isLoading={isLoading}
            isSuccess={isSuccess}
            forms={forms}
            proceedToNextStep={proceedToNextStep}
            formData={formData}
            handleChange={handleChange}
          />
        </div>
      </DashboardLayout>
    );
  }

  if (fieldId) {
    return (
      <DashboardLayout header="Dashboard" icon="">
        <div className="space-y-10 w-full">
          <Suspense>
            <ApplicationForm />
          </Suspense>
        </div>
      </DashboardLayout>
    );
  }
};

export default NewApp;
