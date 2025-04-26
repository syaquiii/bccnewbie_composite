"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="aboutus min-h-[20rem] py-24 lg:py-40">
      <div className="text-center mycontainer px-4">
        <motion.h1
          className="lg:text-3xl text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tentang Kami
        </motion.h1>

        <motion.p
          className="text-sm text-justify lg:text-lg lg:text-center font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Composite hadir sebagai platform jual beli online yang bukan cuma soal
          transaksi, tapi juga transformasi. Kami percaya bahwa limbah bukan
          akhir dari segalanya—ia adalah awal dari sesuatu yang lebih baik. Di
          Composite, kamu bisa belanja kebutuhan sehari-hari sekaligus
          menyetorkan limbah organik yang akan kami olah menjadi pupuk
          berkualitas. Kami menghubungkan konsumen, petani, dan pejuang
          lingkungan dalam satu ekosistem digital yang berkelanjutan. Bersama,
          kita bisa ciptakan bumi yang lebih hijau, satu transaksi kecil dengan
          dampak besar.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;
