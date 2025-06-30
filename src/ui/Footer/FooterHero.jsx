'use client';
import { useState, useEffect } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const sections = [
  {
    title: "Popular Languages",
    items: ["Hindi", "Marathi", "Bengali", "Malayalam", "Kannada", "Telugu", "Tamil"],
  },
  {
    title: "Top Genre",
    items: ["Romance", "Young Adult", "Suspense", "Drama", "Top Content"],
  },
  {
    title: "Also Read",
    items: ["Most Read", "William Shakespeare", "Arthur Conan Doyle"],
  },
];

const FooterHero = () => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className='flex justify-center text-gray-900'>
      <div className=" w-full md:w-7/12 md:flex justify-between  py-6 px-4   gap-2">
      {sections.map((section, index) => (
        <div
          key={index}
          className="  border-b border-gray-200 pb-2"
        >
          <button
            className="w-full flex items-center justify-between  font-bold py-2 md:cursor-default"
            onClick={() => {
              if (isMobile) toggle(index);
            }}
          >
            {section.title}
            {isMobile && (
              open === index ? (
                <IoMdArrowDropup className="text-xl" />
              ) : (
                <IoMdArrowDropdown className="text-xl" />
              )
            )}
          </button>

          <ul
            className={`text-sm transition-all duration-300 ease-in-out overflow-hidden ${
              open === index || !isMobile ? 'block' : 'hidden'
            }`}
          >
            {section.items.map((item, i) => (
              <li key={i} className="py-1">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FooterHero;
