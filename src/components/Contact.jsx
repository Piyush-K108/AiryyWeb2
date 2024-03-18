import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div ref={ref} id="Contact" className="flex relative flex-col lg:flex-row gap-10 w-screen px-5 mt-10">
      {/* Text */}
      <div className="flex flex-col justify-center z-[100000] lg:px-10 items-center lg:justify-start lg:items-start lg:w-[50%] xs:text-xl text-3xl font-poppins tracking-[6.48] uppercase dark:text-white ">
        <p className="mb-4">Get in Touch</p>
        <div className="sm:text-[17px] ss:text-[14px] xs:text-[12px]  xs:flex xs:justify-start xs:items-start text-justify text-xl font-poppins font-medium  dark:text-[#d3d0d0]">
          <p className="xs:text-center sm:px-10 lg:px-0  ss:px-10">
            Have questions or need assistance? We are here to help. Contact our
            friendly team at AiRYY Rides for any inquiries, support or
            partnership opportunities.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 mt-8">
            <span className="text-[100px] -mt-9 text-yellow-400">.</span>
            <span className="block font-poppins  ss:text-[12px] xs:text-[12px]   sm:text-[12px] dark:text-white font-medium uppercase">
              Click on Map to Reach the Pickup location.
            </span>
          </div>
          {/* Map */}

          <iframe
            className="xs:w-80 sm:w-[500px] h-60 w-full  rounded-[2rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.467957738305!2d75.86182427385859!3d22.687931523086643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd038adfe389%3A0x2aa0548bdd308fea!2sAiRYY%20Rides!5e0!3m2!1sen!2sin!4v1704033687769!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            className=" xs:hidden sm:hidden ss:hidden h-72 ml-20 w-full rounded-[2rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.467957738305!2d75.86182427385859!3d22.687931523086643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd038adfe389%3A0x2aa0548bdd308fea!2sAiRYY%20Rides!5e0!3m2!1sen!2sin!4v1704033687769!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="xs:ml-5 flex dark:text-white flex-row items-center justify-center lg:items-start lg:justify-start  gap-8 mt-6 ">
            <a href="https://www.linkedin.com/company/airyy-rides/">
              <CiLinkedin className="cursor-pointer xs:text-[30px] text-[35px]" />
            </a>

            <a href="https://www.facebook.com/airyyrides">
              <FaFacebook className="cursor-pointer xs:text-[30px] text-[35px]" />
            </a>

            <a href="https://www.instagram.com/airyyrides?igsh=MWF1ZzZva2hscTRzYQ==">
              <FaInstagram className="cursor-pointer xs:text-[30px] text-[35px]" />
            </a>
          </div>
        </div>
      </div>
      <div
          id="Ellipse"
          className="w-[800px] hidden h-[791px]  bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[-90px] xl:left-[490px] img:left-[620px] xxl:left-[750px]      xl:flex flex-col gap-8 items-start pt-60 pb-[476px] px-[337px] rounded-[50%]"
        />

      {/* Form */}
      <div className="formContainer flex-1 flex-wrap relative  z-[1000]  lg:w-[50%]">
        <motion.div
          className="stroke-yellow-400 absolute xs:left-10  sm:left-28 md:left-56  lg:left-20 xxl:left-20 -z-1 mt-10"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg
            className="xs:h-[320px] xs:w-[300px] h-[450px] w-[450px] lg:w-[400px] lg:h-[400px]  xl:w-[420px] xxl:w-[480px] xl:h-[420px] xxl:h-[480px] "
            viewBox="0 0 32.666 32.666"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              end={{ pathLength: 0 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
            />
          </svg>
        </motion.div>
        <motion.form
          className="mt-10 items-center justify-center xs:w-full xs:flex xs:flex-col relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <input
            className="placeholder-black sm:w-[25rem] ss:w-[20rem] xs:w-[19rem] lg:w-[80%]"
            type="text"
            required
            placeholder="Name"
            name="name"
          />
          <input
            className="placeholder-black sm:w-[25rem] ss:w-[20rem] xs:w-[19rem] lg:w-[80%]"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            className="placeholder-black h-full w-full sm:w-[25rem] ss:w-[20rem] xs:w-[19rem] lg:w-[80%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
            rows={8}
            placeholder="Message"
            name="message"
          />
          <div className="flex ss:w-72 sm:w-[25rem] xs:w-72 justify-center items-center">
            <span className="bg-gray-900 xs:w-72  w-full py-3 rounded-2xl text-center cursor-pointer uppercase text-yellow-400 font-bold">
              Submit
            </span>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
