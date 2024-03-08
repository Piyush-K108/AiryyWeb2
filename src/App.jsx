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
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const App = () => {
  return (
    <div className="bg-black  ">
    {/* Big */}
      <div className=" flex-col hidden bg-black lg:flex">
        <div  className="-mt-4  ">
          <Navbar />
        </div>
        <div className="">
          <Hero />
        </div>
        <div className="mt-20">
          <About/>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col lg:hidden">
        <div id="Mobar" className="-mt-4 ">
          <Mobar />
        </div>
        <div  className="">
          <MobHero/>
        </div>
        <div id="MoAbout" className="mt-2">
          <About/>
        </div>
        <div id="MoServices" className="mt-20">
          <Services />
        </div>
        <div id="MoBikes" className="">
          <Bikes/>
        </div>
        <div id="MoTestimonials" className="mt-20">
          <Testimonials/>
        </div>
        <div id="MoContact" className="mt-0">
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
