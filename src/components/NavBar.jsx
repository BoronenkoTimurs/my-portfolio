import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo-nav-bar.JPG";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const [darkMode, setDarkMode] = useState(undefined);
  const element = window.document.documentElement;

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      element.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      element.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <div className="dark:text-slate-900 dark:bg-white fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-20">
      <div>
        <img src={logo} alt="Logo Image" className="w-12"></img>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <button onClick={switchMode}>
            {!darkMode ? (
              <BsSun className="cursor-pointer hover:text-blue-500" />
            ) : (
              <BiSolidMoon className="cursor-pointer hover:text-blue-500" />
            )}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="cursor-pointer" />
        ) : (
          <FaTimes className="cursor-pointer" />
        )}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "dark:bg-white dark:text-slate-900 absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="my-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <button onClick={switchMode}>
            {!darkMode ? (
              <BsSun className="cursor-pointer text-4xl hover:text-blue-500" />
            ) : (
              <BiSolidMoon className="cursor-pointer text-4xl hover:text-blue-500" />
            )}
          </button>
        </li>
      </ul>
      {/* Social icon */}
      {/* TODO: place soc media info on the bottom of screen when it less then lg */}
      <div className="flex fixed top-[35%] -right-28  lg:left-0 ">
        <ul>
          <li className="social-media bg-[#390099]">
            <a
              href="https://www.linkedin.com/in/timur-boronenko-7586b326a/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="social-media bg-[#6C0079]">
            <a
              href="https://github.com/BoronenkoTimurs"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="social-media bg-[#9E0059]">
              <a
                href="#"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li className="social-media bg-[#FF0054]">
            <a
              href="https://drive.google.com/file/d/12DGGR1IKyzSQGqV-KAAv3ILNNZIJKDgI/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
