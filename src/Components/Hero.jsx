import React from "react";
import image from "../assets/image.avif";
const Hero = () => {
  return (
    <main className="">
      <div>
        <div className="relative   top-27 left-35">
          <div className="flex just gap-4 px-4 py-4 bg-white rounded-full shadow-md w-40">
            <div className="w-5 h-5 rounded-full bg-orange-400"></div>
            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
            <div className="w-5 h-5 rounded-full bg-indigo-200"></div>
            <div className="w-5 h-5 rounded-full bg-teal-600"></div>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
