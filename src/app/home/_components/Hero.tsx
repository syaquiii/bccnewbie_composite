"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Logo2 from "@/assets/img/logo2.png";
import Maskot from "@/assets/img/maskot.png";

const Hero = () => {
  return (
    <div className="h-screen bghero rounded-b-4xl flex items-center text-white">
      <div className="flex h-screen flex-col items-center lg:flex-row justify-between mycontainer">
        <motion.div
          className="lg:w-1/2 w-full lg:px-0 flex flex-col items-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={Logo2}
            alt="logo"
            width={300}
            height={300}
            className="lg:w-4/4 w-4/4 mt-[40vh] lg:mt-0"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/3 w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image src={Maskot} alt="maskot" width={400} height={400} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
