import React from "react";

// TODO: Need to have form sub & main color

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="relative my-11 mx-0">
      <input className="bg-white text-gray-400 text-lg py-[10px] pr-[10px] pl-[5px] block w-full border-none rounded-none border-b-2 border-b-solid border-b-gray-400 my-6 mx-0 focus:outline-none" />
      {/* TODO: Label Transition */}
      <label className="absolute left-1 top-[10px] text-base font-normal">
        {label}
      </label>
    </div>
  );
};

export default FormInput;
