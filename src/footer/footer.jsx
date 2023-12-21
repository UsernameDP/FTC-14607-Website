import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col text-white absolute left-0 bottom-0 right-0 mx-auto">
      {/* Top */}
      <section className="w-full bg-red-500">
        <section className="flex justify-between items-center h-20 px-20 max-w-8xl mx-auto">
          <h3 className="font-bold text-2xl">FTC 14607 - Robot Uprising</h3>
          <div className="flex flex-row gap-8">
            <a href="/">Home</a>
            <a href="/contact"> Contact</a>
          </div>
        </section>
      </section>
      {/* Bottom */}
      <section className="w-full bg-red-700">
        <section className="flex items-center justify-between h-20 px-20 mx-auto max-w-8xl">
          <div className="flex gap-5">
            <a
              href="https://github.com/UsernameDP/FTC-14607-Website"
              target="_blank"
            >
              <img
                src={"/svg/footer/github.svg"}
                alt="github_svg"
                className="w-7"
              />
            </a>
            <a
              href="https://twitter.com/ftc14607"
              target="_blank"
            >
              <img
                src={"/svg/footer/twitter.svg"}
                alt="github_svg"
                className="w-7"
              />
            </a>
          </div>

          <div className="flex">
            <p className="mr-1">Made with &hearts; by</p>
            <a
              href="https://github.com/UsernameDP"
              className="relative hover:font-bold"
              target="_blank"
            >
              Devin Park
            </a>
            <a>&nbsp;and&nbsp;</a>
            <a
              href="https://github.com/2024eli"
              className="relative hover:font-bold"
              target="_blank"
            >
              Evelyn Li
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
