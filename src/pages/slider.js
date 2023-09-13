import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import img1 from "../pics/view1.jpg";
import img2 from "../pics/men2.jpg";
import img3 from "../pics/women2.jpg";
import img4 from "../pics/acc.jpg";
import img5 from "../pics/phone.jpg";
import img6 from "../pics/wm.jpg";
import img7 from "../pics/Kc.jpg";
import img8 from "../pics/watch.jpg";
import img9 from "../pics/ew.jpg";
import { Footer } from "../components/Footer";
import StickyNavbar from "../components/Nav";

function Slider() {
  const slides = [
    {
      url: img1,
    },
    {
      url: img6,
    },
    {
      url: img5,
    },
    {
      url: img2,
    },
    {
      url: img7,
    },
    {
      url: img8,
    },

    {
      url: img3,
    },
    {
      url: img4,
    },

    {
      url: img9,
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <StickyNavbar />
      <div className="max-w-[750px] md:h-[750px] h-[550px] m-auto pb-16 px-4 scale-90 md:scale-100 relative group mt-16">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className=" group-hover:block absolute top-[50%] md:-translate-x-16 -translate-x-10 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className=" group-hover:block absolute top-[50%] md:translate-x-16 translate-x-10 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slider;
