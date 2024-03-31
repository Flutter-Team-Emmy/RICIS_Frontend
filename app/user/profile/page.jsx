"use client";
import { useEffect } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useGetCurrentUserQuery } from "@/store/api/userApi";
import { userBioData } from ".";
import useForm from "@/hooks/useForm";
import TextInput from "@/components/TextInput";
import Btn from "@/components/Btn";
import { useUpdateUserBioDataMutation } from "@/store/api/userApi";
import { normalizeErrors } from "@/utils/helpers";
import { validator } from "@/utils/validator";
import { toast } from "react-toastify";
import TextFieldSkeleton from "@/components/skeleton-loaders/TextFieldSkeleton";

const InitialData = {
  first_name: "",
  company_name: "",
  company_location: "",
  last_name: "",
  company_role: "",
  address: "",
  phone: "",
};

const Profile = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data,
    refetch: refetchUser,
  } = useGetCurrentUserQuery();
  const currentUser = data?.data;
  const btnIsdisabled = validator.atLeastOneValueNotEmpty(formData);

  const [
    updateUserBioData,
    {
      isLoading: isUpdatingBioData,
      isError: isBioError,
      error: bioError,
      data: bioData,
      isSuccess: isUpdated,
    },
  ] = useUpdateUserBioDataMutation();

  const updateBio = async () => {
    await updateUserBioData(formData);
  };

  useEffect(() => {
    if (error) {
      const err = normalizeErrors(error);
      toast.error(err, { autoClose: 2000 });
    }
    if (isUpdated) {
      toast.success("Bio data updated successfully", { autoClose: 2000 });
      refetchUser();
      setFormData(InitialData);
    }
  }, [isUpdated]);

  return (
    <DashboardLayout
      header={
        isSuccess
          ? currentUser?.user.first_name + " " + currentUser?.user.last_name
          : ""
      }
    >
      <div className="w-full pb-8">
        <h1 className="text-black font-bold text-2xl">User Profile</h1>
        <p className="text-gray-600 text-sm">
          view all user account details below
        </p>
      </div>
      <div className="bg-white rounded-lg pl-6 pb-6">
        <h1 className="text-[#46B038] font-bold pt-4 pb-6">USER DETAILS:</h1>
        <div className="w-full space-y-6">
          <div className="space-y-6 w-1/2">
            {isSuccess &&
              userBioData.map((bio_data, index) => (
                <TextInput
                  key={bio_data.id}
                  label={bio_data.label}
                  placeholder={currentUser?.user[bio_data.name]}
                  type={bio_data.type}
                  value={formData[bio_data.name]}
                  handleChange={handleChange}
                  name={bio_data.name}
                  disabled={bio_data.type === "email"}
                />
              ))}
            {(isLoading || !data) &&
              [1, 2, 3, 4, 5, 6, 7, 8].map((loader) => (
                <TextFieldSkeleton key={loader} />
              ))}
          </div>
          <div className="flex items-center gap-4">
            {/* <Btn text="cancel" bgColorClass="bg-gray-500"></Btn> */}
            <Btn
              text="Save changes"
              loading={isUpdatingBioData}
              loadingMsg="saving.."
              handleClick={updateBio}
              disabled={btnIsdisabled}
            ></Btn>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
