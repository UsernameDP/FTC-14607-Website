import React from "react";
import InfoCardGrid from "../../../components/infoCardGrid";

function Accomplishments() {
  return (
    <section className="w-full  py-20 px-28 flex-auto">
      <InfoCardGrid>
        <div className="bg-FTC_LIGHT_GRAY p-6 flex flex-col gap-10 border-4 rounded border-FTC_GRAY">
          <h2 className="font-bold text-3xl text-center">
            World Championship Team
          </h2>
          <p className="text-center text-lg text-FTC_GRAY">
            Our team won two awards at the FIRST World Championship in 2019,
            along with numerous other accolades at the regional and state
            levels.
          </p>
        </div>

        <div className="bg-FTC_LIGHT_GRAY p-6 flex flex-col gap-10 border-4 rounded border-FTC_GRAY">
          <h2 className="font-bold text-3xl text-center">Sustainability</h2>
          <p className="text-center text-lg text-FTC_GRAY">
            All members of our team are trained in Design & CAD, Programming,
            Manufacturing, and are dedicated STEM activists.
          </p>
        </div>

        <div className="bg-FTC_LIGHT_GRAY p-6 flex flex-col gap-10 border-4 rounded border-FTC_GRAY">
          <h2 className="font-bold text-3xl text-center">
            Cutting Edge Technology
          </h2>
          <p className="text-center text-lg text-FTC_GRAY">
            Our team always uses cutting edge technology including CAD stress
            analysis and simulations, tensorflow, AWS, and more. Feel free to
            check out our GitHub Repository with robot code at
            https://github.com/2024eli/FTC_14607
          </p>
        </div>
      </InfoCardGrid>
    </section>
  );
}

export default Accomplishments;
