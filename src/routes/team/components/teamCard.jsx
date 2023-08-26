import React from "react";

function TeamCard({ name, role, content, image, github, retired = false }) {
  if (!retired) {
    return (
      <div className="bg-FTC_LIGHT_GRAY p-6 flex flex-col gap-5 rounded-sm">
        <section className="flex flex-row gap-8">
          <img
            src={image}
            alt={image}
            className="w-24 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-2xl">{name}</p>
            <p className="text-base text-FTC_LIGHTER_GRAY font-medium">
              {role}
            </p>
          </div>
        </section>
        <section className="text-lg text-FTC_LIGHTER_GRAY font-light">
          {content}
        </section>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default TeamCard;
