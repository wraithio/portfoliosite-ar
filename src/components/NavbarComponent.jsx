import { useState } from "react";

const NavbarComponent = () => {
  const[mobile,setMobile] = useState(false)
  return (
    <nav className="fixed top-0 overflow-hidden bg-black/25 from-transparent to-black w-full backdrop-blur-[3px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="/insigoutline.png" alt="logo" className="w-16" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobile(!mobile)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={mobile ?"block w-full" :"hidden w-full md:block md:w-auto"} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:backdrop-blur-none backdrop-blur-sm md:mt-0 md:border-0">
            <li className="m-0">
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:border-0 md:p-0 hover:text-emerald-200 hover:shadow-xl hover:animate-[bounce_1s]" onClick={() => setMobile(!mobile)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white rounded-sm md:border-0 md:p-0 hover:text-emerald-200 hover:shadow-xl hover:animate-[bounce_1s]" onClick={() => setMobile(!mobile)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="block py-2 px-3 text-white rounded-sm md:border-0 md:p-0 hover:text-emerald-200 hover:shadow-xl hover:animate-[bounce_1s]" onClick={() => setMobile(!mobile)}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-white rounded-sm md:border-0 md:p-0 hover:text-emerald-200 hover:shadow-xl hover:animate-bounce hover:underline" onClick={() => setMobile(!mobile)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
