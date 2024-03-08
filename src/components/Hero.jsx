import React, { useState, useEffect, useRef } from "react";
import ImageCarousel from "./ImageCoursel";
import { frame, motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import Slide from "react-reveal/Slide";
const Hero = () => {
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
    <div className="w-screen xs:px-5 px-10 h-[80vh] items-center flex flex-row xs:flex-col justify-between">
      {/* Text */}
      <div className="flex flex-col mb-20 ">
        <div className="md:text-3xl  ">
          <div className="xs:text-[40px]       text-yellow-500  text-[54px] font-medium font-poppins uppercase tracking-[6.48px] xs:mb-8 mb-10">
            A<span className="lowercase">i</span>RYY Rides
          </div>
          <div className="text-xl dark:text-white  text-[37px] font-medium mb-4 font-poppins uppercase tracking-[4.44px]">
            Ride Return Repeat
          </div>
          <div className=" dark:text-white  text-[19px] font-semibold font-poppins ">
            Your journey, Your vehicle, <br className="hidden xs:block ss:block"/>Experience travel like never before.
          </div>
        </div>
        <div className="cursor-pointer px-4 py-2.5 mt-4 w-32 rounded-[10px] border-2 border-yellow-500 justify-center items-center gap-2 inline-flex">
          <a
            onClick={handleRentNowClick}
            className="text-yellow-400 text-[15px] flex items-center justify-center font-semibold font-['Inter']"
            style={{ margin: "auto" }}
          >
            Rent Now
          </a>
        </div>
      </div>
      {/* Images */}
     <div className="relative">
      <div className=" rounded-[743.5px/595.5px] overflow-hidden">

      <ImageCarousel/>
      </div>
      <div className=" absolute  lg:top-10 lg:-left-[15vw]  xl:-top-[20ch] xl:-left-[10vw]     z-1">
          <div
            className="absolute h-[1000px] xl:h-[1400px] lg:h-[1600px] w-[1450px]  sm:h-[130rem] sm:w-[205rem] bg-gradient-to-b from-yellow-400 via-transparent to-transparent rounded-[703.5px/585.5px]"
          />
          <div className=" absolute  z-100 top-0 bottom-0 -left-20  xs:-left-48">
            <svg
              className="absolute -left-20 h-[690px] w-[1450px] "
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

export default Hero;
