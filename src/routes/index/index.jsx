import React from "react";
//img
import titleSectionImg from "./public/img/index_titleSection.png";
//data
import cardData from "./public/data/cards.json";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";

function Index() {
  return (
    <React.Fragment>
      <TitleSection
        name={"FTC 14607 - Robot Uprising"}
        content={
          "We are FIRST Tech Challenge Team 14607, Robot Uprising, from Thomas Jefferson High School for Science and Technology, in Alexandria, VA. This is our sixth year as a team in FIRST Robotics, and we are excited to compete in the FIRST Tech Challenge."
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

export default Index;
