import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex text-white pb-16 xl:pt-40 md:pt-32 pt-28 lg:px-16 md:px-10 px-5">
      {/* About Us section Image */}
      <div className="w-1/2">
        <Image
          src={"/about-home-effect.png"}
          width={550}
          height={550}
          alt="about"
          className="xl:w-[550px] w-[350px]"
        />
      </div>

      <div className="xl:w-[45%] w-1/2 xl:space-y-10 space-y-3 pr-20">
        {/* Title */}
        <h1 className="uppercase xl:text-5xl text-3xl animate-tilt-in-bottom-1">
          About Us.
        </h1>

        {/* Text */}
        <div className="text-[#999] xl:text-xl text-sm xl:space-y-10 space-y-3 animate-tilt-in-bottom-2">
          <p>
            Founded in 2014 in Ukraine and already well-known in Europe, Bato is
            an Agency of experts in web design and development.
          </p>
          <p>
            We create websites of any type from scratch, ready to be used by our
            partners as well as provide any type of web development. Starting
            from 2014 we have accompanied more than{" "}
            <i className="text-[#06FFFF] not-italic">
              250 clients, accomplished 1000+ projects!
            </i>
          </p>
        </div>

        {/* Button */}
        <button className="relative xl:!mt-16 !mt-7 xl:w-20 w-[75px] overflow-hidden flex justify-between items-center group uppercase">
          About
          <BsArrowUpRight className="text-[#06FFFF] xl:text-xl text-sm group-hover:animate-slideAndReset size:5 xl:size-6" />
        </button>
      </div>
    </div>
  );
};

export default About;
