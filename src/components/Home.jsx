import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="dark:text-slate-900 dark:bg-white w-full h-screen  bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-pink-600 mb-2">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Timurs Boronenko
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer/Junior QA Engineer!
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          This is just the initial version of my portfolio. In the near future I
          plan to change the style a bit and add some interesting and beautiful
          features to the site. In the meantime nice to meet you, write a review
          (bad, good, it does not matter). I will be glad to all of you!
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="dark:text-slate-900 dark:font-bold dark:border-pink-600 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
