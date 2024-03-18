import React, { useEffect, useState, useRef } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import { monials } from "../Monials";
import Fade from "react-reveal/Fade";
const BlockquoteComponent = ({ monial, index }) => {
  return (
    <div className="py-8 px-14   keen-slider__slide text-black flex sm:flex-row sm:justify-between">
      <div className="flex flex-col  h-60  sm:justify-between">
        {/* text */}
        <div className="flex flex-row w-80">
          <span className="text-black text-[40px] font-bold font-['Judson'] leading-tight">
            “
          </span>
          {/* name */}
          <div className="  text-[20px] font-bold font-['Judson'] leading-tight w-80 mt-1 ml-10 ">
            {monial.name}
          </div>
          {/* button */}
        </div>
        <div className="text-justify lg:text-2xl  overflow-clip   lg:w-full lg:overflow-visible lg:mb-20 ">
          {monial.Discription}
        </div>
      </div>
      <div className="flex flex-col mt-12  sm:ml-10 h-full justify-between">
        {/* Image */}
        <img className="rounded-full w-80" src={monial.image} />
      </div>
    </div>
  );
};
const LapTestimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider2", {
      loop: true,

      renderMode: "performance",
      drag: true,

      created(s) {
        s.moveToIdx(5, true);
      },

      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true);
      },

      dragStart(s) {
        // Pause the slider animation when dragging starts
        s.pause();
      },
      dragEnd(s) {
        // Resume the slider animation when dragging ends
        s.unpause();
        // Ensure the slider is in the correct position after dragging ends
        const slideIndex = Math.round(
          s.details().progressNormalized * (s.details().size - 1)
        );
        s.moveToSlide(slideIndex);
      },
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
        "(min-width: 700px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPreviousDesktop.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());
    return () => {
      keenSlider.destroy();
    };
  }, [sliderRef]);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
        rel="stylesheet"
      />
      <div
        id="LapTestimonials"
        className=" flex w-screen   relative  xl:flex-row  items-start xl:justify-between  mt-40"
      >
         
        {/* text */}

        <Fade left>
          <div className="z-10 flex flex-col px-16 h-full w-full mt-16">
            <h1 className="font-poppins text-4xl">WHAT OUR RIDERS SAY!</h1>
            <p className="mt-8 w-[90%]  text-justify font-poppins  lg:text-2xl  ">
              Don't just take our word for it hear from our satisfied riders who
              have experienced the joy of AiRYY Rides.
            </p>
          </div>
        </Fade>

        {/* Card */}
        <div className="flex flex-col w-[50%] px-10">
          <Fade right>
            <div className=" z-10 flex   bg-white rounded-[4rem] ">
              <div id="keen-slider2" ref={sliderRef} className="keen-slider">
                {/* Your card content goes here */}
                {monials.map((monial, index) => (
                  <BlockquoteComponent
                    key={index}
                    index={index}
                    monial={monial}
                  />
                ))}
              </div>
            </div>
          </Fade>
          {/* Arrow */}
          <div className="hidden  z-10   lg:mt-8 lg:flex justify-center lg:gap-4">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous-desktop"
              className="rounded-full border-2 border-[#FFD600] p-4  transition  hover:bg-[#FFD600] text-black dark:text-white dark:hover:text-black"
              style={{
                width: "52px",
                height: "52px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next-desktop"
              className="rounded-full border-2 border-[#FFD600] p-4  transition  hover:bg-[#FFD600] text-black dark:text-white dark:hover:text-black"
              style={{
                width: "52px",
                height: "52px",
              }}
            >
              <svg
                className="h-5 w-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Colour */}
        <div  className="absolute   -bottom-32  right-0   ">
          <svg
            width="1132"
            height="632"
            viewBox="0 0 1422 832"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"  
          >
            <path
              d="M1703.06 203.649C1780.49 502.793 1664.93 791.459 1444.94 848.402C1224.95 905.345 82.0719 713.38 4.63986 414.236C-72.7922 115.091 944.542 -177.952 1164.53 -234.896C1384.52 -291.839 1625.63 -95.4956 1703.06 203.649Z"
              fill="url(#paint0_linear_65_327)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_65_327"
                x1="1164.53"
                y1="-234.895"
                x2="1444.94"
                y2="848.402"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFD600" />
                <stop offset="0.878674" stop-color="#0A0A09" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default LapTestimonials;
