"use client"

import useForm from "@/hooks/useForm";
import useQueryString from "@/hooks/useQueryString";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ApplicationForm from "./ApplicationForm";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ApplicationDetails from "./ApplicationDetails";


const initialFormData = {
    application_details: ""
}

const NewApp = () => {
    const { createQueryString, param } = useQueryString();
    const { formData, handleChange, setFormData } = useForm(initialFormData);
    const pathname = usePathname();
    const router = useRouter();


    const proceedToNextStep = () => {
        if (!formData.application_details) {
            toast("Select a field to proceed!", { autoClose: 3000 });
            return;
        }
        router.push(pathname + "?" + createQueryString("tab", formData.application_details))
    }

    if (!param) {
        return (
            <DashboardLayout header="Dashboard" icon="">
                <div className="space-y-10 w-full">
                    <ApplicationDetails
                        proceedToNextStep={proceedToNextStep}
                        formData={formData}
                        setFormData={setFormData}
                        handleChange={handleChange} />
                </div>
            </DashboardLayout>
        )
    }

    if (param) {
        return (
            <DashboardLayout header="Dashboard" icon="">
                <div className="space-y-10 w-full">
                    <ApplicationForm />
                </div>
            </DashboardLayout>
        )
    }
};

export default NewApp;