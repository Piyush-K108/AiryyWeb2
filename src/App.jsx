import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Mobar from "./components/Mobar";
import MobHero from "./components/MobHero";
import About from "./components/About";
import Services from "./components/Services";
import Bikes from "./components/Bikes";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Contact2 from "./components/Contact2";
import LapTestimonials from "./components/LapTestimonials";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const App = () => {
  return (
    <div id='App' className="bg-black">
      {/* Big */}
      <div className="flex-col hidden bg-black lg:flex xxl:overflow-hidden">
        <div id='LapNav' className="-mt-4  ">
          <Navbar />
        </div>
        <div className="">
          <Hero />
        </div>
        <div className="mt-20 lg:mt-[500px] xxl:mt-[100px]">
          <About />
        </div>
        <div className="mt-20">
          <Services />
        </div>
        <div id='LapBikes' className="ss:mt-20 sm:mt-[300px] xxl:mt-[-100px]">
          <Bikes />
        </div>
        <div id="LapTest" className="mt-20 ss:mt-44">
          <LapTestimonials />
        </div>
        <div className="mt-20">
          <Contact />
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col lg:hidden">
        <div id="Mobar" className="-mt-4 ">
          <Mobar />
        </div>
        <div className="">
          <MobHero />
        </div>
        <div id="MoAbout" className="mt-2">
          <About />
        </div>
        <div id="MoServices" className="mt-20 sm:mt-[20rem]">
          <Services />
        </div>
        <div id="MoBikes" className="mt-0 sm:mt-[300px]">
          <Bikes />
        </div>
        <div id="MoTestimonials" className="mt-20 ss:mt-44">
          <Testimonials />
        </div>
        <div id="MoContact" className="mt-20">
          <Contact />
        </div>
        <div id="MoFooter" className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
