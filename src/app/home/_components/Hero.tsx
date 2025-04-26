import Image from "next/image";
import React from "react";
import Logo2 from "@/assets/img/logo2.png";
const Hero = () => {
  return (
    <div className="h-screen bghero flex rounded-b-4xl items-center justify-center text-white">
      <div className=" lg:w-2/3 w-full  lg:px-0 flex flex-col items-center  relative">
        <Image
          src={Logo2}
          alt="logo"
          width={250}
          height={250}
          className="lg:w-2/4 w-3/4"
        />
        <h2 className="absolute w-[60vw] -bottom-[2vw] right-[2vw] text-[3vw] lg:w-[25vw] lg:text-[1vw] lg:right-[12vw]  lg:bottom-[2vw]">
          Setor limbah. Belanja kompos. Tanam harapan. Composite, karena bumi
          butuh kita semua.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
