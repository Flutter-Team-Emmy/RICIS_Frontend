import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Modal = ({ handleStatBtn, text, btnLoader, handleClose }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-content")) {
      handleClose();
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center modal-content"
        onClick={handleModalClick}
      >
        <div className="bg-white p-4 rounded shadow-md md:w-[350px]">
          <p className="text-lg font-semibold mb-2 text-center">
            You are about to {text} the staff user account
          </p>
          <p className="mb-8 text-center">
            This action can not be undone.Are you sure you want to continue?
          </p>
          <div className="flex justify-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
              onClick={handleClose}
            >
              No, Cancel
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
              onClick={() => {
                handleStatBtn();
              }}
            >
              {btnLoader ? <ClipLoader color="#000" size={25} /> : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
