import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="relative flex flex-col lg:flex-row text-white pb-16 xl:py-40 md:py-32 py-28 lg:px-16 md:px-10 px-5 space-y-8 lg:space-y-0">
      {/* About Us section Image */}
      <div className="flex justify-center lg:justify-start lg:w-1/2">
        <Image
          src="/about-home-effect.png"
          width={550}
          height={550}
          alt="about"
          className="w-72 sm:w-96 lg:w-[450px] xl:w-[550px] h-auto"
        />
      </div>

      <div className="lg:w-1/2 xl:w-[45%] space-y-5 lg:space-y-8 pr-0 lg:pr-10 xl:pr-20 ">
        {/* Title */}
        <h1 className="uppercase text-2xl sm:text-3xl xl:text-5xl animate-tilt-in-bottom-1">
          About Us.
        </h1>

        {/* Text */}
        <div className="text-[#999] text-sm sm:text-base xl:text-xl space-y-3 lg:space-y-5 animate-tilt-in-bottom-2">
          <p>
            Founded in 2014 in Ukraine and already well-known in Europe, Bato is
            an agency of experts in web design and development.
          </p>
          <p>
            We create websites of any type from scratch, ready to be used by our
            partners as well as provide any type of web development. Starting
            from 2014, we have accompanied more than{" "}
            <i className="text-[#06FFFF] not-italic">
              250 clients, accomplished 1000+ projects!
            </i>
          </p>
        </div>

        {/* Button */}
        <button className="relative xl:!mt-16 !mt-7 xl:w-20 w-[75px] overflow-hidden flex justify-between items-center group uppercase animate-tilt-in-bottom-3">
          About
          <BsArrowUpRight className="text-[#06FFFF] xl:text-xl text-sm group-hover:animate-slideAndReset size:5 xl:size-6" />
        </button>
      </div>
    </div>
  );
};

export default About;
