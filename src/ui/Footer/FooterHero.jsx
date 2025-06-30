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
   <>
   <hr className='my-5 text-pink-300'></hr>
     <div className='flex justify-center text-gray-900'>
      <div className=" w-full md:w-8/12 md:flex justify-between  md:py-10 py-6 px-4   gap-2 text-gray-900">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border-gray-200 pb-2"
        >
          <button
            className="w-full flex items-center justify-between  font-bold py-2 md:cursor-default text-gray-900"
            onClick={() => {
              if (isMobile) toggle(index);
            }}
          >
            {section.title}
            {isMobile && (
              open === index ? (
                <IoMdArrowDropup className="text-lg" />
              ) : (
                <IoMdArrowDropdown className="text-lg" />
              )
            )}
          </button>

          <ul
            className={`text-sm transition-all duration-300 ease-in-out overflow-hidden text-gray-900 ${
              open === index || !isMobile ? 'block' : 'hidden'
            }`}
          >
            {section.items.map((item, i) => (
              <li key={i} className="py-1 text-[0.9rem]">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
   </>
  );
};

export default FooterHero;
