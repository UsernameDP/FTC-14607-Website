import React from "react";

function RetiredMemberCard({ name, role, image, github }) {
  return (
    <div className="flex">
      <section className="flex gap-5">
        <img
          src={image}
          alt={image}
          className="rounded-full w-18 h-18 object-cover"
        />
        <div className="flex flex-col">
          <p className="text-2xl">{name}</p>
          <p className="text-base text-FTC_LIGHTER_GRAY font-medium">
            {"Previous " + role.trim()}
          </p>

          {github != undefined ? (
            <a
              className="text-xl text-FTC_RED"
              href={github}
              target="_blank"
            >
              Github
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default RetiredMemberCard;
