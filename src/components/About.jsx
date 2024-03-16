import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="relative xs:hidden ss:hidden sm:hidden lg:flex   w-screen p-10 justify-between h-[102vh] flex flex-row items-center"
      >
        {/* Background */}

        <div className="absolute  left-0 top-0 w-[60%] h-[870px] bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] opacity-60 bg-cover bg-50%_50% bg-blend-normal bg-no-repeat rounded-[50%]" />
        <div className="absolute  w-[80%] h-[1017px] bg-[linear-gradient(73deg,_rgba(17,_16,_15,_0.3)_13%,rgba(238,_200,_0,_0)_82%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat left-[48%] flex flex-row justify-end items-start pt-[153px] px-12 rounded-[50%]" />

        {/* Text */}
        <div className="relative w-[48%] z-10">
          <Fade left>
            <div className="mt-4 text-justify">
              <div className="text-3xl mb-2 xs:font-poppins ss:font-poppins sm:font-poppins font-poppins font-semibold leading-[86px] dark:text-gray-300">
                ABOUT US
              </div>
              <p className="font-poppins leading-[30px] w-[28rem] text-xl font-light text-gray-100">
                We go beyond just providing bikes, we're dedicated to creating
                unforgettable experiences. Our commitment to sustainable urban
                mobility fuels our mission to offer a diverse fleet of
                meticulously maintained bikes, ensuring that AiRYY ride is not
                only smooth and safe but also packed with adventure. Visit us at
                Bhawarkua, Indore, and embark on a journey with AiRYY that
                transforms your commute into a memorable adventure. Get ready to
                explore the city with ease, style, and a touch of excitement.
              </p>
            </div>
          </Fade>
        </div>

        {/* Image */}
        <div className="relative w-[50%]">
          <div className="">
            <Fade right>
              <img
                className=""
                src="https://file.rendit.io/n/rH5LwF78dqiwZ10YKfVp.png"
                alt="Vecteezypeopleworkingandmeetingillustration"
              />
            </Fade>
          </div>
        </div>
      </div>

      <div
        id="About"
        className="overflow-hidden sm:top-60  mt-10 lg:hidden   relative  w-full  items-start "
      >
        <div className="w-sreen  h-[640px]">
          <div className="w-screen h-[340px]  bg-gradient-to-b from-yellow-400 to-black" />
          <Fade right>
            <img
              className="w-[360px] h-[203px] xs:left-[20px] ss:left-[34px] sm:left-[44px] top-[90px] absolute"
              src="https://file.rendit.io/n/rH5LwF78dqiwZ10YKfVp.png"
              alt="Vecteezypeopleworkingandmeetingillustration"
            />
          </Fade>

          <Fade left>
            <div className=" justify-center  w-screen h-[311px] px-5 text-justify text-white text-[12px]   leading-[23px]">
              <div className="font-poppins  text-white text-[34px] font-semibold  mb-4 leading-none">
                ABOUT US
              </div>
              <p className="font-poppins">
                We go beyond just providing bike, we're dedicated to creating
                unforgettable experiences. Our commitment to sustainable urban
                mobility fuels our mission tooffer a diverse fleet of
                meticulously maintained bikes, ensuring that AiRYY ride is not
                only smooth and safe but also packed with adventure. Visit us at
                Bhawarkua, Indore, and embark on a journey with AiRYY that
                transforms your commute into a memorable adventure. Get ready to
                explore the city with ease, style, and a touch of excitement.
              </p>
              <br />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
