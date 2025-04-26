import Image from "next/image";
import React from "react";
import Logo2 from "@/assets/img/logo2.png";
import Maskot from "@/assets/img/maskot.png";
const Hero = () => {
  return (
    <div className="h-screen bghero rounded-b-4xl flex items-center  text-white">
      <div className="flex h-screen flex-col items-center lg:flex-row justify-between mycontainer">
        <div className=" lg:w-1/2 w-full  lg:px-0 flex flex-col items-center  relative">
          <Image
            src={Logo2}
            alt="logo"
            width={300}
            height={300}
            className="lg:w-4/4 w-4/4 mt-[40vh] lg:mt-0"
          />
        </div>
        <Image
          className=" lg:w-1/3 w-full"
          src={Maskot}
          alt="logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Hero;
