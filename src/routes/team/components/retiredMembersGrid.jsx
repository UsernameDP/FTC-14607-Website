import React from "react";
import Section from "../../../components/section";

function RetiredMembersGrid({ children }) {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10 w-11/12 mx-auto">
        {children}
      </div>
    </Section>
  );
}

export default RetiredMembersGrid;
