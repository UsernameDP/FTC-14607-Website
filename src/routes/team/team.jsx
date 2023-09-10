import React from "react";
RetiredMemberCard;
//components
import TitleSection from "../../components/titleSection";
import ActiveMembersGrid from "./components/activeMembersGrid";
import ActiveMemberCard from "./components/activeMemberCard";
import RetiredMembersGrid from "./components/retiredMembersGrid";
import RetiredMemberCard from "./components/retiredMemberCard";

import ActiveMembersData from "./public/data/activeMembers.json";
import RetiredMemberData from "./public/data/retiredMembers.json";

function Team() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Meet The Team"}
        content={
          "Our team of highly skilled thinkers, innovators, and engineers."
        }
        image={"/img/routes/team/team_titleSection.jpg"}
      />

      <ActiveMembersGrid>
        {ActiveMembersData.map((member, index) => {
          return (
            <ActiveMemberCard
              name={member.name}
              role={member.role}
              content={member.content}
              image={member.image}
              github={member.github}
              key={index}
            />
          );
        })}
      </ActiveMembersGrid>

      <RetiredMembersGrid>
        {RetiredMemberData.map((retiredMember, index) => {
          return (
            <RetiredMemberCard
              name={retiredMember.name}
              role={retiredMember.role}
              image={retiredMember.image}
              github={retiredMember.github}
              key={index}
            />
          );
        })}
      </RetiredMembersGrid>
    </React.Fragment>
  );
}

export default Team;
