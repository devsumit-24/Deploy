import React, { useState } from "react";
import {BsList, BsX } from "react-icons/bs";
import logo from "./images/logo.png";

export default function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "EVENTS", link: "/" },
    { name: "OUR TEAM", link: "/" },
    { name: "CONTACT", link: "/" },
    // { name: "", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-3">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
        <img className="w-16 h-16 mr-2" src={logo} alt="logo" /> 
        <h1 className="">RC RSCOE</h1>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer min-[856px]:hidden"
        >
          {open ? <BsX/> : <BsList/>}
        </div>

        <ul
          className={`min-[856px]:flex min-[856px]:items-center min-[856px]:pb-0 pb-12 absolute min-[856px]:static bg-white min-[856px]:z-auto z-[-1] left-0 w-full min-[856px]:w-auto min-[856px]:pl-0 md:pl-12 pl-9  transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="min-[856px]:ml-8 text-lg min-[856px]:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            className="bg-indigo-700 text-white py-2 px-6 rounded min-[856px]:ml-8 hover:bg-indigo-400 
    duration-500"
          >
            LOG IN
          </button>
        </ul>
      </div>
    </div>
  );
}
