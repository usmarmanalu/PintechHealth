/* eslint-disable no-unused-vars */
import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12
    lg:px-24 xl-px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img className="w-20" src={assets.trusted} alt="" />
        <p className="text-xs font-medium">Dipercaya oleh Mitra Kami</p>
      </motion.div> */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="
    max-w-5xl
    text-4xl
    sm:text-5xl
    md:text-6xl
    xl:text-[84px]  
    font-medium
    xl:leading-[95px]
  "
      >
        Solusi Digital{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          Terintegrasi
        </span>{" "}
        untuk Klinik dan Rumah Sakit.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-full sm:max-w-2xl lg:max-w-3xl pb-3"
      >
        Kami berfokus pada pengembangan sistem informasi manajemen klinik dan rumah sakit yang terintegrasi untuk mendukung operasional layanan kesehatan yang lebih efisien, akurat, dan andal.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        div
        className="relative"
      >
        <img src={assets.bgPintech} alt="" className="w-full max-w-6xl rounded-3xl" />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 
    sm:-top:-100 sm:-right-70 -z-1 dark:hidden"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
