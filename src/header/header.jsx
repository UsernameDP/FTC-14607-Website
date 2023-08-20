import React from "react";

function Header() {
  const navReferences = [
    "Sponsorship",
    "Team",
    "About",
    "Robots",
    "Growing-Up-With-Robots",
    "Outreach",
    "Contact"
  ];

  return (
    <header className="left-0 right-0 top-0 z-10 bg-white relative shadow-sm w-full">
      <section className="flex flex-row mx-auto max-w-6xl items-center justify-between p-4 text-black">
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
                href={reference.toLowerCase()}
                key={index}
                className="hover:underline-transition font-normal relative transition-all druation-1000 after:absolute after:-left-0 after:top-8 after:h-0.5 after:w-0 after:bg-FTC_RED after:transition-all after:duration-500 after:content-['']"
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
