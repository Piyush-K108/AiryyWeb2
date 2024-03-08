import React, { useState, useEffect, useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Logo from "../assets/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import Slide from "react-reveal/Slide";
const currentYear = new Date().getFullYear();
const Mobar = () => {
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
  const [MobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", MobileMenu);
  }, [MobileMenu]);
  return (
    <>
      <div className="w-screen px-5 py-10 flex flex-row justify-between ">
        <div className="flex-auto">
          <a
            className="cursor-pointer outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
            onClick={() => scrollToSection("Hero")}
          >
            <img
              className="w-24 bg-blend-color bg-no-repeat"
              src={Logo}
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-auto dark:text-white justify-end">
          <button
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="menu"
            className="inline-flex items-center justify-center rounded-md p-1 text-slate-11 transition ease-in-out hover:bg-slate-5 hover:text-slate-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-6"
            type="button"
            onClick={() => setMobileMenu(!MobileMenu)}
          >
            <span className="sr-only">Open main menu</span>
            {!MobileMenu ? (
              <svg
                aria-hidden="true"
                className="block h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="block h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {MobileMenu ? (
        <div
          className="flex bg-black absolute  z-[10000] px-5 w-screen  h-[100vh] py-4 "
          id="mobile-menu"
        >
          <div className=" flex w-full flex-col">
            <a
              className="text-base h-11 pl-4 pr-4 rounded-md gap-2 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mb-4 w-full"
              onClick={handleRentNowClick}
            >
              Contact Now
            </a>
            <a
              className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
              onClick={() => scrollToSection("About")}
            >
              About
            </a>
            <a
              className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
              onClick={() => scrollToSection("Contact")}
            >
              Services
            </a>
            <a
              className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
              onClick={() => scrollToSection("Bikes")}
            >
              Benefits
            </a>
            <a
              className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
              onClick={() => scrollToSection("Testimonials")}
            >
              Testimonials
            </a>
            <a
              className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
              onClick={() => scrollToSection("Contact")}
            >
              Contact
            </a>

            <div className="flex flex-row   text-md  w-full  pt-20  justify-between font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12">
              <p>
                <span className="text-yellow-400">&copy;</span> {currentYear}{" "}
                airyyrides.com
              </p>

              <div className="flex flex-row  gap-4  ">
                <a href="https://www.linkedin.com/company/airyy-rides/">
                  <CiLinkedin className="cursor-pointer" size={25} />
                </a>
                <a href="https://www.facebook.com/airyyrides">
                  <FaFacebook
                    className="cursor-pointer mt-[0.06rem]"
                    size={24}
                  />
                </a>
                <a href="https://www.instagram.com/airyyrides?igsh=MWF1ZzZva2hscTRzYQ==">
                  <FaInstagram
                    className="cursor-pointer mt-[0.06rem]"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Mobar;
