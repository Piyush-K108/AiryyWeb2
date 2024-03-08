import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Mobar from "./components/Mobar";
import MobHero from "./components/MobHero";
import About from "./components/About";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const App = () => {
  return (
    <div className="bg-black overflow-x-hidden ">
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
        <div className="-mt-4 ">
          <Mobar />
        </div>
        <div className="">
          <MobHero/>
        </div>
        <div className="mt-2">
          <About/>
        </div>
      </div>
    </div>
  );
};

export default App;
