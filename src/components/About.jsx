import React from "react";

const About = () => {
  return (
    <div name="about" className="dark:bg-white dark:text-slate-900 w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, i am Timurs, nice to meet you! Please take a look around!</p>
          </div>
          <div>
            <p>
              I started my journey in IT two years ago at university, but it was
              hard to decide what I wanted and where to start in this endless
              ocean of knowledge. And after 2 years, I finally came to the
              discipline, clear goals and deadlines for myself, which has
              already brought its benefits in the form of knowledge in web
              development and QA.
              <br />
              As for now, I am still building my knowledge base in programming
              and actively looking for internship in Programming in order to
              build even deeper knowledge in this field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
