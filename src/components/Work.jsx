import React from "react";
import GameHub from "../assets/gamehub.JPG";
import Mosh from "../assets/mosh.JPG";

const Work = () => {
  return (
    <div name="work" className=" dark:bg-white dark:text-slate-900 mt-20 w-full pt-8 md:h-screen text-gray-300 bg-[#0a192f]">
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
            className="work-grid-item group content-div"
          >
            {/* Hover Effects */}
            <div className=" text-center opacity-0 group-hover:opacity-100 duration-500">
              <span className="work-title">
                TypeScript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://ggaming-hub.netlify.app">
                  <button className="work-btn-demo">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/BoronenkoTimurs/game-hub">
                  <button className="work-btn-code">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Mosh})` }}
            className="work-grid-item group content-div"
          >
            {/* Hover Effects */}
            <div className="text-center opacity-0 group-hover:opacity-100 duration-500">
              <span className="work-title">
                HTML/CSS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://moshexample.netlify.app">
                  <button className="work-btn-demo">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/BoronenkoTimurs/firstWebPage">
                  <button className="work-btn-code">
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
