import React from "react";
import logo1 from "./images/logo.png";
import logo2 from "./images/rscoe.png";

export default function Header() {
  return (
    <div className="mt-20 h-[calc(100vh-80px)]">
      <div className="flex flex-col h-full md:flex-row content-center items-center justify-evenly">
        <div>
          <img className="w-36 h-36 md:w-44 md:h-44" src={logo1} alt="Rotaract Club" />
        </div>
        <div className="text-center">
          <h1 className="text-[36px] md:text-6xl font-bold p-2 md:p-4 font-[Poppins] tracking-wider">ROTARACT CLUB</h1>
          <h1 className="text-xl md:text-3xl">Of</h1>
          <h1 className="text-2xl md:text-4xl p-2 ">JSPM's Rajarshi Shahu College of Engineering</h1>
          <h1 className="text-lg md:text-2xl text-gray-700">Sponsored by Rotary Club of Akurdi</h1>
          <h1 className="text-lg md:text-2xl text-gray-700">Zone 03 | RID 3131</h1>
        </div>
        <div>
        <img className="w-36 h-36 md:w-44 md:h-44" src={logo2} alt="Rotaract Club" />
        </div>
      </div>
    </div>
  );
}
