"use client";
import Btn from "@/components/Btn";
import FormLayout from "@/components/FormLayout";
import TextInput from "@/components/TextInput";
import useForm from "@/hooks/useForm";
import { useSignInUserMutation } from "@/store/api/authApi";
import { VisibilityOff, PeopleIcon } from "@/svgs";
import { validator } from "@/utils/validator";
import Link from "next/link";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { normalizeErrors } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { setToken, setLoginTime } from "@/utils/authHelpers";

const InitialData = {
  email: "",
  password: "",
};

const Page = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const [signInuser, { isLoading, isSuccess, isError, error, data }] =
    useSignInUserMutation();
  const disableBtn = validator.whiteSpaces(formData);
  const router = useRouter();

  const handleSignIn = async () => {
    const IsInValid = validator.whiteSpaces(formData);
    const payload = { ...formData, as_staff: false };
    if (IsInValid) {
      toast.warning("Enter valid credentials!", { autoClose: 2000 });
      return;
    }
    await signInuser(payload);
  };

  useEffect(() => {
    // const { isErr, err } = normalizeErrors(data);
    // if (isErr) {
    //   toast.error(err, { autoClose: 3000 });
    // }
    if (isError) {
      toast.error(error?.message, { autoClose: 3000 });
    }

    if (isSuccess) {
      toast.success(data?.message, { autoClose: 1000 });
      router.replace("/user");
      setToken(data?.data?.token.token);
      setLoginTime();
    }
  }, [isSuccess, isError]);

  return (
    <FormLayout>
      <div className="w-[60%] mx-auto max-w-[440px]">
        <div className="bg-white rounded-[12px] py-[3rem] px-[3.5rem] border border-[#E6E8EC]  ">
          <h1 className="formHeader">Login</h1>

          <h2 className="inter500 text-[14px] leading-[21px] text-[#8D8D8D] mb-[12px] ">
            Login with the adjacent username and password field! The button only
            work with staff members.
          </h2>

          <div className="rounded-[8px] border-[2px] p-[1rem] flex space-x-[12px] border-[#3361FF] justify-center items-center mb-[1.5rem] ">
            <span>{PeopleIcon}</span>

            <h3 className="text-[#3361FF] inter500 text-[14px] leading-[21px] ">
              Login as staff member
            </h3>
          </div>

          <TextInput
            label="Email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            handleChange={handleChange}
            name="email"
          />

          <div className="flex flex-col items-end mt-[1.5rem] ">
            <TextInput
              label="Password"
              type="password"
              value={formData.password}
              handleChange={handleChange}
              placeholder="Enter Password"
              name="password"
              endIcon={VisibilityOff}
            />
            <h2 className="inter600 text-[12px] leading-[18px] text-[#0000008A] ">
              Forgot Password?
            </h2>
          </div>

          <div className="mt-[2.5rem] flex flex-col  space-y-[18px] w-full ">
            <Btn
              text="Login"
              handleClick={handleSignIn}
              loading={isLoading}
              disabled={disableBtn}
              loadingMsg="Hold on..."
            />
            <h2 className="text-[12px] leading-[14px] text-[#3361FF] inter600 text-center ">
              Dont have an account? <Link href="/signup">Sign up </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default Page;
