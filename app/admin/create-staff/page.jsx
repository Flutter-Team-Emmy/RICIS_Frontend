"use client";
import WithAuth from "@/components/withAuth";
import { baseUrl } from "@/lib/configs";
import { getToken } from "@/utils/authHelpers";
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const {
  default: DashboardLayout,
} = require("@/components/layouts/DashboardLayout");

const CreateStaff = () => {
  const [form, setForm] = useState([]);
  const [btnLoad, setBtnLoad] = useState(false);

  const [formData, setFormData] = useState({
    is_admin: "",
    name: "",
    email: "",
  });

  const [checkedItems, setCheckedItems] = useState([]);

  const fetchForm = async () => {
    try {
      const token = getToken();
      const fetchData = await axios.get(`${baseUrl}/forms`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(fetchData);
      setForm(fetchData?.data?.data?.forms);
    } catch (error) {
      console.log(error);
    }
  };

  const createStaff = async () => {
    setBtnLoad(true);
    try {
      const token = getToken();
      const res = await axios.post(
        `${baseUrl}/staff`,
        {
          name: formData.name,
          email: formData.email,
          is_admin: formData.is_admin === "admin-staff" ? true : false,
          forms: checkedItems,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        console.log(res);
        toast.success(" created staff successfully", { autoClose: 2000 });
        setBtnLoad(false);
      }
    } catch (error) {
      setBtnLoad(false);
      console.log(error);
      toast.error(error.response.data.error.message, { autoClose: 2000 });
    }
  };

  useEffect(() => {
    fetchForm();
  }, []);

  const handleCheckboxChange = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems((prevIds) => prevIds.filter((prevId) => prevId !== id));
    } else {
      setCheckedItems((prevIds) => [...prevIds, id]);
    }
  };

  return (
    <DashboardLayout header="Admin">
      <div className="">
        <div className="w-[95%] m-auto pb-8">
          <h1 className="text-black font-bold text-xl">Create Staff</h1>
          <p className="text-gray-600 text-sm">
            create a staff by filling their information below
          </p>
        </div>
        <div className="bg-white min-w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6 w-fit">
          <h1 className="text-[#46B038] font-bold">STAFF DETAILS</h1>
          <div className="lg:flex gap-x-6 items-center flex-wrap space-y-6 ">
            <form className="max-w-sm">
              <label htmlFor="applicationType" className="block mb-2 font-bold">
                Staff Access
              </label>
              <select
                name="application_details"
                value={formData.is_admin}
                onChange={(e) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    is_admin: e.target.value,
                  }));
                }}
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected disabled>
                  Select the staff access
                </option>
                <option value="admin-staff">Admin Staff</option>

                <option value="Non-admin-staff">Non-admin Staff</option>
              </select>
            </form>
            <div>
              <p className="font-bold">Name</p>
              <input
                type="text"
                className="py-2 px-4 border-[1px] border-solid border-gray-300 rounded-lg"
                value={formData.name}
                onChange={(e) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  }));
                }}
                placeholder="Enter Name"
              />
            </div>
            <div>
              <p className="font-bold">Email Address</p>
              <input
                type="text"
                className="py-2 px-4 border-[1px] border-solid border-gray-300 rounded-lg"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
          <div className="space-y-4 w-[60%]">
            <h1 className="font-bold">Roles</h1>
            {form.length > 0 &&
              form.map((formObj, i) => (
                <div
                  key={i}
                  className="flex gap-x-2 text-sm items-center"
                  onClick={() => {
                    handleCheckboxChange(formObj.id);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems.some((id) => id === formObj.id)}
                    className=" appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
                    style={{
                      "--tw-ring-color": "transparent", // Optional: Remove focus ring
                    }}
                    onChange={() => handleCheckboxChange(formObj.id)}
                  />
                  <label htmlFor="">{formObj.name}</label>
                </div>
              ))}
          </div>
          <div
            className="flex gap-x-4 w-full cursor-pointer"
            onClick={() => {
              createStaff();
            }}
          >
            <button className="text-sm bg-[#46B038] h-[50%] text-white py-2 px-4 w-fit rounded-md flex items-center justify-center">
              {btnLoad ? (
                <ClipLoader color="#fff" size={20} />
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WithAuth(CreateStaff);
