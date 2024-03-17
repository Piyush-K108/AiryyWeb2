import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { FaUserFriends } from "react-icons/fa";
import pin from "../assets/Pin.png";
import Img1 from "../assets/BikeImg5.png";
import Img2 from "../assets/BikeImg4.png";
import Img3 from "../assets/BikeImg3.png";
import Img4 from "../assets/BikeImg2.png";
import Img5 from "../assets/BikeImg1.png";
import earth from "../assets/earth.png";

const Bikes = () => {
  const BikeBox = ({ imgSrc, description, isHiddenText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative z-[100000] flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-300 border border-black shadow-2xl rounded-2xl ss:w-[170px] xs:w-[150px] xs:h-[180px] w-[251px] h-[209px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={pin}
          alt="pin img"
          className="absolute top-[-10px] left-[-20px] h-[60px] w-[60px]"
        />
        <div className="flex flex-col items-center justify-center w-[134px] h-[124px] relative">
          {isHovered ? (
            <div className="text-center items-center justify-center">
              <Fade bottom>
                <p className={`text-justify xs:text-center xs:text-[12px] xs:w-[120px] w-[170px] text-black font-poppins font-semibold ${isHiddenText ? 'hidden' : ''}`}>
                  {description}
                </p>
              </Fade>
            </div>
          ) : (
            <div>
              <Fade bottom>
                <img
                  className="w-[70px] h-[70px]"
                  src={imgSrc}
                  alt="Placeholder Image"
                />
              </Fade>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen flex items-center justify-center  flex-col bg-gradient-to-t from-black via-yellow-400 to-black rounded-3xl">
      <div className="text-center w-screen text-white font-poppins text-[30px] ss:text-[25px] xs:text-[20px] font-bold rounded-2xl py-2 px-10 ">
        BENEFITS OF RIDING WITH US
      </div>

      <div
        id="Bikes"
        className="grid ss:grid-cols-2 ss:gap-x-10 xs:grid-cols-2 grid-cols-3 lg:gap-x-20 sm:gap-x-10 xl:gap-x-40 gap-y-20 xs:gap-10 xs:m-[5px] py-8"
      >
        <BikeBox imgSrc={Img1} description="Our Electric Bikes boost a 50 km range, ideal for economical short rides." isHiddenText={false} />
        <BikeBox imgSrc={Img2} description="Both Electric Bikes and Activa are new, serviced, and feature advanced safety for a secure riding experience." isHiddenText={false} />
        <BikeBox imgSrc={earth} description="Enjoy environmentally friendly rides, reducing emissions with our Electric Bikes." isHiddenText={false} />
        <BikeBox imgSrc={Img4} description="Our fleet, including Activa, is new, meticulously serviced, and promises a fresh and comfortable ride." isHiddenText={false} />
        <BikeBox imgSrc={Img5} description="Choose between the silent efficiency of Electric Bikes or the versatile reliability of Activa, meeting diverse rider preferences." isHiddenText={false} />
        <BikeBox imgSrc={Img1} description="Our team embodies a friendly and cooperative spirit which creates a positive environment for everyone." isHiddenText={false} />
      </div>
    </div>
  );
};

export default Bikes;
