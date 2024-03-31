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

const Page = () => {
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
      toast.error("Enter valid otp codes!", { autoClose: 2000 });
      return;
    }
    await verifyOTP(payload);
  };

  useEffect(() => {
    if (error) {
      const err = normalizeErrors(error);
      toast.error(err, { autoClose: 2000 });
    }
    if (isSuccess) {
      toast.success(data?.message, { autoClose: 2000 });
      router.push(`/create-account?email=${email}&otp=${otp}`);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (token) {
      router.replace("/user");
    }
  }, [token]);

  return (
    <FormLayout>
      <div className="w-[60%] mx-auto max-w-[440px]">
        <FPI length={3} shade={2} />

        <div className="bg-white rounded-[12px] py-[3rem] px-[3.5rem] border border-[#E6E8EC] mt-[1.5rem]  ">
          <h1 className="formHeader">Verification Code</h1>

          <div>
            <h2 className="inter500 text-[14px] text-[#8D8D8D] leading-[21px] mb-[4px] ">
              OTP
            </h2>
            <div className="flex space-x-[12px]">
              {otpNumbersFields.map((field) => (
                <input
                  key={field.id}
                  type="text"
                  value={formData[field.name]}
                  onChange={handleChange}
                  name={field.name}
                  className="w-[75px] h-[52px] outline-none border-[2px] rounded-[4px] border-[#F0F0F0] p-4 text-center font-semibold text-xl "
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
              Already have an account? <Link href="/login">Sign In </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default Page;
