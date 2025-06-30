import {
  FaAndroid,
  FaApple,
  FaPenNib,
  FaBookReader,
  FaCopyright,
  FaQuestionCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000d8] text-white px-4 md:px-16 pt-8 pb-12 md:pb-10 text-[0.9rem]">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Mobile App Section */}
          <div>
            <h3 className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-[44px] after:h-[2px] after:bg-red-500 font-semibold">
              Mobile App
            </h3>
            <ul className="mt-7  space-y-2.5">
              <li className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={"/Logo/google-play.png"}
                  width={135}
                  height={135}
                  alt="logo"
                />
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={"/Logo/app-store.png"}
                  width={135}
                  height={135}
                  alt="logo"
                />
              </li>
            </ul>
          </div>

          {/* Help Centre Section */}
          <div>
            <h3 className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-[44px] after:h-[2px] after:bg-red-500 font-semibold">
              Help Centre
            </h3>
            <ul className="mt-7  space-y-2.5">
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <FaPenNib /> Writing
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <FaBookReader /> Reading
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <FaCopyright /> Copyright
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <FaQuestionCircle /> General
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-[44px] after:h-[2px] after:bg-red-500 font-semibold">
              Contact Us
            </h3>
            <ul className="mt-7  space-y-2.5">
              <li className="flex items-center gap-2 cursor-pointer hover:underline">
                <FaEnvelope /> english@pratilipi.com
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Nasadiya Technologies Private Limited
                  <br />
                  Sona Towers, 4th Floor, No.2, 26, 27 and 3,
                  <br />
                  Krishna Nagar Industrial Area,
                  <br />
                  Hosur Main Road, Bangalore, Karnataka 560029
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-[44px] after:h-[2px] after:bg-red-500 font-semibold">
              Follow us on Social Media
            </h3>
            <div className="mt-7 flex gap-4">
              <div className="relative group bg-blue-600 rounded-full p-2 hover:brightness-110 transition">
                <FaFacebookF className="text-white text-lg cursor-pointer" />
              </div>

              <div className="relative group bg-sky-400 rounded-full p-2 hover:brightness-110 transition">
                <FaTwitter className="text-white text-lg cursor-pointer" />
              </div>

              <div className="relative group bg-red-600 rounded-full p-2 hover:brightness-110 transition">
                <FaYoutube className="text-white text-lg cursor-pointer" />
              </div>

              <div className="relative group bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-2 hover:brightness-110 transition">
                <FaInstagram className="text-white text-lg cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Bar */}
      <div className="bg-[#000000e1] text-white flex flex-wrap justify-center md:mb-0 mb-14 px-4">
        <p className="py-3.5 text-[0.7rem] md:text-[0.8rem] text-center font-semibold tracking-wide">
          © 2025 Nasadiya Tech. Pvt. Ltd. |
          <span className="hover:underline cursor-pointer"> About Us</span> |
          <span className="hover:underline cursor-pointer"> Work With Us</span>|
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          |<span className="hover:underline cursor-pointer"> Terms</span> |
          <span className="hover:underline cursor-pointer">
            Vulnerability Disclosure Policy
          </span>
          |<span className="hover:underline cursor-pointer"> Hall of Fame</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
