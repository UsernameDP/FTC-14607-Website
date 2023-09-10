import React from "react";
//data
import cardData from "./public/data/cards.json";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";

function Outreach() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Other Outreach"}
        content={
          "STEM and robotics are a big part of our community. Among our other core values such as community, collaboration, and nuturing, we also want to build a culture of innovation through FIRST."
        }
        image={"/img/routes/outreach/outreach_titleSection.jpg"}
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

export default Outreach;
