import React from "react";

function Card({ name, content, href }) {
  return (
    <div className="flex flex-col max-w-2xl gap-3">
      <a
        href={href}
        className="text-3xl font-semibold text-FTC_RED"
      >
        {name}
      </a>
      <p className="text-lg text-FTC_GREY">{content}</p>
    </div>
  );
}

export default Card;
