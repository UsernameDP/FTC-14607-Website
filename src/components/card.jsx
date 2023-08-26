import React from "react";

function Card({ name, content, href }) {
  return (
    <div className="flex flex-col max-w-2xl gap-3 p-5 transition-all delay-500 hover:drop-shadow-xl rounded-lg">
      <a
        href={href}
        className="text-3xl font-semibold text-FTC_RED transition-all"
      >
        {name}
      </a>
      <p className="text-lg text-FTC_GREY transition-all">{content}</p>
    </div>
  );
}

export default Card;
