import React from "react";
import GithubSvg from "./public/svg/github.svg";
import TwitterSvg from "./public/svg/Twitter.svg";

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
        <section className="flex items-center h-20 px-20 gap-5 mx-auto max-w-8xl">
          <a
            href="https://github.com/UsernameDP/FTC-14607-Website"
            target="_blank"
          >
            <img
              src={GithubSvg}
              alt="github_svg"
              className="w-7"
            />
          </a>
          <a
            href="https://twitter.com/ftc14607"
            target="_blank"
          >
            <img
              src={TwitterSvg}
              alt="github_svg"
              className="w-7"
            />
          </a>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
