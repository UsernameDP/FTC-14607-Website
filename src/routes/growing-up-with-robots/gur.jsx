import React from "react";
//data
import cardData from "./public/data/cards.json";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";
import Section from "../../components/section";

function Gur() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Growing Up With Robotics"}
        content={
          "We believe in promoting STEM and robotics in our community. Since 2018, we have strived to spread our enthusiasm for STEM to young students in our community.        Over these past years, we’ve worked with our school (TJHSST) and Fairfax County Public Schools (FCPS) to build the Growing Up with Robotics initiative to bring an extensive and complete STEM education to students from FCPS Title I schools through robotics classes, taught with a curriculum we designed specifically to help students discover robotics to their fullest potential. Just last year, through our Saturday instructional sessions and summer camps, we’re proud to have been able to teach 100 students from Title I schools, among many others! In addition, we’ve strived to present at STEM faires, community events, and various exhibitions and expos to further our STEM and robotics impact on our local community. Since then, we've earned a non-profit status which we hope to utilize for international impact!"
        }
        images={"/img/routes/growing-up-with-robots/gur_titleSection.jpg"}
      />

      <InfoCardGrid>
        {cardData.map((data, index) => {
          return (
            <InfoCard
              name={data.name}
              content={data.content}
              href={data.href}
              key={index}
            />
          );
        })}
      </InfoCardGrid>

      <Section>
        <br></br>
        <i>
          {
            "Nonprofit founded by Akul Dixit ('25) and Shirdi Palle ('26)."
          }
        </i>
      </Section>
    </React.Fragment>
  );
}

export default Gur;
