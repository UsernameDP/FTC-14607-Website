import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Section from "./section";

function PublicMarkdown({
  //get a markdown from public directory
  underWhichPublicDir,
  parentRoute,
  paramRouteName
}) {
  const [infoDoc, setInfoDoc] = useState("");
  const navigate = useNavigate();

  const paramRouteInfo = useParams();
  const pathToMarkDown_inPublic = `/${underWhichPublicDir}/${parentRoute}/${paramRouteInfo[paramRouteName]}.md`;
  console.log(pathToMarkDown_inPublic);

  useEffect(() => {
    fetch(pathToMarkDown_inPublic)
      .then((res) => {
        if (!res.ok) {
          navigate("/404");
          throw new Error(
            `${pathToMarkDown_inPublic} is not a valid path in public directory`
          );
        }

        return res.text();
      })
      .then((markDown) => {
        setInfoDoc(markDown);
      });
  }, []);

  return (
    <Section>
      <article className="flex flex-col px-10 prose lg:prose-xl prose-h1:font-medium prose-h2:font-normal prose-h3:font-normal prose-h4:font-normal prose-h5:normal prose-h6:font-normal prose-p:font-normal prose-p:text-lg prose-p:text-FTC_LIGHTER_GRAY prose-a:text-FTC_RED prose-a:font-normal">
        <ReactMarkdown>{infoDoc}</ReactMarkdown>
        <p></p>
      </article>
    </Section>
  );
}

export default PublicMarkdown;
