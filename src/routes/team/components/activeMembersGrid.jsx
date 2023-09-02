import React from "react";
import Section from "../../../components/section";

function ActiveMembersGrid({ children }) {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{children}</div>
    </Section>
  );
}

export default ActiveMembersGrid;
