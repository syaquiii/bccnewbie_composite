import React from "react";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="headerlimbah rounded-b-4xl py-16  ">
      <div className=" mycontainer text-dark font-bold min-h-[20rem] py-14 rounded-b-3xl flex flex-col justify-end items-start">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
