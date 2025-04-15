"use client"

import React, { useState } from "react";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoLogIn } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 px-4 md:px-10 flex items-center justify-between relative">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src="/ChatGPT Image Apr 15, 2025, 04_05_09 PM.png"
            height={50}
            width={60}
            alt="image logo"
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-5">
        <Link href="/">
          <li className="list-none text-lg font-semibold text-[#007BFF] cursor-pointer">Home</li>
        </Link>
        <Link href="/services">
          <li className="list-none text-lg font-semibold text-[#007BFF] cursor-pointer">Services</li>
        </Link>
        <Link href="/AboutUs">
          <li className="list-none text-lg font-semibold text-[#007BFF] cursor-pointer">About us</li>
        </Link>
      </div>

      {/* Desktop Login */}
      <div className="hidden md:flex">
        <Link href="/Authentication/Login">
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold text-[#007BFF]">Login Now</p>
            <IoLogIn size={30} style={{ color: "#007BFF" }} />
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-20">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-5 z-10 md:hidden">
          <Link href="" onClick={() => setMenuOpen(false)}>
            <p className="text-lg font-semibold text-[#007BFF]">Home</p>
          </Link>
          <Link href="" onClick={() => setMenuOpen(false)}>
            <p className="text-lg font-semibold text-[#007BFF]">Services</p>
          </Link>
          <Link href="" onClick={() => setMenuOpen(false)}>
            <p className="text-lg font-semibold text-[#007BFF]">About us</p>
          </Link>
          <Link href="" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-3">
              <p className="text-lg font-semibold text-[#007BFF]">Login Now</p>
              <IoLogIn size={30} style={{ color: "#007BFF" }} />
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
