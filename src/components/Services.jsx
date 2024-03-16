import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import First from "../assets/24seven.svg";
import Second from "../assets/accessible.svg";
import Third from "../assets/selfie.svg";
import Fourth from "../assets/reliability.svg";

const Services = () => {
  const whatsappNumber = "9826977757";
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const handleRentNowClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.location.href = whatsappLink;
  };

  return (
    <div
      ref={ref}
      id="Services"
      className="Services   z-[10] h-screen w-screen px-1 justify-center items-center relative"
    >
      <div className="w-screen h-[1050px] xs:-left-1 bg-gradient-to-b from-yellow-400 via-transparent to-transparent rounded-3xl flex items-center justify-right -z-10 -top-10 absolute"></div>

      <h1 className="dark:text-white text-center font-poppins xs:text-[25px] mb-10 ss:text-[28px] text-[35px] font-bold md:col-span-3">
        WHY CHOOSE AiRYY RIDES
      </h1>

      <div className="xxl:flex xxl:justify-center xxl:flex-row xxl:m-0 xxl:items-center    xs:grid xs:grid-cols-2 xs:gap-y-10 xs:mr-2 sm:grid sm:grid-cols-2 sm:gap-12 ss:grid ss:grid-cols-2 ss:gap-6">
        {serviceData.map((service, index) => (
          <Box key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

const Box = ({ title, para, icon }) => {
  return (
    <div className="flex   justify-center  items-center">
      <div className="group xs:w-[160px] ss:w-[200px] xs:h-[220px] ss:h-[250px] w-[250px] h-[327px] flex-col gap-2 justify-center items-center inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-[#CFB735] rounded-[30px] transition-all duration-500">
        {/* icon */}
        <img
          className="xs:h-[40px] ss:h-[40px] ss:w-[40px] xs:w-[40px]"
          src={icon}
          alt={title}
        />

        <div className="text-neutral-700 group-hover:text-black text-[20px] xs:text-[14px] ss:text-[14px]   font-bold font-poppins">
          {title}
        </div>

        <div className="flex-col justify-center items-center  flex">
          <p className="xs:w-[220px]  ss:px-10  ss:text-center w-[262px] h-[93px] group-hover:text-white text-black text-base font-normal font-poppins px-6 xs:px-8 leading-5 xs:text-[12px]  xs:text-center text-justify">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

const serviceData = [
  {
    title: "24/7 Service",
    para: "Available 24/7, we ensure round-the-clock service for your adventures, enabling day or night exploration at your convenience.",
    icon: First,
  },
  {
    title: "Budget-Friendly",
    para: "Affordable urban commuting choices provide an exciting ride, letting you enjoy the thrill without financial strain on your wallet.",
    icon: Second,
  },
  {
    title: "Quality and Safety",
    para: "Ensuring safety, our bikes receive regular maintenance for a secure and hassle-free riding experience that prioritizes ease.",
    icon: Third,
  },
  {
    title: "Easy Booking",
    para: "Seamless online/offline booking, offering hassle-free experiences with flexible rental options for your convenience and ease.",
    icon: Fourth,
  },
];
