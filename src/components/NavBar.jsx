import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { BiSolidMoon } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

import Logo from '../assets/navbar/logo.JPG';

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
      localStorage.setItem('darkMode', 'true');
      element.classList.add('dark');
    } else if (darkMode === false) {
      localStorage.setItem('darkMode', 'false');
      element.classList.remove('dark');
    } else {
      setDarkMode(localStorage.getItem('darkMode') === 'true');
    }
  }, [darkMode]);

  return (
    <div className='dark:text-slate-900 dark:bg-white fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-20'>
      <div>
        <img src={Logo} alt='Logo Image' className='w-12'></img>
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <button onClick={switchMode}>
            {!darkMode ? (
              <BsSun className='cursor-pointer hover:text-blue-500' />
            ) : (
              <BiSolidMoon className='cursor-pointer hover:text-blue-500' />
            )}
          </button>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? (
          <FaBars className='cursor-pointer' />
        ) : (
          <FaTimes className='cursor-pointer' />
        )}
      </div>

      <ul className={
        !nav
          ? 'hidden'
          : 'dark:bg-white dark:text-slate-900 absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '
        }
      >
        <li className='my-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='my-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='my-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='my-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='my-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <button onClick={switchMode}>
            {!darkMode ? (
              <BsSun className='cursor-pointer text-4xl hover:text-blue-500' />
            ) : (
              <BiSolidMoon className='cursor-pointer text-4xl hover:text-blue-500' />
            )}
          </button>
        </li>
      </ul>

      <div className='social-media-container flex fixed top-1/2 -right-28 lg:left-0 lg:absolute lg:top-[500%] lg:right-auto'>
        <ul>
          <li className='social-media bg-[#390099]'>
            <a target='blank' href='https://www.linkedin.com/in/timur-boronenko-7586b326a/'>
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='social-media bg-[#6C0079]'>
            <a target='blank' href='https://github.com/BoronenkoTimurs'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <Link to='contact' smooth={true} duration={500}>
            <li className='social-media bg-[#9E0059]'>
              Email
              <HiOutlineMail size={30}/>
            </li>
          </Link>
          <li className='social-media bg-[#FF0054]'>
            <a target='blank' href='https://drive.google.com/file/d/1uiks9DeB0yHd3ZIrWalylsaQrhTHAFJH/view?usp=sharing'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
