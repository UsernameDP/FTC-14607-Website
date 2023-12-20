import React from "react";
//data
import cardData from "./public/data/cards.json";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";
import Donations from "./components/donations";
import PhotoBanner from "../../components/PhotoBanner";

function Sponsorship() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Businesses help our team"}
        content={
          "Running an FTC Team is expensive, with costs running as high as $20,000 dollars. See how you can help our team compete, and empower the next generation of innovators."
        }
      />

      <PhotoBanner
        images={[
          "/img/routes/sponsorship/sponsors/bae_systems.png",
          "/img/routes/sponsorship/sponsors/go_builda.png",
          "/img/routes/sponsorship/sponsors/jane_street.png",
          "/img/routes/sponsorship/sponsors/rcube.png",
          "/img/routes/sponsorship/sponsors/send_cut_send.png",
          "/img/routes/sponsorship/sponsors/tjab.jpg",
          "/img/routes/sponsorship/sponsors/tjpf.png"
        ]}
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
      <Donations />
    </React.Fragment>
  );
}

export default Sponsorship;
