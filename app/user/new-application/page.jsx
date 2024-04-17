"use client";
import { Suspense } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ApplicationForm from "./ApplicationForm";
import WithAuth from "@/components/withAuth";
import { Checkbox } from "@/components/ui/checkbox";
import Btn from "@/components/Btn";
import FPI from "../FPI";
import { useRouter } from "next/navigation";

const pagination = "<1/12 Pages >";

const initialFormData = {
  application_details: "",
};

const categories = [
  {
    id: "c1",
    text: "Personnel Certification",
  },
  {
    id: "c2",
    text: "Millitary Certification",
  },
  {
    id: "c3",
    text: "ACSES Certification",
  },
  {
    id: "c4",
    text: "Personnel Certification",
  },
  {
    id: "c5",
    text: "Personnel Certification",
  },
];

const NewApplication = () => {
  const router = useRouter();

  const navigateToNextStep = () => {
    router.push("/user/application-type");
  };

  return (
    <DashboardLayout header="New Application" icon="">
      <div className="space-y-4 w-full">
        <div className="">
          <h1 className="font-semibold text-lg">New Application</h1>
          <p className="text-sm">Select your preferred application category</p>
        </div>
        <div className="flex justify-center mx-auto">
          <FPI length={4} shade={1} />
        </div>
        <div className="w-full bg-white p-6 shadow-md rounded-md space-y-8 h-screen">
          <h2 className="text-[#46B038] text-medium font-medium">
            APPLICATION DETAILS
          </h2>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-500">Categories</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center gap-4">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Btn
            handleClick={navigateToNextStep}
            bgColorClass="bg-[#46B038]"
            text="Next"
            disabled={false}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(NewApplication);
