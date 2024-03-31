"use client";
import Btn from "@/components/Btn";
import FPI from "@/components/FPI";
import FormLayout from "@/components/FormLayout";
import TextInput from "@/components/TextInput";
import useForm from "@/hooks/useForm";
import { useRequestRegistrationOTPMutation } from "@/store/api/authApi";
import { normalizeErrors } from "@/utils/helpers";
import { validator } from "@/utils/validator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getToken } from "@/utils/authHelpers";

const InitialData = {
  email: "",
};

const Page = () => {
  const router = useRouter();
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const [
    requestRegistrationOTP,
    { isLoading, isSuccess, isError, error, data },
  ] = useRequestRegistrationOTPMutation();
  const token = getToken();

  const handleRequestOTP = async () => {
    const emailIsInValid =
      !validator.validateEmail(formData.email) ||
      validator.whiteSpaces(formData);
    if (emailIsInValid) {
      toast.warning("Enter a valid email!", { autoClose: 2000 });
      return;
    }
    await requestRegistrationOTP(formData);
  };

  useEffect(() => {
    if (error) {
      const err = normalizeErrors(error);
      toast.error(err, { autoClose: 2000 });
    }
    if (isSuccess) {
      toast.success(data?.message, { autoClose: 1000 });
      router.push(`/verify-otp?email=${formData.email}`);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (token) {
      router.replace("/user");
    }
  }, [token]);

  return (
    <FormLayout>
      <div className="w-[60%] mx-auto max-w-[440px]">
        <FPI length={3} shade={1} />

        <div className="bg-white rounded-[12px] py-[3rem] px-[3.5rem] border border-[#E6E8EC] mt-[1.5rem]  ">
          <h1 className="formHeader">Sign up</h1>

          <TextInput
            label="Email"
            placeholder="Enter Email"
            type="text"
            value={formData.email}
            handleChange={handleChange}
            name="email"
          />

          <div className="mt-[2.5rem] flex flex-col  space-y-[18px] w-full ">
            <Btn
              text="Next"
              handleClick={handleRequestOTP}
              loading={isLoading}
              loadingMsg="requesting..."
              disabled={!formData.email}
            />
            <h2 className="text-[12px] leading-[14px] text-[#3361FF] inter600 text-center ">
              Already have an account? <Link href="/signin">Sign In </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default Page;
