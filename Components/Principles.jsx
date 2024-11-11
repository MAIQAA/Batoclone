import React from "react";

const Principles = () => {
  return (
    <div className="relative grid justify-center text-white lg:px-16 md:px-10 px-5 space-y-10">
      <h1 className="text-5xl uppercase text-center mb-10">
        Our Guiding Principles.
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between">
        <div className="relative p-11 border-t border-l-2 border-r border-gray-400 bg-[#040404] group">
          <div className="relative self-start w-2/3 space-y-10">
            <h1 className="text-4xl principles">Quality</h1>
            <p
              className="text-base text-gray-300"
              style={{ fontFamily: "Poppin Thin" }}
            >
              We are sure about the quality of our services, since delivering
              pixel perfect and smooth product to our clients is our main goal.
              By prioritizing quality throughout the development process and
              beyond, we create exceptional digital experiences that drive user
              engagement, satisfaction, and business success for our partners.
            </p>
          </div>

          <div className="absolute right-11 top-11 border-2 border-white rounded-full size-32 blur-sm group-hover:border-[#06FFFF] group-hover:transition-border group-hover:duration-500"></div>
          <div className="absolute right-7 top-11 border-2 border-white rounded-full size-32 group-hover:border-[#06FFFF] group-hover:transition-border group-hover:duration-500"></div>
          <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>

          <span className="absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Principles;
