import React, { useState, useEffect, useRef } from "react";
import ImageCarousel from "./ImageCoursel";
import { frame, motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import Slide from "react-reveal/Slide";
const MobHero = () => {
  const whatsappNumber = "9826977757"; // Replace with your actual WhatsApp number
  const [isDropDown, setIsDropDown] = useState(false);
  const dropdownRef = useRef();

  const handleRentNowClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.location.href = whatsappLink;
  };
  const handlephone = () => {
    const phone = `tel:${whatsappNumber}`;
    window.location.href = phone;
  };
  return (
    <div className="h-[80vh] justify-center w-screen flex  flex-col px-5">
      {/* Text */}
      <div className="mb-10 z-10 xs:-mt-52 xs:mb-[100px] -mt-24 ">
        <motion.span className="text-yellow-500 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-poppins uppercase  tracking-[2.88px]">
          A
        </motion.span>
        <span className="text-yellow-500 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-poppins  tracking-[2.88px]">
          i
        </span>
        <motion.span className="text-yellow-500 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-poppins uppercase  tracking-[2.88px]">
          RYY Rides
        </motion.span>
        <br />
        <motion.span className="dark:text-white xs:text-2xl ss:text-3xl sm:text-4xl  font-medium font-poppins uppercase tracking-widest">
          Ride Return Repeat
        </motion.span>
      </div>
      {/* Button */}
      <div className=" cursor-pointer relative  z-10">
        <div
          tabIndex={0} // Make the div focusable
          onBlur={() => setIsDropDown(false)}
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDown(!isDropDown);
          }}
          className="w-[145px] h-[38px]  py-5 dark:bg-white bg-black rounded-md justify-center items-center gap-3.5 inline-flex"
        >
          <a
            data-state="closed"
            className="dark:text-black text-white text-sm font-semibold font-poppins leading-[18px]"
          >
            Contact Now
          </a>
          {isDropDown && (
            <Slide left>
              <div
                ref={dropdownRef}
                className="absolute top-full mt-2 bg-white rounded-xl w-[150px] shadow-xl py-4 px-[15px]"
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
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <div className="-mb-80  rounded-[743.5px/595.5px] overflow-hidden xs:-mr-30 -mr-40 ">
          <ImageCarousel />
        </div>
        <div className=" absolute    xs:-left-[35vw] xs:-top-[10vh] ss:-left-[20vw] ss:-top-[14vh]  xl:-top-[28ch]  z-1">
          <div
            className="absolute h-[1000px] xl:h-[1400px] lg:h-[1600px] w-[1450px] xs:w-[450px] xs:rounded-[1143.5px/995.5px] xs:h-[350px]  sm:h-[130rem] sm:w-[205rem] bg-gradient-to-b from-yellow-400 via-transparent to-transparent rounded-[743.5px/595.5px]"
            style={{
              position: "relative",
            }}
          />
          <div className=" absolute  z-100 top-0 bottom-0 -left-20  xs:-left-48">
            <svg
              className="absolute  h-[900px] w-[1450px] "
              width="316"
              height="269"
              viewBox="0 0 316 269"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="228.5"
                cy="183"
                rx="228.5"
                ry="183"
                fill="url(#paint0_linear_85_169)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_85_169"
                  x1="91.2817"
                  y1="303.56"
                  x2="387.491"
                  y2="188.619"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#11100F" stop-opacity="0.3" />
                  <stop offset="1" stop-color="#EEC800" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobHero;
