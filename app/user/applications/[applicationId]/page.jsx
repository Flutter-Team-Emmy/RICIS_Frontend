"use client";

import { Suspense } from "react";
import ApplicationFormDetailsSuspenseBoundary from "./ApplicationFormDetailsSuspenseBoundary";

const ApplicationFormDetails = () => {
  return (
    <Suspense>
      <ApplicationFormDetailsSuspenseBoundary />
    </Suspense>
  );
};

export default ApplicationFormDetails;
