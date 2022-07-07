import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiAlignRight } from 'react-icons/fi';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <>
      <div className="navBg" />
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 nav-layout">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white text-xl"
              href="/"
            >
              Math Magicians
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiAlignRight />
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow items-center${
                navbarOpen ? ' flex' : ' hidden'}`
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {links.map((link) => (
                <li className="nav-item px-3 py-2 flex items-center text-lg text-white hover:opacity-75" key={link.id}>
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active-link' : 'link-text')}>
                    {link.text}
                  </NavLink>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
