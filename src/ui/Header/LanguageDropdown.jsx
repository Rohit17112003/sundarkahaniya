"use client";

import { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "mr", label: "Marathi" },
  { code: "ml", label: "Malayalam" },
  { code: "kn", label: "Kannada" },
  { code: "te", label: "Telugu" },
  { code: "ta", label: "Tamil" },
];

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-2 text-[0.9rem] md:text-[1rem] border text-gray-900 border-gray-300 font-semibold rounded-md bg-white hover:bg-gray-100 cursor-pointer"
      >
        {selected.label}
        <IoMdArrowDropdown />
      </button>
      {open && (
        <ul className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-md border border-gray-300 z-50 text-gray-900">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selected.code === lang.code ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
