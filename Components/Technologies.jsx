import Image from "next/image";
import React, { useState } from "react";

const Technologies = () => {
  const [show, setShow] = useState(null);

  const logos = [
    { id: 1, path: "/Webflow.png", name: "WebFlow" },
    { id: 2, path: "/WordpPess.png", name: "Wordpress" },
    { id: 3, path: "/Shopify.png", name: "Shopify" },
    {
      id: 4,
      path: "/WooCommerce_Icon_00-removebg-preview.png",
      name: "Woocommerce",
    },
    { id: 5, path: "/PrestaShop.png", name: "Prestashop" },
    { id: 6, path: "/Git.png", name: "Git" },
    { id: 7, path: "/Html5.png", name: "HTML" },
    { id: 8, path: "/Css3.png", name: "CSS" },
    { id: 9, path: "/Javascript_00-removebg-preview.png", name: "JS" },
    { id: 10, path: "/React_00-removebg-preview.png", name: "ReactJs" },
    { id: 11, path: "/VUE_JS_00-removebg-preview.png", name: "VueJs" },
    { id: 12, path: "/Symfony.svg", name: "Symfony" },
    { id: 13, path: "/PHP_00-removebg-preview.png", name: "PHP" },
    { id: 14, path: "/Laravel.png", name: "Laravel" },
    { id: 15, path: "/JQuery.png", name: "JQuery" },
  ];

  return (
    <div className="relative grid justify-center text-white xl:py-40 md:py-32 py-28 lg:px-16 md:px-10 px-5 space-y-10">
      <h1 className="uppercase text-5xl text-center mb-10 animate-tilt-in-bottom-1">Technologies.</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 w-full">
        {logos.map((logo) => (
          <div
            key={logo.id}
            onMouseEnter={() => setShow(logo.id)}
            onMouseLeave={() => setShow(null)}
            className="group relative flex flex-col items-center justify-center w-48 h-48 p-6 border-t border-l border-gray-400 bg-[#050505] rounded-xl transition-all duration-300 hover:border-0"
          >
            <Image
              className={`${show === logo.id ? "mb-4" : "mb-0"} transition-all duration-300 ${logo.id === 12 ? "bg-white border-2 border-white rounded-full py-2 px-1 size-12" : "border-0"}`}
              src={logo.path}
              width={0}
              height={0}
              sizes="60x"
              alt={logo.name}
              style={{ width: "auto", height: "50px" }}
            />
            <p
              className={`${show === logo.id ? "opacity-100" : "opacity-0"} transition-opacity duration-300 text-sm text-[#06FFFF]`}
            >
              {logo.name}
            </p>

            {/* Border Animation */}
            <div className="absolute left-0 top-0 h-0 w-0 border-t border-[#0d0d0d] transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full"></div>
            <div className="absolute bottom-0 right-0 h-0 w-0 border-b border-gray-400 transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full"></div>
            <div className="absolute bottom-0 left-0 h-0 w-0 border-l border-[#0d0d0d] transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full"></div>
            <div className="absolute right-0 top-0 h-0 w-0 border-r border-gray-400 transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full"></div>

            {/* Delayed Color Transition */}
            <div className="absolute left-0 top-0 h-0 w-0 border-t border-[#06FFFF] transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full delay-[350ms]"></div>
            <div className="absolute bottom-0 right-0 h-0 w-0 border-b border-[#0d0d0d] transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full delay-[350ms]"></div>
            <div className="absolute bottom-0 left-0 h-0 w-0 border-l border-[#06FFFF] transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full delay-[350ms]"></div>
            <div className="absolute right-0 top-0 h-0 w-0 border-r border-[#0d0d0d] transition-all duration-300 rounded-xl group-hover:h-full group-hover:w-full delay-[350ms]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
