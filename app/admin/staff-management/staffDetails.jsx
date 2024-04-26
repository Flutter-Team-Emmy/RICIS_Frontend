"use client";

import DeleteStaff from "@/components/modals/DeleteStaff";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const StaffDetails = () => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

  const router = useRouter();
  const params = useParams();
  const staffId = params.staffId;

  return (
    <>
      {displayDeleteModal && <DeleteStaff setDisplayDeleteModal={setDisplayDeleteModal} />}
      <div>
        <div className="w-full lg:flex justify-between pb-8">
          <div>
            <h1 className="text-black font-bold text-lg">Staff Profile</h1>
            <p className="text-gray-600 text-sm">
              view staff account details below
            </p>
          </div>
          <div className="flex gap-x-8 pt-8 lg:pt-20">
            <button
              onClick={() =>
                router.push(`/admin/staff-management/${staffId}/edit`)
              }
              className="bg-[#46B038] shadow-sm rounded-md text-sm text-white py-2 px-6"
            >
              Edit
            </button>
            <button onClick={() => setDisplayDeleteModal(true)} className="bg-[#F0F2F2] shadow-sm rounded-md flex gap-x-4 px-6 py-2">
              <img
                className="w-4 h-4"
                src="/images/deleteStaffIcon.svg"
                alt=""
              />
              <p className="font-medium text-sm">Delete staff</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-4 gap-x-8">
          <div className="relative flex space-x-4 items-center py-4 px-2 bg-[#3361FF] bg-opacity-40">
            <img
              className="w-8 h-8 rounded-full"
              src="/images/user.jpg"
              alt=""
            />
            <div>
              <p className="text-sm">Esther Bassey</p>
              <p className="text-sm">Staff Name</p>
            </div>
            <img className="w-4 h-4" src="/images/userIcon.svg" alt="" />
          </div>

          <div className="relative flex space-x-4 items-center py-4 px-2 bg-[#46B038] bg-opacity-30">
            <img className="w-6 h-6" src="/images/emailIcon.svg" alt="" />
            <div>
              <p className="text-sm">basseyesther@gmail.com</p>
              <p className="text-sm">Staff Email</p>
            </div>
          </div>

          <div className="relative flex space-x-4 items-center py-4 px-2 bg-[#C40E0E] bg-opacity-20">
            <img className="w-6 h-6" src="/images/fingerprintIcon.svg" alt="" />
            <div>
              <p className="text-sm">EAD1234567890</p>
              <p className="text-sm">Staff ID</p>
            </div>
          </div>

          <div className="relative flex space-x-4 items-center py-4 px-2 bg-[#EABD52] bg-opacity-20">
            <img className="w-6 h-6" src="/images/calenderIcon.svg" alt="" />
            <div>
              <p className="text-sm">20th Sept 2023</p>
              <p className="text-sm">Staff Creation Date</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDetails;
