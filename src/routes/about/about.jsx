import React from "react";
import PublicMarkdown from "../../components/publicMarkdown";

function About() {
  return (
    <PublicMarkdown
      underWhichPublicDir={"/md/routes/"}
      parentRoute={"about/"}
      paramRouteName={"*"}
    />
  );
}

export default About;
