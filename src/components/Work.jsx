import React from "react";
import rlIMG from "../assets/RLIMG.png";
import snakeGame from "../assets/snake.jpg";
import crypto from "../assets/crypto.webp";
import weather from "../assets/weather.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#5065a8]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${rlIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking wider">
                Rocket League Database
              </span>
              <div className="pt-8 text-center">
                <a href="https://full-stack-website.salamackmatthew.repl.co/">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend
                  </button>
                </a>
                <a href="https://replit.com/@salamackMatthew/Full-Stack-Website#index.js">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend Code
                  </button>
                </a>
                <a href="https://restful-client-for-csci-345-final-assignment.salamackmatthew.repl.co/">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Client
                  </button>
                </a>
                <a href="https://replit.com/@salamackMatthew/restful-client-for-CSCI-345-Final-Assignment#index.html">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Client Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${snakeGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                JavaScript Snake Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://snake-game-matthew-salamack-csci-345.salamackmatthew.repl.co/index.html?">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://replit.com/@salamackMatthew/Snake-Game-Matthew-Salamack-CSCI-345#index.html">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${crypto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crypto Price Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://moflaky.github.io/Crypto-Price-App-Project/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/moflaky/Crypto-Price-App-Project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="https://moflaky.github.io/react-weather-app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/moflaky/react-weather-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
