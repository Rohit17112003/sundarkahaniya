"use client";

import Link from "next/link";
import { FaHome, FaThLarge, FaUserAlt,FaPenFancy } from "react-icons/fa";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner md:hidden flex justify-between items-center px-4 h-16 z-50">
      <Link
        href="/"
        className="flex flex-col items-center justify-center text-gray-700 hover:text-purple-700"
      >
        <FaHome className="text-xl" />
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link
        href="/category"
        className="flex flex-col items-center justify-center text-gray-700 hover:text-purple-700"
      >
        <FaThLarge className="text-xl" />
        <span className="text-xs mt-1">Category</span>
      </Link>

      <Link
        href="/write"
        className="flex flex-col items-center justify-center text-gray-700 hover:text-purple-700"
      >
        <FaPenFancy className="text-xl" />
        <span className="text-xs mt-1">Write</span>
      </Link>

       <Link
        href="/sign-in"
        className="flex flex-col items-center justify-center text-gray-700 hover:text-purple-700"
      >
        <FaUserAlt className="text-xl" />
        <span className="text-xs mt-1"> Sign In</span>
      </Link>
    </nav>
  );
};

export default BottomNav;

