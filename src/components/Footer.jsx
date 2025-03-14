import React, { useState, useEffect } from "react";
import FooterImg from "../assets/FooterImg6.png";
import Zoom from "react-reveal/Zoom";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import gsap from "gsap";
import Logo from "../assets/logo.png";
import Fade from "react-reveal/Fade";

const currentYear = new Date().getFullYear();

function Footer() {
  const [showArrow, setShowArrow] = useState(false);
  const [Dont, setDont] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("LapNav");

      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();

        if (rect.y > -3740) {
          if (showArrow) {
            setDont(true);
            const arrowTimeline = gsap.timeline();
            arrowTimeline.to("#FooterArrow", {
              opacity: 0,
              y: -100,
              duration: 1,
              ease: "power3.out",
            });
            arrowTimeline.eventCallback("onComplete", () =>
              setShowArrow(false)
            );
          }
        } else {
          if (!showArrow) {
            setShowArrow(true);
            setDont(false)
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showArrow]);

  return (
    <div
      id="Footer"
      className=" relative flex flex-col w-screen px-5 md:px-20 xxl:pr-56 xxl:ml-10"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:w-screen sm:pr-8 sm:mt-10 ">
        <div className=" z-[100] sm:w-80 sm:-mt-6 xxl:mt-8">
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
          <div className="w-[80vw] ss:w-[220px] md:w-[290px] lg:w-[100vw] xs:flex xs:justify-start xs:items-center">
            <p className="dark:text-gray-300 ss:text-[20px]    font-poppins mt-1 xs:hidden ss:hidden xs:text-[18px] text-[25px]">
              Explore the city with ease. Rent a bike today!
            </p>
          </div>
        </div>

        <div className="">
          <Zoom right>
            <img
              src={FooterImg}
              alt="Footer Img"
              className="rounded-2xl -mt-40 sm:-mt-16 ss:ml-10 xs:ml-16  scooter:ml-20 sm:ml-[10vw] md:-ml-[8vw] lg:-ml-[0vw] xxl:mr-40 "
              height={500}
              width={500}
            />
          </Zoom>
        </div>
      </div>

      <div className="flex flex-col -mt-10 ss:-mt-20 sm:mt-1">
        <div className="flex md:flex-row justify-between">
          <div className="flex flex-col sm:w-[60%]">
            <h1 className="font-bold font-poppins pb-2   ss:text-[18px] xs:text-[18px] text-[25px] border-yellow-200">
              Contact Us
            </h1>
            <ul className="flex flex-col mt-2 -ml-2 -mr-4 gap-4 ">
              <li className="dark:text-white">
                <PhoneInTalkOutlinedIcon className="text-yellow-400" />{" "}
                <a href="tel:9826977757">9826977757</a>
              </li>
              <li className="dark:text-white">
                <AttachEmailOutlinedIcon className="text-yellow-400" />{" "}
                <a href="mailto:hello@airyyrides.com">hello@airyyrides.com</a>
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
          <div className="dark:text-white xs:hidden ss:hidden ">
            <h1 className="font-bold font-poppins pb-2 mt-10 sm:mt-0 ss:text-[14px] xs:text-[25px] text-[25px]">
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

        <div className="flex flex-row  sm:hidden">
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
          <div className="flex  dark:text-white flex-col gap-4 h-[11rem] mr-4 pt-8">
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
      <div className="w-screen  justify-between flex xs:hidden   ss:hidden pr-10  mt-10 text-white">
        <p>
          <span className="text-yellow-400">&copy;</span> {currentYear}{" "}
          airyyrides.com
        </p>
        {/* Social Links for larger screens */}
        <div className="flex xs:hidden  ss:hidden dark:text-white pr-10 md:pr-36 xxl:pr-72 flex-row gap-4 h-[5rem] ">
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

      <div className="w-screen justify-center mb-2 mt-16 flex sm:hidden  text-white">
        <p>
          <span className="text-yellow-400">&copy;</span> {currentYear}{" "}
          airyyrides.com
        </p>
        {/* Social Links for larger screens */}
      </div>

      {/* Upper */}

      {showArrow && !Dont ? (
        <Fade up>
          <div
            id="FooterArrow"
            className={`fixed hidden  z-[1001] text-white border bg-yellow-500 rounded-[50%] xxl:flex justify-end items-end h-[3.4rem] w-[3.4rem] cursor-pointer right-0 bottom-10 md:-mr-9 xl:mr-10 bg-transparent`}
            onClick={() => scrollToSection("LapNav")}
          >
            <BsArrowUp
              style={{ height: "28px", width: "30px" }}
              className={`animate-icon mr-[0.7rem] mb-3 inset-0 text-white z-10 flex h-full w-full items-center justify-center`}
            />
            <span
              style={{ height: `100%` }}
              className={`absolute inset-0 border-[3px]  border-t-[45-3px]  rounded-[50%]`}
            ></span>
          </div>
        </Fade>
      ) : null}

      {Dont && (
        <div
          id="FooterArrow"
          className={`fixed hidden  z-[1001] text-white border bg-yellow-500 rounded-[50%] xxl:flex justify-end items-end h-[3.4rem] w-[3.4rem] cursor-pointer right-0 bottom-10 md:-mr-9 xl:mr-10 bg-transparent`}
          onClick={() => scrollToSection("LapNav")}
        >
          <BsArrowUp
            style={{ height: "28px", width: "30px" }}
            className={`animate-icon mr-[0.7rem] mb-3 inset-0 text-white z-10 flex h-full w-full items-center justify-center`}
          />
          <span
            style={{ height: `100%` }}
            className={`absolute inset-0 border-[3px]  border-t-[45-3px]  rounded-[50%]`}
          ></span>
        </div>
      )}
    </div>
  );
}

export default Footer;
