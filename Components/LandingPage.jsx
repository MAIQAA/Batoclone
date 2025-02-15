"use client";

import { useState, useEffect } from "react";

const texts = [
  "Web Development Company",
  "Every Pixel Counts",
  "Turnkey Websites from Scratch",
  "Digital Lifeboat",
  "Solutions for Web Transformation",
  "Proudly Made in Pakistan",
];

const LandingPage = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    let timeout;
    let iterations = 0;
    const originalText = texts[index];

    const scramble = () => {
      let scrambled = originalText
        .split("")
        .map((char) =>
          Math.random() < 0.5
            ? chars[Math.floor(Math.random() * chars.length)]
            : char
        )
        .join("");
      setDisplayText(scrambled);
      iterations++;

      if (iterations < 15) {
        timeout = setTimeout(scramble, 50);
      } else {
        setDisplayText(originalText);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
      }
    };

    scramble();

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="relative grid max-h-screen h-screen justify-between pb-16 xl:pt-40 md:pt-28 pt-24 lg:px-16 md:px-10 px-5 overflow-hidden">
      <div className="absolute top-0 left-0 z-10 w-full h-56 bg-[#2574cf] blur-3xl opacity-5"></div>
      <div className="absolute top-0 lg:-right-16 md:-right-28 -right-32 h-full flex items-center">
        <video
          className="h-[90%]"
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
          id="video-bg"
        >
          <source
            src="https://bato.dev/wp-content/uploads/2023/04/main-video-min-1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute hidden xl:block right-1/2 top-80 opacity-80">
        <div className="absolute -left-5 top-0 w-14 h-14 bg-[#2574cf] opacity-25 shadow-lg rounded-full"></div>
        <div className="absolute left-0 w-24 h-24 bg-[#2574cf] opacity-25 shadow-lg rounded-full"></div>
        <div className="absolute left-14 top-0 w-52 h-52 bg-[#2574cf] rounded-full blur-3xl"></div>
      </div>
      <div className="pb-0 text-white space-y-4">
        <h1 className="animate-tilt-in-bottom-1 xl:text-7xl lg:text-5xl text-3xl uppercase">
          Your Digital Agency <br /> In Analog World
        </h1>
        <div className="animate-tilt-in-bottom-2 text-xl xl:text-2xl  lowercase font-extralight text-gray-400">
          {displayText}
        </div>
      </div>
      <div className="self-end space-y-1">
        <p className="text-[#999] animate-tilt-in-bottom-3 xl:text-lg text-sm">
          Write to us
        </p>
        <p className="text-[#06FFFF] font-semibold animate-tilt-in-bottom-3 xl:text-2xl text-lg">
          ammadrana863@gmail.com
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
