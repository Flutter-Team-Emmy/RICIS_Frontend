"use client";
import Btn from "@/components/Btn";
import FPI from "@/components/FPI";
import FormLayout from "@/components/FormLayout";
import useForm from "@/hooks/useForm";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { validator } from "@/utils/validator";
import { useRouter } from "next/navigation";
import { useVerifyOTPMutation } from "@/store/api/authApi";
import { otpNumbersFields } from ".";
import { normalizeErrors } from "@/utils/helpers";
import { getToken } from "@/utils/authHelpers";

const InitialData = {
  first_number: "",
  second_number: "",
  third_number: "",
  fourth_number: "",
};

const VerifyOTPSuspenseBoundary = () => {
  const param = useSearchParams();
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const [verifyOTP, { isLoading, isSuccess, isError, error, data }] =
    useVerifyOTPMutation();
  const disableBtn = validator.whiteSpaces(formData);
  const router = useRouter();
  const email = param.get("email");
  const otp = Object.values(formData)
    .map((num) => num)
    .join("");
  const token = getToken();

  const handleVerifyOTP = async () => {
    const payload = { email, otp };
    if (!validator.validateOTPCode(otp)) {
      toast.error("Enter valid otp codes!", { autoClose: 10000 });
      return;
    }
    await verifyOTP(payload);
  };

  useEffect(() => {
    if (error) {
      const err = normalizeErrors(error);
      toast.error(err, { autoClose: 30000 });
    }
    if (isSuccess) {
      toast.success(data?.message, { autoClose: 7000 });
      router.push(`/create-account?email=${email}&otp=${otp}`);
    }
  }, [isSuccess, data?.message, email, error, otp, router]);

  useEffect(() => {
    if (token) {
      router.replace("/user");
    }
  }, [token, router]);

  return (
    <FormLayout>
      <div className="w-full lg:w-[35rem] mx-auto mt-8 px-4 space-y-8">
        <FPI length={3} shade={2} />

        <div className="bg-white rounded-[12px] py-[3rem] px-4 lg:px-8 border border-[#E6E8EC] space-y-4 lg:space-y-8 mt-[1.5rem]  ">
          <h1 className="text-lg font-semibold">Verification Code</h1>

          <div className="space-y-3">
            <h2 className=" text-md text-[#8D8D8D] ">OTP</h2>
            <div className="flex justify-center gap-x-2">
              {otpNumbersFields.map((field) => (
                <input
                  key={field.id}
                  type="text"
                  value={formData[field.name]}
                  onChange={handleChange}
                  name={field.name}
                  className="w-16 lg:w-24 h-16 lg:h-20 outline-none border-[2px] rounded-[4px] border-[#F0F0F0] p-1 text-center font-semibold text-xl "
                />
              ))}
            </div>
          </div>

          <div className="mt-[2.5rem] flex flex-col  space-y-[18px] w-full ">
            <Btn
              text="Next"
              handleClick={handleVerifyOTP}
              loading={isLoading}
              disabled={disableBtn}
              loadingMsg="Verifying..."
            />
            <h2 className="text-[12px] leading-[14px] text-[#3361FF] inter600 text-center ">
              <Link href="/signin">Already have an account? Sign In </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default VerifyOTPSuspenseBoundary;
