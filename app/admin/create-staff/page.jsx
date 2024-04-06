"use client";
import { baseUrl } from "@/lib/configs";
import { getToken } from "@/utils/authHelpers";
import axios from "axios";
import { useEffect, useState } from "react";

const {
  default: DashboardLayout,
} = require("@/components/layouts/DashboardLayout");

const CreateStaff = () => {
  const [form, setForm] = useState([]);
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

  useEffect(() => {
    fetchForm();
  }, []);

  const [checkedItems, setCheckedItems] = useState([]);

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
        <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6">
          <h1 className="text-[#46B038] font-bold">STAFF DETAILS</h1>
          <div className="lg:flex gap-x-6 items-center space-y-6">
            <form className="max-w-sm">
              <label htmlFor="applicationType" className="block mb-2 font-bold">
                Application Type
              </label>
              <select
                name="application_details"
                value=""
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select a Type</option>
                <option value="clearance">Clearance</option>
                <option value="oil_and_greasing_equipments_check">
                  Oil and greasing equipments check
                </option>
                <option value="suit_check">Suit check</option>
              </select>
            </form>
            <div>
              <p className="font-bold">Name</p>
              <input
                type="text"
                className="py-2 px-4 border-[1px] border-solid border-gray-300 rounded-lg"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <p className="font-bold">Email Address</p>
              <input
                type="text"
                className="py-2 px-4 border-[1px] border-solid border-gray-300 rounded-lg"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div className="space-y-4 w-[60%]">
            <h1 className="font-bold">Roles</h1>
            {form.length > 0 &&
              form.map((formObj) => (
                <div
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
          <div className="flex gap-x-4 w-full">
            <button className="rounded-md h-[50%] text-sm text-[#46B038] p-2 border-[1px] border-solid border-[#46B038]">
              Create & Suspend
            </button>
            <button className="text-sm bg-[#46B038] h-[50%] text-white py-2 px-4 w-fit rounded-md">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateStaff;
