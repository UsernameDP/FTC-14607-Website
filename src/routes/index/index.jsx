import React from "react";
//data
import cardData from "./public/data/cards.json";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";
import Banner from "../../components/banner";

import Accomplishments from "./components/accomplishments";

function Index() {
  return (
    <React.Fragment>
      <TitleSection
        name={"FTC 14607 - Robot Uprising"}
        content={
          "We are FIRST Tech Challenge Team 14607, Robot Uprising, from Thomas Jefferson High School for Science and Technology, in Alexandria, VA. This is our sixth year as a team in FIRST Robotics, and we are excited to compete in the FIRST Tech Challenge."
        }
        images={[
          "/img/routes/index/1.jpg",
          "/img/routes/index/2.jpg",
          "/img/routes/index/3.jpg",
          "/img/routes/index/4.jpg",
          "/img/routes/index/5.jpg",
          "/img/routes/index/6.jpg",
          "/img/routes/index/7.jpg",
          "/img/routes/index/8.jpg",
          "/img/routes/index/9.jpg"
        ]}
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
      <Accomplishments />
    </React.Fragment>
  );
}

export default Index;
