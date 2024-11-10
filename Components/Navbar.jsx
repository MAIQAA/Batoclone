import React from "react";
import { FaGripLines } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="fixed transition-all 1s w-full flex z-40 p-7 lg:px-16 md:px-10 px-5 justify-between items-center text-white bg-transparent">
        <svg
          width={100}
          viewBox="0 0 120 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4851_4197)">
            <path
              d="M6.97596 26.6794H27.9145V16.6766L-0.00390625 11.1211L6.97596 26.6794Z"
              fill="url(#paint0_linear_4851_4197)"
            ></path>
            <path
              d="M-0.00390625 11.1211L6.97596 26.6794H27.9145L-0.00390625 11.1211Z"
              fill="url(#paint1_linear_4851_4197)"
            ></path>
            <path
              d="M13.3438 18.5595L27.9168 0.00683594L27.9086 26.6811L13.3438 18.5595Z"
              fill="url(#paint2_linear_4851_4197)"
            ></path>
            <path
              className="logo-text"
              d="M43.4225 7.08358C46.1966 7.08358 48.5607 8.0488 50.515 9.97923C52.4693 11.9097 53.4461 14.263 53.4454 17.0393C53.4454 19.8156 52.4682 22.169 50.514 24.0994C48.5597 26.0299 46.1959 26.9967 43.4225 27C40.1461 27 37.6498 25.7508 35.9338 23.2523V26.5079H32.4863V0.00488281H35.9368V10.8313C37.6522 8.33282 40.1474 7.08358 43.4225 7.08358ZM42.9863 23.8118C44.9659 23.8118 46.63 23.1619 47.9788 21.8622C49.3276 20.5624 50.0013 18.9535 50 17.0354C50 15.118 49.3263 13.5091 47.9788 12.2087C46.6314 10.9083 44.9672 10.2584 42.9863 10.259C40.9781 10.259 39.301 10.9089 37.9549 12.2087C36.6089 13.5085 35.9362 15.1187 35.9368 17.0393C35.9368 18.958 36.6106 20.567 37.958 21.8661C39.3054 23.1652 40.9816 23.8151 42.9863 23.8158V23.8118Z"
              fill="white"
            ></path>
            <path
              className="logo-text"
              d="M73.2568 7.57556H76.7042V26.503H73.2568V23.2473C71.54 25.7458 69.0441 26.995 65.7691 26.995C62.995 26.995 60.6308 26.0298 58.6766 24.0994C56.7223 22.1689 55.7448 19.8156 55.7441 17.0393C55.7441 14.263 56.7216 11.9096 58.6766 9.97915C60.6315 8.04871 62.9957 7.0835 65.7691 7.0835C69.0455 7.0835 71.5414 8.33273 73.2568 10.8312V7.57556ZM66.2042 23.8147C68.211 23.8147 69.8885 23.1648 71.2366 21.865C72.5848 20.5652 73.2581 18.9563 73.2568 17.0383C73.2568 15.1209 72.5834 13.512 71.2366 12.2115C69.8899 10.9111 68.2124 10.2612 66.2042 10.2619C64.2247 10.2619 62.5605 10.9118 61.2117 12.2115C59.8629 13.5113 59.1895 15.1202 59.1916 17.0383C59.1916 18.957 59.865 20.5659 61.2117 21.865C62.5585 23.1641 64.2226 23.8144 66.2042 23.8157V23.8147Z"
              fill="white"
            ></path>
            <path
              className="logo-text"
              d="M91.8255 10.755H86.5556V21.014C86.5556 21.9485 86.747 22.6112 87.13 23.0018C87.5129 23.3925 88.1006 23.5943 88.8931 23.6073C89.6856 23.6204 90.6631 23.6015 91.8255 23.5506V26.503C88.8146 26.8813 86.6088 26.6478 85.2081 25.8026C83.8074 24.9573 83.1074 23.3595 83.1081 21.0091V10.755H79.1855V7.57561H83.1081V3.25952L86.5556 2.27539V7.57561H91.8255V10.755Z"
              fill="white"
            ></path>
            <path
              className="logo-text"
              d="M111.032 24.118C108.999 26.0393 106.529 26.9999 103.623 26.9999C100.717 26.9999 98.2543 26.0409 96.2338 24.1228C94.2134 22.2055 93.2031 19.8459 93.2031 17.0441C93.2031 14.2424 94.2134 11.8828 96.2338 9.96545C98.2536 8.04675 100.717 7.08773 103.623 7.08838C106.53 7.08903 108.999 8.04805 111.032 9.96545C113.066 11.8835 114.083 14.2431 114.083 17.0441C114.083 19.8452 113.066 22.2032 111.032 24.118ZM103.623 23.7775C105.603 23.7775 107.267 23.1342 108.616 21.8474C109.965 20.5607 110.638 18.958 110.637 17.0393C110.637 15.1219 109.963 13.5195 108.616 12.2321C107.268 10.9447 105.604 10.301 103.623 10.301C101.669 10.301 100.018 10.9447 98.6707 12.2321C97.3233 13.5195 96.6512 15.1219 96.6547 17.0393C96.6547 18.958 97.328 20.5607 98.6748 21.8474C100.022 23.1342 101.671 23.7775 103.623 23.7775Z"
              fill="white"
            ></path>
            <path
              className="logo-text"
              d="M120.004 23.1504H116.494V26.5039H120.004V23.1504Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_4851_4197"
              x1="0.841827"
              y1="13.5863"
              x2="17.8202"
              y2="22.6506"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.14" stopColor="#06FFFF"></stop>
              <stop offset="0.38" stopColor="#05F9FF"></stop>
              <stop offset="0.7" stopColor="#02E8FF"></stop>
              <stop offset="0.88" stopColor="#00DBFF"></stop>
              <stop offset="0.92" stopColor="#00CBF4"></stop>
              <stop offset="0.99" stopColor="#00A2D7"></stop>
              <stop offset="1" stopColor="#009ED4"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_4851_4197"
              x1="23.3981"
              y1="33.1838"
              x2="5.96455"
              y2="12.3151"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.41" stopColor="#06FFFF"></stop>
              <stop offset="0.55" stopColor="#03EFFF"></stop>
              <stop offset="0.69" stopColor="#00DBFF"></stop>
              <stop offset="0.79" stopColor="#00CBF4"></stop>
              <stop offset="0.98" stopColor="#00A2D7"></stop>
              <stop offset="1" stopColor="#009ED4"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_4851_4197"
              x1="29.2172"
              y1="2.5249"
              x2="21.4931"
              y2="22.3125"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.33" stopColor="#06FFFF"></stop>
              <stop offset="0.54" stopColor="#03EFFF"></stop>
              <stop offset="0.75" stopColor="#00DBFF"></stop>
              <stop offset="0.83" stopColor="#00CBF4"></stop>
              <stop offset="0.98" stopColor="#00A2D7"></stop>
              <stop offset="1" stopColor="#009ED4"></stop>
            </linearGradient>
            <clipPath id="clip0_4851_4197">
              <rect width="120" height="27" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        {/* Menu Button */}
        <button className="border border-[#06FFFF] bg-gray-950 text-[#06FFFF] uppercase px-7 py-3 rounded-lg flex items-center gap-7">
          Menu <FaGripLines className="size-7" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
