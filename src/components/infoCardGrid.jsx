import React from "react";
import Section from "./section";

function InfoCardGrid({ children }) {
  return (
    <Section>
      <div className="grid gap-5 mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
    </Section>
  );
}

export default InfoCardGrid;
