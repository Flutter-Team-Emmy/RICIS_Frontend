"use client";

import { useEffect } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import WithAuth from "@/components/withAuth";
import FPI from "../../FPI";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useParams, useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/helpers";
import useForm from "@/hooks/useForm";

const form = [
  {
    id: "f1",
    name: "first_name",
    placeholder: "first name",
    type: "text",
  },
  {
    id: "f2",
    name: "last_name",
    placeholder: "last name",
    type: "text",
  },
  {
    id: "f3",
    name: "classification",
    placeholder: "classification",
    type: "text",
  },
  {
    id: "f4",
    name: "topic",
    placeholder: "topic",
    type: "text",
  },
  {
    id: "f5",
    name: "email",
    placeholder: "email",
    type: "email",
  },
  {
    id: "f6",
    name: "tel_Phone",
    placeholder: "phone",
    type: "text",
  },
];

const InitialData = {
  first_name: "",
  last_name: "",
  classification: "",
  topic: "",
  email: "",
  tel_phone: "",
};

const ApplicationDetails = () => {
  const router = useRouter();
  const params = useParams();
  const applicationId = params.applicationId;
  //   persist form data
  const initializer = () =>
    JSON.parse(localStorage.getItem("formData")) || InitialData;
  const { formData, setFormData, handleChange } = useForm(initializer);

  const navigateToNextStep = () => {
    router.push(`/user/application-type/${applicationId}/documents`);
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <DashboardLayout header="Application Details" icon="">
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
          <div className="flex justify-auto mx-auto">
            <FPI length={4} shade={3} />
          </div>
          <div className="bg-white w-full shadow-md rounded-md space-y-16 p-6 h-fit">
            <div className="flex items-center gap-2">
              <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS:</h1>
              <span className="">{applicationId}</span>
            </div>
            <div className="grid grid-cols-2 gap-y-8">
              {form.map((item) => (
                <div
                  key={item.id}
                  className="grid w-full max-w-sm items-center gap-2"
                >
                  <Label htmlFor={item.name}>
                    {capitalizeFirstLetter(item.name.split("_").join(" "))}
                  </Label>
                  <Input
                    type={item.type}
                    id={item.id}
                    placeholder={item.placeholder}
                    name={item.name}
                    onChange={handleChange}
                    value={formData[item.name]}
                  />
                </div>
              ))}
            </div>
            <div className="space-x-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:opacity-70"
              >
                Back
              </button>
              <button
                type="button"
                onClick={navigateToNextStep}
                className="px-6 py-2 bg-[#46B038] hover:opacity-70 text-white rounded-md"
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

export default WithAuth(ApplicationDetails);
