"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaHome, FaThLarge, FaPenFancy, FaUserAlt } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className=" flex items-center justify-between px-4 md:px-16 py-5 gap-3">
        {/* Left: Logo */}
        <Link
          href="/"
          className="text-[1rem]  font-bold text-red-600 flex gap-3 items-center tracking-wide"
        >
          <Image
            src={"/Logo/pratilipi_logo.png"}
            width={32}
            height={32}
            alt="logo"
          />
          <span className="hidden md:block"> Pratilipi</span>
        </Link>

        {/* Center: Language + Search bar + Notification Icon */}
        <div className="flex items-center gap-3 flex-1 md:max-w-xl max-w-lg md:-ml-36">
          <LanguageDropdown />

          <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2.5 bg-gray-100">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for your desired Stories"
              className="w-full bg-transparent focus:outline-none text-sm  text-black tracking-wide"
            />
          </div>
          <IoMdNotificationsOutline className="md:text-3xl text-4xl cursor-pointer text-gray-900 hover:text-[#e40046]" />
        </div>

        {/* Right Side Menu Items with Icons  */}
        <div className="hidden md:flex items-center gap-10 text-gray-900 font-medium">
          <div className="flex gap-8">
            <Link
              href="/"
              className="flex flex-col items-center hover:text-[#e40046]"
            >
              <FaHome className="text-xl mb-1" />
              Home
            </Link>
            <Link
              href="/category"
              className="flex flex-col items-center hover:text-[#e40046]"
            >
              <FaThLarge className="text-xl mb-1" />
              Category
            </Link>
            <Link
              href="/write"
              className="flex flex-col items-center hover:text-[#e40046]"
            >
              <FaPenFancy className="text-xl mb-1" />
              Write
            </Link>
            <Link
              href="/signin"
              className="flex flex-col items-center hover:text-[#e40046]"
            >
              <FaUserAlt className="text-xl mb-1" />
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
