'use client'
import React from "react";

const SubmitButton = ({text, pending, className, onClick}) => { 
  return (
    <button
      onClick={onClick}
      disabled={pending}
      className={`border disabled:cursor-not-allowed disabled:brightness-50 my-3 mt-6 p-[8px_20px] bg-transparent text-white border-white rounded hover:bg-[#63c34e] hover:text-black hover:border-transparent focus:border-transparent focus:bg-[#63c34e] focus:text-black transition ${className}`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
