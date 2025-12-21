/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
      >
        {/* LOGO */}
        <a href="/" className="cursor-pointer">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-40"
            alt="Logo"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden sm:flex items-center gap-5 text-gray-700 dark:text-white sm:text-sm">
          <a href="#" className="hover:border-b">
            Beranda
          </a>
          <a href="#layanan-integrasi" className="hover:border-b">
            Layanan Integrasi
          </a>
          <a href="#produk" className="hover:border-b">
            Produk
          </a>
          {/* <a onClick={() => setSidebarOpen(false)} href="#">
          Berita
        </a> */}
          <a href="#kontak" className="hover:border-b">
            Hubungi Kami
          </a>
        </div>

        {/* RIGHT ACTION */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* HAMBURGER MOBILE */}
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt=""
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />

          {/* BUTTON DESKTOP */}
          <a
            href="#kontak"
            className="text-sm max-sm:hidden flex items-center gap-2 bg-[#67C090] text-white px-6 py-4 rounded-full
            cursor-pointer hover:scale-103 transition-all"
          >
            Konsultasi Gratis
            <img src={assets.arrow_icon} width={14} alt="" />
          </a>
        </div>
      </motion.div>

      {/* OVERLAY MOBILE */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 sm:hidden"
        />
      )}

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-white z-40
        transform transition-transform duration-300 sm:hidden
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        flex flex-col pt-20 px-8 gap-5`}
      >
        {/* CLOSE ICON */}
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href="#">
          Beranda
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#layanan-integrasi">
          Layanan Integrasi
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#produk">
          Produk
        </a>
        {/* <a onClick={() => setSidebarOpen(false)} href="#">
          Berita
        </a> */}
        <a onClick={() => setSidebarOpen(false)} href="#kontak">
          Hubungi Kami
        </a>

        {/* BUTTON KONSULTASI – PALING BAWAH */}
        <a
          href="#kontak"
          onClick={() => setSidebarOpen(false)}
          className="mt-auto mb-6 flex items-center justify-center
          bg-[#67C090] text-white text-primary px-6 py-2 rounded-full font-semibold"
        >
          Konsultasi Gratis
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
