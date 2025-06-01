"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Head from "next/head";

const NavBarData = [
  { title: "Capability Statement", link: "/capability-statement" },
  { title: "Resume", link: "/resume" },
  { title: "Literature Review", link: "/literature-review" },
  { title: "Artefacts", link: "/artefacts" },
  // { title: "Training", link: "/training" },
  // { title: "Work Sample", link: "/work-sample" },
  { title: "Contact", link: "/contact" },
  { title: "Gallery", link: "/gallery" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <Head>
        {/* Import Google Font: Pacifico */}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="bg-white  text-black shadow-md sticky top-0 z-50">
      
      {/* Desktop Navbar */}
      <div className="hidden container lg:flex items-center justify-between py-8 px-6">
        <Link
          href={"/"}
          className="text-2xl xl:text-4xl font-semibold italic  text-[#2e2e2e] font-cardo"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Muna Oli
        </Link>
        {/* <Link href={"/"} className="text-2xl font-bold text-blue-600">Muna Oli </Link> */}
        <div className="flex gap-6 text-base">
          {NavBarData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:text-blue-500 font-medium text-base xl:text-lg"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden container flex items-center justify-between py-4 px-6">
        <Link href={"/"} className="text-xl font-semibold italic  text-[#2e2e2e] font-cardo"
          style={{ fontFamily: "Pacifico, cursive" }}>
          Muna Oli{" "}
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-x-0 top-0 bg-white shadow-md transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } z-40`}
      >
        <div className="flex flex-col gap-4 px-6 pt-20 pb-6 text-lg">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Nav Links */}
          {NavBarData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
    </>
    
  );
};

export default Header;
