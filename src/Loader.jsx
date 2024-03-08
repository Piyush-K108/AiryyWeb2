import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "./index.css";
import vid from "./assets/Loader.mp4";

const Loader = () => {
  const [loading, setloading] = useState(true);


  useEffect(() => {
    const tl = gsap.timeline();


    tl.to({}, { duration: 0, onComplete: () => {
      tl.to(".video", { duration: 4, ease: "power3.out" });
      tl.to(".video",{scale:0,ease:"circ.out"})
      tl.to([".blinder", ".blinder2"], { scaleY: 0, stagger: 0, duration: 0, ease: "power3.out" });
      tl.eventCallback("onComplete", () => setloading(false));
    }});
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.history.scrollRestoration = 'manual';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }, [loading]);

  return (
    <div className={`loader  ${loading ? "z-[1100]" : "-z-[1000] hidden"}`}>
      <div className="blinder-container ">
        <div className="blinder"></div>
        <div className="blinder2"></div>
      </div>

      <video className="video" autoPlay muted >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loader;
