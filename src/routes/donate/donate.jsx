import React from "react";
//components
import TitleSection from "../../components/titleSection";
import InfoCard from "../../components/infoCard";
import InfoCardGrid from "../../components/infoCardGrid";
import Section from "../../components/section";

function Donate() {
    return (
        <React.Fragment>
          <TitleSection
            name={"Support Us"}
            content={
              "Our team prides ourselves in being fully student-run, building world-class robots and serving our community. We rely on your generosity to continue spreading our positive impact."
            }
          />
          <section className="w-full flex justify-center py-5 overflow-hidden">
            <iframe
                src="https://hcb.hackclub.com/donations/start/robot-uprising-68afa5c5-7811-4935-b756-273dd10dceb3"
                name="donateFrame"
                height="512px"
                width="1200px"
            ></iframe>
          </section>
        </React.Fragment>
      );
}

export default Donate;