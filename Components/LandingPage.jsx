"use client";
import TextScramble from "@dilrukr/react-text-scramble";

const LandingPage = () => {
  return (
    <>
      <div className="relative grid max-h-screen h-screen justify-between pb-16 xl:pt-40 md:pt-28 pt-24 lg:px-16 md:px-10 px-5">
        {/* Blue Blur background on the top */}
        <div className="absolute top-0 z-10 bg-[#2574cf] blur-3xl opacity-5 w-full h-56 p-0 m-0"></div>

        {/* Animation from the slpine */}
        {/* <iframe className='absolute right-0 bg-transparent' src='https://my.spline.design/ticktockinteractivelanding-b0265c72cd2a32cb7e32c44894b66995/' frameBorder='0' width='100%' height='100%'></iframe> */}

        {/* Background Video */}
        <div className="top-0 lg:-right-16 md:-right-28 -right-32 h-screen absolute flex items-center">
          <video
            className="lg:h-full md:h-3/4 h-3/5"
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

        {/* Blue Glow beisdes video */}
        <div className="absolute right-1/2 top-80 opacity-80 xl:block hidden">
          <div className="absolute -left-5 top-0 w-14 h-14 opacity-25 shadow-lg bg-[#2574cf] rounded-full"></div>
          <div className="absolute left-0 w-24 h-24 opacity-25 shadow-lg bg-[#2574cf] rounded-full"></div>
          <div className="absolute left-14 top-0 rounded-full blur-3xl bg-[#2574cf] w-52 h-52"></div>
        </div>

        {/* Title Text */}
        <div className="pb-0 text-white">
          {/* Heading */}
          <h1 className="animate-tilt-in-bottom-1 xl:text-7xl lg:text-5xl text-3xl uppercase xl:pb-7 pb-3">
            Your Digital Agency <br /> In Analog World
          </h1>

          {/* Scramble Text Animation */}
          <div className="animate-tilt-in-bottom-2 xl:text-3xl text-xl lowercase font-extralight">
            <TextScramble
              id="scramble"
              letterSpeed={40}
              nextLetterSpeed={100}
              texts={[
                "Web Development Company",
                "every pixel Counts",
                "turnkey websites from scratch",
                "digital lifeboat",
                "solutions for web transformation",
                "proudly made in Pakistan",
              ]}
              pauseTime={500}
              revealedColor="#999"
              scrambledColor="#999"
              symbols={[
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
                "!",
                "@",
                "#",
                "$",
                "^",
                "&",
                "*",
                "(",
                ")",
                "_",
                "+",
                "+",
                "_",
                "{",
                "}",
                "[",
                "]",
                "/",
                "|",
                "?",
                ":",
              ]}
            />
          </div>
        </div>

        {/* Email Text */}
        <div className="pb-0 self-end">
          <p className="text-[#999] animate-tilt-in-bottom-3 xl:text-lg text-sm">
            Write to us
          </p>
          <p className="text-[#06FFFF] xl:text-2xl text-lg font-semibold xl:mt-3 animate-tilt-in-bottom-3">
            ammadrana863@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
