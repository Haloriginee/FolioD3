import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavLinks } from '../constants';
import { style } from '../style';

import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(" ");


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
          <p className='text-white font-bold cursor-pointer text-[18px]'>
            Hang Kévin
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
      </div>
    </nav>
  )
}

export default Navbar
