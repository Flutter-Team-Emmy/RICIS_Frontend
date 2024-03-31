"use client";

import { Suspense } from "react";
import SignInSuspenseBoundary from "./SignInSuspenseBoundary";

const SignIn = () => {
  return (
    <Suspense>
      <SignInSuspenseBoundary />
    </Suspense>
  );
};

export default SignIn;
