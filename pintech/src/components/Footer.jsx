import React from "react";
import assets from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm::pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Footer Top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt=""
          />
          <p className="max-w-md">
            Solusi Digital Terintegrasi untuk Klinik dan Rumah Sakit.
          </p>

          <ul className="flex gap-8">
            <li>
              <a href="#hero" className="hover:text-primary">
                Beranda
              </a>
            </li>
            <li>
              <a href="#layanan-integrasi" className="hover:text-primary">
                Layanan Integrasi
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:text-primary">
                Produk
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:text-primary">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Berlangganan Newsletter Kami</h3>
          <p className="text-sm mt-2 mb-6">
            Tetap terhubung dengan kami untuk menerima pembaruan dan informasi
            terbaru seputar layanan kami.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 
                bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white px-6 rounded">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border border-gray-300 dark:border-gray-600 my-6" />

      {/* PSE Compliance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left py-6"
      >
        <img
          src={assets.pse}
          alt="Terdaftar PSE Komdigi"
          className="w-16 h-auto"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl">
          Terdaftar sebagai{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">
            Penyelenggara Sistem Elektronik (PSE)
          </span>{" "}
          pada Kementerian Komunikasi dan Digital (Komdigi) Republik Indonesia.
        </p>
      </motion.div>

      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright © 2025 Pintech Health. All rights reserved.</p>
        <div className="flex items-center gap-6">
          
          {/* Email */}
          <a
            href="mailto:pintechhealth@gmail.com"
            aria-label="Email"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition"
          >
            <img src={assets.gmail} alt="Email" className="w-5 h-5" />
            <span>pintechhealth@gmail.com</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/628132111686"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition"
          >
            <img src={assets.wa} alt="WhatsApp" className="w-5 h-5" />
            <span>+62 813-2111-686</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
