import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavLinks } from '../constants';
import { style } from '../style';

import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);


  return (
    <nav
      className=
        {`${style.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full max-w-7xl mx-auto justify-between flex items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(" ");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <p className='flex text-white font-bold cursor-pointer text-[18px]'>
            Hang Kévin &nbsp;
            <span className='sm:block hidden'>
              | Phôking Hangsome
            </span>
          </p>

        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {NavLinks.map((Link) => (
            <li key={Link.id} className={`${
              active === Link.title
                ? "text-white"
                : "text-secondary"
            }
              hover:text-white cursor-pointer font-medium text-[18px]
            `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className='flex flex-1 justify-end items-center sm:hidden'>
          <img
            className='cursor-pointer object-contain w-[28px] h-[28px]'
            src={toggle ? close : menu}
            alt="mobile nav"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`p-6 ${!toggle ? 'hidden' : 'flex'} absolute top-20 right-0 my-2 mx-4 rounded-xl min-w-[140px] z-10 black-gradient`}>
            <ul className='list-none flex flex-col items-start justify-end gap-4'>
              {NavLinks.map((Link) => (
                <li key={Link.id} className={`${
                  active === Link.title
                    ? "text-white"
                    : "text-secondary"
                }
                  cursor-pointer text-[16px] font-medium font-poppins
              `}
                  onClick={() =>{
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
