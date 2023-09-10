import React from "react";
import PublicMarkdown from "../../components/publicMarkdown";

function About() {
  return (
    <PublicMarkdown
      underWhichPublicDir={"md/routes"}
      parentRoute={"about/about.md"}
    />
  );
}

export default About;
