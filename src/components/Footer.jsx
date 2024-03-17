import React from "react";
import FooterImg from "../assets/FooterImg6.png";
import Zoom from "react-reveal/Zoom";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import Logo from "../assets/logo.png";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div id="Footer" className="flex flex-col sm:px-10 lg:px-20 xxl:px-10 w-screen px-5">
      <div className="xxl:mb-[100px]">
        <a
          className=" cursor-pointer outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
          onClick={() => scrollToSection("Nav")}
        >
          <img
            className="w-44 mb-4 bg-blend-color bg-no-repeat "
            src={Logo}
            alt=""
          />
        </a>
        <h2 className="dark:text-gray-300   font-poppins  xs:text-[18px] text-[25px] font-medium">
          Rent it now!
        </h2>
      </div>

      <div className="w-[120%] xxl:hidden ">
        <Zoom right>
          <img
            src={FooterImg}
            alt="Footer Img"
            className="sm:relative sm:left-[250px] lg:left-[500px] rounded-2xl -mt-40 "
            height={500}
            width={500}
          />
        </Zoom>
      </div>

      <div className="flex xxl:flex xxl:flex-row xxl:items-center xxl:justify-between flex-col -mt-20">
        <div>
          <h1 className="font-bold font-poppins pb-2 ss:text-[18px] xs:text-[18px] text-[25px] border-yellow-200">
            Contact Us
          </h1>
          <ul className="flex flex-col mt-2 -ml-2 -mr-4 gap-4 ">
            <li className="dark:text-white">
              <PhoneInTalkOutlinedIcon className="text-yellow-400" />{" "}
              <a href="tel:9826977757">9826977757</a>
            </li>
            <li className="dark:text-white">
              <AttachEmailOutlinedIcon className="text-yellow-400" />{" "}
              <a href="mailto:airyyrides@gmail.com">airyyrides@gmail.com</a>
            </li>
            <li className="dark:text-white">
              <div className="flex flex-row gap-1">
                <PlaceOutlinedIcon className="text-yellow-400" />{" "}
                <a
                  href="https://www.google.com/maps/place/AiRYY+Rides/@22.6881198,75.8581969,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd038adfe389:0x2aa0548bdd308fea!8m2!3d22.6881149!4d75.8630678!16s%2Fg%2F11stj9kj6g?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  160/4, Bholaram Ustad Marg, Indrapuri Colony, Bhanwar Kuwa,
                  Indore, Madhya Pradesh 452001
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="xxl:flex xxl:flex-col xxl:items-center ">
        {/* used in xxl  */}
          <div className="sm:hidden ss:hidden  xs:hidden xxl:flex xxl:items-center">
            <Zoom right>
              <img
                src={FooterImg}
                alt="Footer Img"
                className="rounded-2xl xxl:-mt-64 xxl:h-[200px] xxl:w-[300px] "
              
              />
            </Zoom>
          </div>
          <div className="dark:text-white xs:hidden ss:hidden xxl:relative xxl:top-[-30px]">
            <h1 className="font-bold font-poppins pb-2 ss:text-[14px] xs:text-[25px] text-[25px]">
              Useful Links
            </h1>
            <ul className="flex flex-col  gap-3">
              <li className="hover:underline cursor-pointer  xs:text-[13px]">
                FAQ
              </li>
              <li className="hover:underline cursor-pointer xs:text-[13px]">
                Terms and Conditions
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row   sm:hidden">
          <div className="dark:text-white flex flex-col w-screen mt-10 justify-start">
            <h1 className="font-bold font-poppins pb-2 ss:text-[14px] xs:text-[20px] text-[25px]">
              Useful Links
            </h1>
            <ul className="xs:flex xs:flex-col  xs:gap-4">
              <li className="hover:underline cursor-pointer xs:text-[17px]">
                FAQ
              </li>
              <li className="hover:underline cursor-pointer xs:text-[17px]">
                Terms and Conditions
              </li>
            </ul>
          </div>
          <div className="flex  xxl:hidden   dark:text-white flex-col gap-4 h-[11rem] mr-4 pt-8">
            <div className="border-y-2 mt-4 border-yellow-400 " />
            <a href="https://www.linkedin.com/company/airyy-rides/">
              <CiLinkedin className="cursor-pointer" size={28} />
            </a>
            <a href="https://www.facebook.com/airyyrides">
              <FaFacebook className="cursor-pointer mt-[0.06rem]" size={24} />
            </a>
            <a href="https://www.instagram.com/airyyrides?igsh=MWF1ZzZva2hscTRzYQ==">
              <FaInstagram className="cursor-pointer mt-[0.06rem]" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* lower */}
      <div className="w-screen justify-between flex xs:hidden xxl:flex xxl:h-[3rem] xxl:mb-10 xxl:flex-row xxl:items-center  xxl:justify-between ss:hidden xxl:px-0 px-44 text-white">
        <p>
          <span className="text-yellow-400">&copy;</span> {currentYear}{" "}
          airyyrides.com
        </p>
        {/* Social Links for larger screens */}
        <div className="flex xs:hidden  ss:hidden xxl:mr-[188px] dark:text-white xxl:h-0 flex-row gap-4  h-[5rem] ">
          <a href="https://www.linkedin.com/company/airyy-rides/">
            <CiLinkedin className="cursor-pointer" size={33} />
          </a>
          <a href="https://www.facebook.com/airyyrides">
            <FaFacebook className="cursor-pointer mt-[0.06rem]" size={28} />
          </a>
          <a href="https://www.instagram.com/airyyrides?igsh=MWF1ZzZva2hscTRzYQ==">
            <FaInstagram className="cursor-pointer mt-[0.06rem]" size={28} />
          </a>
        </div>
      </div>

      <div className="w-screen xxl:hidden justify-center xxl:mb-0 xxl:mt-0 mb-2 mt-16 flex sm:hidden  text-white">
        <p>
          <span className="text-yellow-400">&copy;</span> {currentYear}{" "}
          airyyrides.com
        </p>
        {/* Social Links for larger screens */}
      </div>
    </div>
  );
}

export default Footer;
