import React from "react";
//img
import teampic from "./public/img/teampic.png";
//components
import TitleSection from "../../components/titleSection";
import Card from "../../components/card";
import CardGrid from "../../components/cardGrid";

function Index() {
  return (
    <React.Fragment>
      <TitleSection
        name={"FTC 14607 - Robot Uprising"}
        content={
          "We are FIRST Tech Challenge Team 14607, Robot Uprising, from Thomas Jefferson High School for Science and Technology, in Alexandria, VA. This is our sixth year as a team in FIRST Robotics, and we are excited to compete in the FIRST Tech Challenge."
        }
      >
        <img
          src={teampic}
          alt="teampic"
          className="w-1/2 h-1/2 aspect-auto"
        />
      </TitleSection>

      <CardGrid col={4}>
        <Card
          name={"Perspecta Case Study"}
          content={
            "Perspecta is the result of a merger between 3 defense contractors - Vencore, DXE, and Keypoint. This company has been…"
          }
          href={""}
        ></Card>

        <Card
          name={"Perspecta Case Study"}
          content={
            "Perspecta is the result of a merger between 3 defense contractors - Vencore, DXE, and Keypoint. This company has been…"
          }
          href={""}
        ></Card>

        <Card
          name={"Perspecta Case Study"}
          content={
            "Perspecta is the result of a merger between 3 defense contractors - Vencore, DXE, and Keypoint. This company has been…"
          }
          href={""}
        ></Card>
        <Card
          name={"Perspecta Case Study"}
          content={
            "Perspecta is the result of a merger between 3 defense contractors - Vencore, DXE, and Keypoint. This company has been…"
          }
          href={""}
        ></Card>
        <Card
          name={"Perspecta Case Study"}
          content={
            "Perspecta is the result of a merger between 3 defense contractors - Vencore, DXE, and Keypoint. This company has been…"
          }
          href={""}
        ></Card>
      </CardGrid>
    </React.Fragment>
  );
}

export default Index;
