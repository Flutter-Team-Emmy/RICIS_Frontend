"use client";

import { useSearchParams } from "next/navigation";
import ApplicationRejected from "./Rejected";
import ApplicationApproved from "./Approved";


const ApplicationFormDetailsSuspenseBoundary = () => {
  const params = useSearchParams();
  const applicationStatus = params.get("status");

  if (applicationStatus.toLocaleLowerCase() === "rejected") {
    return <ApplicationRejected />;
  }

  if (applicationStatus.toLocaleLowerCase() === "approved") {
    return <ApplicationApproved />;
  }
};

export default ApplicationFormDetailsSuspenseBoundary;
