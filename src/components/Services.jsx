import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import First from "../assets/24seven.svg"
import Secound from "../assets/accessible.svg"
import Third from "../assets/selfie.svg"
import Forth from "../assets/reliability.svg"
const Services = () => {
  const whatsappNumber = "9826977757";
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const handleRentNowClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.location.href = whatsappLink;
  };
  return (
    <>
      {/* <Fade bottom> */}
      <div
        ref={ref}
        id="Services"
        className="Services  snap-center xs:snap-end   z-[10] mt-24 ss:mt-32 h-screen  relative  w-full"
      >
        {/* Parent container with opacity */}

        {/* Heading outside the parent container with opacity */}
        <h1 className=" dark:text-white   text-center font-poppins xs:text-[25px]  ss:text-[28px] text-[35px] font-bold mb-4 xs:pt-20 md:mb-0 md:col-span-3">
          WHY CHOOSE AiRYY RIDES
        </h1>

        <div className=" lg:flex lg:flex-row xs:my-6 xs:mx-2 ss:my-6 ss:mx-auto ss:align-middle ss:w-screen  md:ml-20 lg:ml-0 xs:grid xs:grid-cols-2 xs:gap-0 sm:grid sm:grid-cols-2 sm:gap-12 ss:grid ss:grid-cols-2 ss:gap-10    md:gap-10 items-center justify-center mt-16 overflow-hidden xs:w-screen">
          {/* Box 1 */}
          <div className="group  xs:w-[180px] ss:w-[220px] xs:h-[250px] ss:h-[300px] w-[250px] h-[327px] flex-col justify-center items-center  inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-[#CFB735] rounded-[30px] transition-all duration-500">
            
            {/* icon */}
            <img className="ss:hidden xs:hidden" src={First} alt="First" />
            

            <div className="text-neutral-700 group-hover:text-black text-[20px] xs:text-[14px] my-5 font-bold font-poppins">
              24/7 Service
            </div>
            <div className="flex-col justify-center items-center gap-[35px] flex ">
              <div className="xs:w-[220px] ss:w-[200px] w-[262px] h-[73px] group-hover:text-white text-black text-base font-normal font-poppins px-6 xs:px-10  leading-5 xs:text-[12px]  ss:text-justify xs:text-center text-justify">
                Available 24/7, we ensure round-the-clock service for your
                adventures, enabling day or night exploration at
                your convenience.
              </div>
             
              
            </div>
          </div>

          {/* Box 2 */}
          <div className="group  xs:w-[180px] ss:w-[220px] xs:h-[250px] ss:h-[300px] w-[250px] h-[327px] flex-col justify-center items-center  inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-[#CFB735] rounded-[30px] transition-all duration-500">
          {/* icon */}
          <img className="ss:hidden xs:hidden" src={Secound} alt="First" />
            <div className="text-neutral-700 group-hover:text-black text-[20px]  my-5  xs:text-[14px]  font-bold font-poppins">
              Budget-Friendly
            </div>
            <div className="flex-col justify-center items-center gap-[35px] flex">
              <div className="xs:w-[220px] ss:w-[200px] w-[262px] h-[73px] group-hover:text-white text-black text-base font-normal font-poppins px-6 xs:px-10  leading-5 xs:text-[12px]  ss:text-justify xs:text-center text-justify">
                Affordable urban commuting choices provide an exciting ride,
                letting you enjoy the thrill without financial strain on your
                wallet.
              </div>
              
            </div>
          </div>

          {/* Box 3 */}
          <div className="group  snap-center xs:snap-start snap-mandatory xs:w-[180px] ss:w-[220px] xs:mt-4 xs:h ss:mt-30xs:h-[250px] w-[250px] h-[327px] flex-col justify-center items-center  inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-[#CFB735] rounded-[30px] transition-all duration-500">
         {/* Icon */}
         <img className="ss:hidden xs:hidden" src={Third} alt="First" />
            <div className="text-neutral-700 group-hover:text-black text-[20px] xs:text-[14px] my-5  font-bold font-poppins">
              Quality and Safety
            </div>
            <div className="flex-col justify-center items-center gap-[35px] flex">
              <div className="xs:w-[220px] ss:w-[200px] w-[262px] h-[73px] group-hover:text-white text-black text-base font-normal font-poppins px-6 xs:px-10  leading-5 xs:text-[12px]  ss:text-justify xs:text-center text-justify">
                Ensuring safety, our bikes receive regular maintenance for a
                secure and hassle-free riding experience that prioritizes ease.
              </div>
              
            </div>
          </div>

          {/* Box 4 */}
          <div className="group  snap-center xs:snap-start snap-mandatory xs:w-[180px] ss:w-[220px] xs:mt-4 xs:h ss:mt-30xs:h-[250px] w-[250px] h-[327px] flex-col justify-center items-center  inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-[#CFB735] rounded-[30px] transition-all duration-500">
        
            {/* icon */}
            <img className="ss:hidden xs:hidden" src={Forth} alt="First" />

            <div className="text-neutral-700 group-hover:text-black text-[20px] my-5  font-bold font-poppins xs:text-[14px]">
              Easy Booking
            </div>
            <div className="flex-col justify-center items-center gap-[35px] flex">
              <div className="xs:w-[220px] ss:w-[200px] w-[262px] h-[73px] group-hover:text-white text-black text-base font-normal font-poppins px-6 xs:px-10  leading-5 xs:text-[12px]  ss:text-justify xs:text-center text-justify">
                Seamless online/ offline booking, offering hassle-free
                experiences with flexible rental options for your
                convenience and ease.
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="w-full -z-9 h-[950px] relative bg-gradient-to-b  from-yellow-400 via-transparent to-transparent rounded-3xl flex items-center justify-right xs:-top-[820px] -top-[720px] ">
        {/* This container has opacity, and the heading is outside it */}
      </div>

      {/* </Fade> */}
    </>
  );
};

export default Services;
