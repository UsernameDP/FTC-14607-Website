import React from "react";
import InfoCardGrid from "../../../components/infoCardGrid";
import accomplishmentCardData from "../public/data/accomplishments.json";
import AccomplishmentCard from "./accomplishmentCard";

function Accomplishments() {
  return (
    <section className="w-full  py-20 px-28 flex-auto">
      <InfoCardGrid>
        {accomplishmentCardData.map((data, index) => {
          return (
            <AccomplishmentCard
              name={data.name}
              content={data.content}
              key={index}
            />
          );
        })}
      </InfoCardGrid>
    </section>
  );
}

export default Accomplishments;
