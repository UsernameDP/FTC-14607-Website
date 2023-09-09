import React from "react";

function InfoCard({ name, content, href }) {
  return (
    <div className="flex flex-col gap-3 p-10 transition-all delay-250 hover:shadow-xl hover:-translate-y-1 rounded-lg">
      <div>
        <a
          href={href}
          className="relative text-2xl font-medium 2xl:font-semibold text-FTC_RED transition-all underline-props hover:brightness-75 hover:underline-transition after:bg-FTC_RED after:-bottom-1"
        >
          {name}
        </a>
      </div>
      <p className="text-lg text-FTC_GRAY">{content}</p>
    </div>
  );
}

export default InfoCard;
