import React from "react";

//img
import titleSectionImg from "./public/img/sponsorship_titleSection.png";
//data
import cardData from "./public/data/cards.json";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";

function Sponsorship() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Businesses help our team"}
        content={
          "Running an FTC Team is expensive, with costs running as high as $20,000 dollars. See how you can help our team compete, and empower the next generation of innovators."
        }
        image={titleSectionImg}
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

export default Sponsorship;
