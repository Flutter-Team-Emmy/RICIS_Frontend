"use client";
import { Suspense } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ApplicationForm from "./ApplicationForm";
import WithAuth from "@/components/withAuth";

const pagination = "<1/12 Pages >";

const initialFormData = {
  application_details: "",
};

const NewApplication = () => {
  return (
    <DashboardLayout header="New Application" icon="">
      <div className="space-y-10 w-full">
        <Suspense>
          <ApplicationForm />
        </Suspense>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(NewApplication);
