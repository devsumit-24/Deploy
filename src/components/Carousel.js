import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import slide1 from "./images/slides/Slide1.jpg"
import slide2 from "./images/slides/Slide2.jpg"
import slide3 from "./images/slides/Slide3.jpg"

export default function Carousel() {
  const slides = [
    {
      url: slide1,
      event_name:""
    },
    {
      url: slide2,
    },
    {
      url: slide3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  });

  return (
    <>
      <div className="h-[30vh] lg:h-[calc(100vh-80px)] relative w-full m-auto group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover transition-all duration-500"
        >

        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-1xl md:text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide}/>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-1xl md:text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide}/>
        </div>
        <div className="flex justify-center items-center absolute bottom-4 inset-x-0 gap-2">
          {slides.map((slide, slideIndex) => (
            <div
              className={` transition-all md:w-2 md:h-2 w-1 h-1 bg-white rounded-full
            ${currentIndex === slideIndex ? "p-[3px] md:p-[5px]" : "bg-opacity-50"}
            `}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
