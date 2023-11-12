import React from "react";
//data
import cardData from "./public/data/cards.json";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";

function Robots() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Our Robots"}
        content={
          "We work hard to create high tech robots for FTC competitions."
        }
        images={"/img/routes/robots/robots_titleSection.png"}
      />

      <InfoCardGrid>
        {cardData.map((data, index) => {
          return (
            <InfoCard
              name={data.name}
              content={data.content}
              href={data.href}
              key={index}
            />
          );
        })}
      </InfoCardGrid>
    </React.Fragment>
  );
}

export default Robots;
