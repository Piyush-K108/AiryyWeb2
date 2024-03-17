import React, { useState, useEffect, useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Logo from "../assets/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import Slide from "react-reveal/Slide";
const currentYear = new Date().getFullYear();
const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const dropdownRef = useRef();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const whatsappNumber = "9826977757";

  const handleRentNowClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.location.href = whatsappLink;
  };
  const handlephone = () => {
    const phone = `tel:${whatsappNumber}`;
    window.location.href = phone;
  };

  return (
    <div className="w-screen p-12   flex  flex-row justify-between ">
      {/* Logo and Menu Item */}
      <div className="flex flex-row items-center gap-10 z-[10000]">
        <a
          className="cursor-pointer  outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 "
          aria-label="Resend"
          onClick={() => scrollToSection("Hero")}
        >
          <img
            className="bg-blend-color bg-no-repeat"
            width={100}
            height={100}
            src={Logo}
            alt=""
          />
        </a>

        <div className="pt-0">
          <ul className="flex items-center gap-4">
            <li>
              <a
                className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-xl font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                onClick={() => scrollToSection("About")}
              >
                About
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-xl font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                onClick={() => scrollToSection("Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-xl font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                onClick={() => scrollToSection("Bikes")}
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-xl font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                onClick={() => scrollToSection("Testimonials")}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-xl font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                onClick={() => scrollToSection("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact */}

      <div
        tabIndex={0} // Make the div focusable
        onBlur={() => setIsDropDown(false)}
        className="relative  z-10"
      >
        <a
          className="outline-none cursor-pointer focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
          data-state="closed"
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDown(!isDropDown);
          }}
        >
          Contact Now
          <span className="text-[#70757E]">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </span>
        </a>
        {isDropDown && (
          <Slide right>
            <div
              ref={dropdownRef}
              className="absolute top-full mt-2 bg-white rounded-xl w-[150px]  shadow-xl py-4 px-[15px]"
            >
              <ul className="flex flex-col">
                <li
                  className="text-black mb-4 hover:underline cursor-pointer"
                  onClick={handleRentNowClick}
                >
                  <WhatsAppIcon
                    className="text-green-700 font-bold text-[20px] mr-4"
                    fontSize="0"
                  />
                  WhatsApp
                </li>
                <li
                  onClick={handlephone}
                  className="text-black hover:underline cursor-pointer"
                >
                  <CallIcon
                    className="text-blue-700 font-bold text-[20px] mr-4"
                    fontSize="0"
                  />
                  Direct Call
                </li>
              </ul>
            </div>
          </Slide>
        )}
      </div>
    </div>
  );
};

export default Navbar;
