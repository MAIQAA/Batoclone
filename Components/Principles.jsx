import React from "react";

const Principles = () => {
  const principles = [
    {
      id: 1,
      heading: "Quality",
      content: `We are sure about the quality of our services, since delivering
              pixel perfect and smooth product to our clients is our main goal.
              By prioritizing quality throughout the development process and
              beyond, we create exceptional digital experiences that drive user
              engagement, satisfaction, and business success for our partners.`,
      shape: (
        <div className="absolute right-7 top-11 border-2 border-white rounded-full size-32 group-hover:border-[#06FFFF] group-hover:transition-border group-hover:duration-500"></div>
      ),
    },
    {
      id: 2,
      heading: "Respect of delays",
      content: `There is nothing to even talk about with the partner who doesn't respect your delays, since it is essential in any professional relationship. We always understand that our partners have their own schedules, priorities, and constraints and we respect them as they are our own ones.`,
      shape: (
        <div className="rotate-90 absolute top-14 right-7 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[90px] border-transparent border-b-white group-hover:border-b-[#06FFFF] group-hover:transition-border group-hover:duration-500">
          <div className="absolute top-1 left-[-57px] w-0 h-0 border-l-[57px] border-r-[57px] border-b-[84px] border-transparent border-b-[#040404]"></div>
        </div>
      ),
    },
    {
      id: 3,
      heading: "Constant Growth",
      content: `We never stop growing. In this world you can never stop, especially in a digital world. Thus, we can be always sure that our services are up-to-date, top-notch and in demand.`,
      shape: (
        <div className="absolute right-11 top-11 border-2 border-white size-32 group-hover:border-[#06FFFF] group-hover:transition-border group-hover:duration-500"></div>
      ),
    },
    {
      id: 4,
      heading: "Long-Term partnership",
      content: `We always tend to collaborate effectively, communicate openly, and work towards common goals, leading to increased efficiency, productivity, and innovation. This is why long-term partnership is our biggest value not only as a business strategy, but it is our greatest belief.`,
      shape:  <div className="absolute right-16 top-16 border-2 border-white size-20 group-hover:border-[#06FFFF] group-hover:transition-border group-hover:duration-500"></div>,
    },
  ];

  return (
    <div className="relative grid justify-center text-white lg:px-16 md:px-10 px-5 space-y-10">
      <h1 className="text-5xl uppercase text-center mb-10">
        Our Guiding Principles.
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-between">
        {principles.map((principle) => (
          <div
            key={principle.id}
            className="relative p-11 border-t border-l border-r border-gray-400 bg-[#040404] group"
          >
            <div className="relative self-start w-2/3 space-y-10">
              <h1 className="text-4xl principles">{principle.heading}</h1>
              <p className="text-base text-gray-300">{principle.content}</p>
            </div>

            <div className="absolute right-11 top-11 border-2 border-white rounded-full size-32 blur-sm group-hover:border-[#06FFFF] group-hover:transition-border group-hover:duration-500"></div>
            <div>{principle.shape}</div>
            <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>
            <span className="absolute left-0 top-0 h-0 w-0 border-t-2 delay-75 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 delay-100 border-[#06FFFF] transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 delay-150 border-[#06FFFF] transition-all duration-500 group-hover:h-full"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
