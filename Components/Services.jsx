import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import React from "react";

const Services = () => {
  // data.js
  const items = [
    { id: 1, name: "Branding" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "Web Development" },
    { id: 4, name: "Wordpress" },
    { id: 5, name: "Webflow" },
    { id: 6, name: "E-Commerce" },
  ];

  return (
    <div className="relative flex justify-between text-white pb-16 xl:pt-40 md:pt-32 pt-28 lg:px-16 md:px-10 px-5">
      <div className="w-[40%] space-y-10">
        <h1 className="xl:text-5xl text-3xl">Our Services.</h1>
        <p className="xl:text-xl text-base text-[#999]">
          Bato Web Agency takes pride in delivering inventive and adaptable
          solutions tailored to your specific requirements. As a boutique
          agency, we collaborate closely with our clients to establish an open
          and constructive relationship, resulting in a final product that
          surpasses your expectations.
        </p>
        <Image
          src={"/clutch3.png"}
          width={120}
          height={50}
          alt="clutch rating"
        />
      </div>
      <div className="w-[55%] relative snap-mandatory overflow-y-scroll scroll-smooth h-[500px]">
        <div className="grid gap-5 services">
          {items.map((item) => (
            <h1
              key={item.id}
              className="services relative flex justify-between items-center overflow-hidden p-4 xl:p-7 border border-gray-400 bg-[#050505] xl:text-3xl text-lg z-10 snap-center text-white group"
            >
              <span className="relative z-10">{item.name}</span>
              <BsArrowDown className="relative z-10" />

              {/* Border animation spans */}
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>
            </h1>
          ))}
        </div>
      </div>

      {/* Blue light Circles */}
      <div className="absolute right-96 bottom-80 opacity-80 xl:block hidden">
        <div className="absolute -left-5 top-0 w-14 h-14 opacity-25 shadow-lg bg-[#2574cf] rounded-full"></div>
        <div className="absolute left-0 w-24 h-24 opacity-25 shadow-lg bg-[#2574cf] rounded-full"></div>
        <div className="absolute left-14 top-0 rounded-full blur-3xl bg-[#2574cf] w-40 h-40"></div>
      </div>
    </div>
  );
};

export default Services;
