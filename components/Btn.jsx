import React from "react";
import { ClipLoader, FadeLoader } from "react-spinners";

const Btn = ({ text, disabled, handleClick, loading, loadingMsg }) => {
  return (
    <button
      className={`py-2 px-[1.725rem] h-10 cursor-pointer flex items-center justify-center ${
        disabled ? "bg-gray-200" : "bg-[#3361FF] "
      } rounded-[4px]`}
      onClick={handleClick}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex items-center gap-4">
          <ClipLoader color="#fff" size={25} />
          <span className="text-white text-sm">{loadingMsg}</span>
        </div>
      ) : (
        <h1
          className={`sf600 text-[0.825rem] leading-[21px] text-center ${
            disabled ? "text-gray-500" : "text-white"
          } `}
        >
          {text}
        </h1>
      )}
    </button>
  );
};

export default Btn;
