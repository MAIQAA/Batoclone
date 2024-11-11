import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import React from "react";

const Services = () => {
  const items = [
    { id: 1, name: "Branding" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "Web Development" },
    { id: 4, name: "WordPress" },
    { id: 5, name: "Webflow" },
    { id: 6, name: "E-Commerce" },
    { id: 7, name: "SEO Optimization" },
    { id: 8, name: "Digital Marketing" },
  ];

  return (
    <div className="relative flex justify-between lg:px-16 md:px-10 px-5 overflow-y-visible">
      {/* Left Section */}
      <div className="self-start max-w-[40%] w-full text-xl sticky top-40 max-h-[100%] h-fit overflow-y-auto">
        <div className="space-y-10 text-white">
          <h1 className="xl:text-5xl text-3xl uppercase">Our Services.</h1>
          <p className="xl:text-xl text-base text-[#999]">
            Bato Web Agency takes pride in delivering inventive and adaptable
            solutions tailored to your specific requirements. As a boutique
            agency, we collaborate closely with our clients to establish an open
            and constructive relationship, resulting in a final product that
            surpasses your expectations.
          </p>
          <Image
            src="/clutch3.png"
            width={120}
            height={50}
            alt="clutch rating"
          />
        </div>
      </div>

      {/* Right Section with Scrollable Services List */}
      <div className="w-[55%] relative">
        <div className="grid gap-5">
          {items.map((item) => (
            <h1
              key={item.id}
              className="bg-[#050505] relative z-10 flex justify-between items-center overflow-hidden p-4 xl:p-7 border border-gray-400 xl:text-3xl text-lg text-white group"
            >
              <span className="relative">{item.name}</span>
              <BsArrowDown
                className="relative"
                aria-label="Expand Service"
              />

              {/* Border Animation */}
              <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>
              <span className="absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>
            </h1>
          ))}
        </div>

        {/* Decorative Blue Circles */}
        <div className="absolute right-80 bottom-80 opacity-80 xl:block hidden">
          <div className="absolute -left-5 top-0 w-14 h-14 opacity-25 shadow-lg bg-[#2574cf] rounded-full"></div>
          <div className="absolute left-0 w-24 h-24 opacity-25 shadow-lg bg-[#2574cf] rounded-full"></div>
          <div className="absolute left-14 top-0 rounded-full blur-3xl bg-[#2574cf] w-40 h-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
