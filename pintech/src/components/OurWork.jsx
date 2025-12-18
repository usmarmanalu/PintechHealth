import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "SIM KLINIK",
      desc: "SIM KLINIK adalah sistem informasi terintegrasi yang dirancang untuk membantu klinik dan rumah sakit dalam mengelola seluruh proses pelayanan kesehatan, mulai dari pendaftaran pasien hingga rekam medis elektronik. Dengan tampilan modern dan alur kerja yang praktis, SIM KLINIK mendukung operasional yang lebih cepat, efisien, dan minim kesalahan.",
      image: assets.sim_klinik,
    },

    {
      title: "RIS-PACS",
      desc: "Mendukung pemeriksaan radiologi dan USG yang terintegrasi dengan PACS sebagai pengganti X-Ray Viewer, sehingga pengelolaan citra medis dapat dilakukan secara digital, efisien, dan terpusat.",
      image: assets.pacs,
    },

    {
      title: "LIS",
      desc: "Mendukung layanan pemeriksaan laboratorium yang terintegrasi dengan perangkat medis di rumah sakit dan klinik, sehingga memastikan proses pemeriksaan yang cepat, akurat, dan efisien.",
      image: assets.lis,
    },

     {
      title: "Antrian Online",
      desc: "Integrasi sistem RS dengan BPJS meliputi Anjungan Mandiri, Display, serta sistem antrean terpusat untuk layanan Pendaftaran, Farmasi, dan Poli.",
      image: assets.antrian,
    },

     {
      title: "Website Klinik & Rumah Sakit",
      desc: "Website company profile untuk RS/Klinik yang berfungsi sebagai media promosi, berisi halaman- halaman informatif yang mencakup daftar produk, layanan, serta berbagai informasi penting lainnya.",
      image: assets.website,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Produk Kami"
        desc="Kami menghadirkan rangkaian sistem dan solusi digital terintegrasi untuk mendukung operasional klinik dan rumah sakit secara efisien, aman, dan sesuai standar layanan kesehatan."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 transition-all duration-500 cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
