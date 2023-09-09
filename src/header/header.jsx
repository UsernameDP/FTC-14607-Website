import React from "react";

function Header() {
  const navReferences = [
    "Sponsorship",
    "Team",
    "About",
    "Robots",
    "Growing-Up-With-Robots",
    "Outreach",
    "Club",
    "Contact"
  ];

  return (
    <header className="left-0 right-0 top-0 z-10 bg-white absolute shadow-sm w-full">
      <section className="px-10 flex flex-row mx-auto max-w-7xl items-center justify-between p-4 text-black">
      <section className="px-10 flex flex-row mx-auto max-w-7xl items-center justify-between p-4 text-black">
        <a
          href="/"
          className="text-3xl"
        >
          <span className="text-FTC_RED">FTC</span> 14607
        </a>
        {/* Nav references below */}

        <nav className="flex items-center text-xl gap-5 text-FTC_RED">
          {navReferences.map((reference, index) => {
            return (
              <a
                href={`/${reference.toLowerCase()}`}
                key={index}
                className="xl:text-base  hover:underline-transition hover:font-semibold hover:-translate-y-1 font-normal relative transition-all druation-1000 underline-props after:bg-FTC_RED after:bottom-0"
              >
                {reference.replace(/-/g, " ")}
              </a>
            );
          })}
        </nav>
      </section>
    </header>
  );
}

export default Header;
