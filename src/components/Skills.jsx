import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Jira from "../assets/jira.png";
import Vue from "../assets/vue.png";
import TypeScript from "../assets/typescript.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="dark:bg-white dark:text-slate-900 w-full h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Vue} alt="HTML icon" />
            <p className="my-4">VUE</p>
          </div>
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Jira} alt="HTML icon" />
            <p className="my-4">JIRA</p>
          </div>
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          {/* TODO: fix TS picture */}
          <div className="dark:shadow-[#c5c6c7] shadow-md shadow-[#040c16] flex flex-col  justify-center hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={TypeScript} alt="HTML icon" />
            <p className="my-4">TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
