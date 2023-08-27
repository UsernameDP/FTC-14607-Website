import React from "react";
//img
import titleSectionImg from "./public/img/team_titleSection.jpg";
//components
import TitleSection from "../../components/titleSection";
import TeamCardGrid from "./components/teamCardGrid";
import TeamCard from "./components/teamCard";

//Team member images
import evelyn_li from "./public/img/members/evelyn.jpg";

function Team() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Meet The Team"}
        content={
          "Our team of highly skilled thinkers, innovators, and engineers."
        }
        image={titleSectionImg}
      />

      <TeamCardGrid>
        <TeamCard
          name={"Evelyn Li"}
          role={"Captain"}
          content={
            "Evelyn is a senior in her third year of FIRST, joining after discovering CAD in a summer camp held by Team 14607. Evelyn enjoys programming and CAD-ing as well as the challenge and learning opportunities that FTC has to offer. Not only is she interested in robotics, but she is also an avid fan of National Geographic magazines (she collects them!) and physics (especially astrophysics!!). Evelyn enjoys art and is an editorial artist for tjTODAY– TJ’s student newspaper. She looks forward to diving deeper into programming."
          }
          image={"img/routes/team/evelyn.jpg"}
        />
      </TeamCardGrid>
    </React.Fragment>
  );
}

export default Team;
