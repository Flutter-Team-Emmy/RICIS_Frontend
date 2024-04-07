"use client";
import ApplicationStatus from "./ApplicationStatus";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DownloadIcon } from "@/svgs";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import Modal from "@/components/Modal";
import { getToken } from "@/utils/authHelpers";
import axios from "axios";
import Router from "next/router";
import { toast } from "react-toastify";
import { baseUrl } from "@/lib/configs";
import { useRouter, useSearchParams } from "next/navigation";

const ApplicationPending = ({ data }) => {
  const [rejectBtnLoader, setRejectBtnLoader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const params = useSearchParams();
  const [reason, setReason] = useState("");
  const applicationId = params.get("id");
  const type = params.get("type");
  const [btnLoad, setBtnLoad] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const router = useRouter();

  const handleApprove = async () => {
    setBtnLoad(true);
    try {
      const token = getToken();
      const fetchData = await axios.put(
        `${baseUrl}/application/${applicationId}`,
        {
          status: "APPROVED",
          status_reason: "Application completed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (fetchData) {
        setBtnLoad(false);
        window.location.href = "/admin/app-management";
        closeModal();
        toast.success("Account Approved Successfully", { autoClose: 2000 });
      }
    } catch (error) {
      console.log(error);
      setBtnLoad(false);
      toast.error(error.response?.data.error.message, { autoClose: 2000 });
    }
  };

  const handleReject = async () => {
    setBtnLoad(true);
    try {
      const token = getToken();
      const fetchData = await axios.put(
        `${baseUrl}/application/${applicationId}`,
        {
          status: "REJECTED",
          status_reason: reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (fetchData) {
        setBtnLoad(false);
        window.location.href = "/admin/app-management";
        closeModal();
        toast.success("Account Rejected Successfully", { autoClose: 2000 });
      }
    } catch (error) {
      console.log(error);
      setBtnLoad(false);
      toast.error(error.response?.data.error.message, { autoClose: 2000 });
    }
  };

  return (
    <DashboardLayout header="Application">
      <div className="lg:flex lg:justify-between w-[95%] pb-8">
        <div className="w-full pb-8">
          <h1 className="text-black font-bold text-2xl capitalize">
            Application <span className="text-yellow-400">Pending</span>
          </h1>
        </div>
        {/* <div className="lg:w-[30%]">
          <button className="flex items-center gap-1 text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md hover:opacity-70">
            <span className="">{DownloadIcon}</span>
            <span className="">Download Certificate</span>
          </button>
        </div> */}
      </div>
      <div className="bg-white rounded-md pt-8 pl-6 pb-6">
        {data ? (
          <ApplicationStatus data={data} type={type} />
        ) : (
          <div className="flex items-center justify-center h-[40vh] w-full  ">
            <ClipLoader color="#46B038" size={30} />
          </div>
        )}

        {!type && (
          <div className="flex gap-x-4 w-full lg:justify-start mt-8">
            <button
              className="rounded-md h-[50%] text-sm text-[#fff] p-2  bg-[#46B038]"
              onClick={() => {
                setStatus("APPROVED");
                openModal();
              }}
            >
              Approve
            </button>
            <button
              className="text-sm bg-red-500 h-[50%] text-white py-2 px-4 w-fit rounded-md"
              onClick={() => {
                setStatus("REJECTED");
                openModal();
                // setSaveBtnLoader(true);
              }}
            >
              {rejectBtnLoader ? (
                <ClipLoader color="#fff" size={25} />
              ) : (
                "Reject"
              )}
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <Modal
          handleClose={closeModal}
          type="pending"
          btnLoader={btnLoad}
          setReason={(re) => {
            setReason(re);
          }}
          handleStatBtn={
            status === "APPROVED"
              ? handleApprove
              : reason.trim() === ""
              ? () => {}
              : handleReject
          }
          text={status === "APPROVED" ? "approve" : "reject"}
        />
      )}
    </DashboardLayout>
  );
};

export default ApplicationPending;
