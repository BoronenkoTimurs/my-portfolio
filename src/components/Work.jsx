import React from "react";
import GameHub from "../assets/gamehub.JPG";
import Mosh from "../assets/mosh.JPG";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl border-b-4 font-bold inline text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some fo my recent work!</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${GameHub})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto cursor-pointer content-div"
          >
            {/* Hover Effects */}
            <div className=" text-center opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://ggaming-hub.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/BoronenkoTimurs/game-hub">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Mosh})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto cursor-pointer content-div"
          >
            {/* Hover Effects */}
            <div className="text-center opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://moshexample.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/BoronenkoTimurs/firstWebPage">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
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
