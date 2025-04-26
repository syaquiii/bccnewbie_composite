import React from "react";
import RegisterForm from "../_components/RegisterForm";

const page = () => {
  return (
    <div className="flex  flex-col mycontainer items-center justify-center ">
      <h4 className="text-left w-full text-4xl font-bold ">Daftar</h4>
      <span className="w-full text-left my-4 text-[#4B5563]">
        Transform Waste, Grow Worth.
      </span>
      <div className=" w-4/4 h-2/4  ">
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
