"use client";

import { layanankami } from "@/data/layanankami";
import React from "react";
import LayananKamiCard from "./LayananKamiCard";
import { motion } from "framer-motion";

const LayananKami = () => {
  return (
    <div className="aboutus min-h-[20rem] pb-20">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="text-center mb-20 lg:text-3xl text-4xl font-bold"
      >
        Layanan Kami
      </motion.h1>

      <div className="mycontainer gap-10 grid lg:grid-cols-2">
        {layanankami.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <LayananKamiCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LayananKami;
