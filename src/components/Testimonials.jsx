import React, { useEffect, useState, useRef } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import { monials } from "../Monials";
import Fade from "react-reveal/Fade";
const BlockquoteComponent = ({ monial, index }) => {
  return (
    <div className="py-8 px-14 xs:hidden ss:hidden xs:px-40 xs:py-0 xs:mb-0  keen-slider__slide text-black flex sm:flex-row sm:justify-between">
      <div className="flex flex-col  h-60   xs:ml-8 sm:justify-between">
        {/* text */}
        <div className="flex flex-row w-80">
          <span className="text-black text-[40px] font-bold font-['Judson'] leading-tight">
            “
          </span>
          {/* name */}
          <div className=" xs:text-[1rem] text-[20px] font-bold font-['Judson'] leading-tight w-80 mt-1 ml-10 ">
            {monial.name}
          </div>
          {/* button */}
        </div>
        <div className="text-justify lg:text-2xl  overflow-clip w-44 sm:w-80 lg:w-full lg:overflow-visible lg:mb-20 mb-10 xs:mb-0">
          {monial.Discription}
        </div>
      </div>
      <div className="flex flex-col mt-12 ml-8  sm:ml-10 h-full justify-between">
        {/* Image */}
        <img className="rounded-full w-80" src={monial.image} />
      </div>
    </div>
  );
};
const BlockquoteComponentmobile = ({ monial, index }) => {
  return (
    <div className="flex flex-col  items-center  h-60  text-black  keen-slider__slide">
      {/* text */}
      <div className="flex flex-row ">
        <span className="text-[40px] font-bold font-['Judson'] leading-tight">
          “
        </span>
        {/* name */}
        <div className=" xs:text-[1rem] text-[20px] font-bold font-['Judson'] leading-tight     mt-2 ml-4 ">
          {monial.name}
        </div>
        {/* button */}
      </div>
      <div className="text-center lg:text-2xl  overflow-clip w-60">
        {monial.Discription}
      </div>
    </div>
  );
};
const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log("akjsbbd");
    const keenSlider = new KeenSlider("#keen-slider", {
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

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());

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
      {" "}
      <link
        href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
        rel="stylesheet"
      />
      <div
        id="Testimonials"
        className="h-screen flex xs:flex-col xs:gap-14 ss:flex-col sm:flex-col relative  xl:flex-row  items-start xl:justify-between  mt-14 "
      >
        {/* text */}

        <Fade left>
          <div className="z-10 xs:p-8 flex flex-col w-screen items-center justify-center">
            <span className="text-[02px] xs:text-[24px]  font-poppins mr-2 ">
              WHAT OUR RIDERS SAY!
            </span>
            <div className="sm:text-5xl lg:text-2xl  ">
              <div className="mt-8  xs:mt-2 xs:w-[70%] xs:text-[14px] xs:leading-8 xs:text-justify xs:m-10  sm:text-[25px] xl:text-[24px]  font-poppins  leading-9  text-center mr-2">
                Don't just take our word for it hear from our satisfied riders
                who have experienced the joy of AiRYY Rides.
              </div>
            </div>
          </div>
        </Fade>

        {/* Card */}

        <Fade right>
          <div className=" z-10 flex justify-center items-center w-screen mx-auto pt-10 x-10 xs:h-[14rem] xs:w-80 sm:hidden  bg-white rounded-[4rem] xs:rounded-[2rem]">
            <div id="keen-slider" ref={sliderRef} className="keen-slider">
              {/* Your card content goes here */}
              {monials.map((monial, index) => (
                <BlockquoteComponentmobile
                  key={index}
                  index={index}
                  monial={monial}
                />
              ))}
            </div>
          </div>
          <div className="xs:hidden z-10  bg-white rounded-[4rem] xs:rounded-[2rem]">
            <div id="keen-slider" ref={sliderRef} className="keen-slider">
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
        <div className="hidden  z-10  lg:mt-8 lg:flex justify-center lg:gap-4">
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

        {/* Arrow 2 */}

        <div className="-mt-8 z-10 flex justify-center items-center w-screen gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full flex border-2 border-[#FFD600] h-10 w-10  transition  hover:bg-[#FFD600] text-black dark:text-white dark:hover:text-black"
          >
            <svg
              className="h-3 w-3 flex-1 justify-center mt-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
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
            id="keen-slider-next"
            className="rounded-full flex border-2 border-[#FFD600] h-10 w-10  transition  hover:bg-[#FFD600] text-black dark:text-white dark:hover:text-black"
          >
            <svg
              className="h-3 w-3 flex-1 justify-center mt-3"
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

        {/* Colour */}

        <svg
          className="absolute  -top-20 -left-40 xs:w-[530px] "
          width="832"
          height="500"
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
              x1="600.53"
              y1="-34.895"
              x2="1200.94"
              y2="548.402"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD600" />
              <stop offset="0.878674" stop-color="#0A0A09" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Testimonials;
