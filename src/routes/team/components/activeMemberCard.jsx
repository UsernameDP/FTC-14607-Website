import React from "react";

function ActiveMemberCard({ name, role, content, image, github }) {
  return (
    <div>
      <div className="bg-FTC_LIGHT_GRAY px-6 pt-6 pb-14 flex flex-col gap-5 rounded-sm">
        <section className="flex flex-row gap-5">
          <img
            src={image}
            alt={image}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="text-2xl">{name}</p>
            <p className="text-base text-FTC_LIGHTER_GRAY font-medium">
              {role}
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
        <section className="text-lg text-FTC_LIGHTER_GRAY font-light">
          {content}
        </section>
      </div>
    </div>
  );
}

export default ActiveMemberCard;
