import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import { useLocation } from "react-router-dom";

function Header() {
  const [mobileMenuIsOpen, setMobileMenu] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenuIsOpen);
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const navReferences = [
    "Sponsorship",
    "Team",
    "About",
    "Robots",
    "Growing-Up-With-Robots",
    "Club",
    "Donate",
    "Contact"
  ];

  return (
    <header className="left-0 right-0 top-0 z-10 bg-white fixed shadow-sm w-full">
      {location.pathname==='/' ? <Banner/> : null}
      <section className="px-10 flex flex-row mx-auto max-w-7xl items-center justify-between p-4 text-black">
        <a
          href="/"
          className="text-3xl"
        >
          <span className="text-FTC_RED">FTC</span> 14607
        </a>
        {/* Nav references below */}
        <nav className="items-center text-xl gap-5 text-FTC_RED hidden md:flex">
          {navReferences.map((reference, index) => {
            return (
              <a
                href={`/${reference.toLowerCase()}`}
                key={index}
                className=" text-sm xl:text-base 2xl:text-xl hover:underline-transition hover:font-semibold hover:-translate-y-1 font-normal relative transition-all druation-1000 underline-props after:bg-FTC_RED after:bottom-0"
              >
                {reference.replace(/-/g, " ")}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <section>
          <button
            onClick={toggleMobileMenu}
            className="relative md:hidden flex w-8 h-8"
          >
            <div
              className={`absolute transition-transform duration-500 content-[''] top-4 bg-FTC_RED w-full rounded-sm before:transition-all before:duration-500 before:absolute before:content-[''] before:left-0 before:w-full before:h-1 before:rounded-sm before:bg-FTC_RED after:transition-all after:duration-500 after:absolute after:content-[''] after:left-0 after:w-full after:h-1 after:rounded-sm after:bg-FTC_RED   ${
                mobileMenuIsOpen
                  ? "h-0 rotate-180 before:translate-y-0 after:translate-y-0 before:rotate-45 after:-rotate-45"
                  : "h-1 before:-translate-y-2.5 after:translate-y-2.5 "
              }`}
            ></div>
          </button>

          <nav
            className={` text-center fixed overflow-hidden transition-all duration-500 left-0 top-16 bottom-0 w-screen bg-white flex flex-col items-center justify-center gap-6 text-FTC_RED text-4xl ${
              mobileMenuIsOpen ? "h-full" : "h-0"
            }`}
          >
            {navReferences.map((reference, index) => {
              return (
                <a
                  href={`/${reference.toLowerCase()}`}
                  key={index}
                  className="hover:underline-transition hover:font-semibold hover:-translate-y-1 font-normal relative transition-all druation-1000 underline-props after:bg-FTC_RED after:bottom-0"
                >
                  {reference.replace(/-/g, " ")}
                </a>
              );
            })}
          </nav>
        </section>
      </section>
    </header>
  );
}

export default Header;
