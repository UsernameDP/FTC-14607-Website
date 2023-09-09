import React from "react";

function AccomplishmentCard({ name, content }) {
  return (
    <div className="bg-FTC_LIGHT_GRAY p-6 flex flex-col gap-10 border-4 rounded border-FTC_GRAY">
      <h2 className="font-bold text-center text-xl xl:text-2xl">{name}</h2>
      <p className="text-center text-FTC_GRAY text-base 2xl:text-lg">
        {content}
      </p>
    </div>
  );
}

export default AccomplishmentCard;
