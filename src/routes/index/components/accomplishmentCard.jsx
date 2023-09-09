import React from "react";

function AccomplishmentCard({ name, content }) {
  return (
    <div className="bg-FTC_LIGHT_GRAY p-6 flex flex-col gap-10 border-4 rounded border-FTC_GRAY">
      <h2 className="font-bold text-3xl text-center xl:text-2xl">{name}</h2>
      <p className="text-center text-lg text-FTC_GRAY xl:text-base">
        {content}
      </p>
    </div>
  );
}

export default AccomplishmentCard;
