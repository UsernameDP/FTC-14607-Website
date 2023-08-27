import React from "react";
import TitleSection from "../../components/titleSection";

function InvalidRoute() {
  return (
    <TitleSection
      name={"404"}
      content={"Not a valid path"}
    />
  );
}

export default InvalidRoute;
