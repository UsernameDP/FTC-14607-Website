import React from "react";
import TitleSection from "../../components/titleSection";
import InfoCardGrid from "../../components/infoCardGrid";
import InfoCard from "../../components/infoCard";

import cardData from "./public/data/cards.json";

function Club() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Competitive Robotics Club"}
        content={
          "The Competitive Robotics Club is an 8th period club founded in the 2022-23 school year at TJHSST."
        }
        image={"/img/routes/club/club_titleSection.jpg"}
      />

      <InfoCardGrid>
        {cardData.map((data, index) => {
          return (
            <InfoCard
              name={data.name}
              content={data.content}
              href={data.href}
            />
          );
        })}
      </InfoCardGrid>
    </React.Fragment>
  );
}

export default Club;
