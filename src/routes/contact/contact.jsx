import React from "react";
import Section from "../../components/section";
import TitleSection from "../../components/titleSection";

function Contact() {
  return (
    <React.Fragment>
      <TitleSection
        name={"Contact"}
        content={
          "Feel free to email us to ask about sponsorship, team guidance, or just any questions in general! If you want, we could set up an online video call!"
        }
      />

      <Section>
        <div className="flex flex-row text-lg items-center bg-FTC_LIGHT_GRAY w-2/4 h-16 p-5">
          <p className="font-bold">Email :</p>
          <a
            href="mailto:ftc14607@gmail.com"
            className="relative text-FTC_RED underline-props hover:underline-transition after:bg-FTC_RED after:left-0 after:bottom-0 hover:font-bold"
          >
            {" "}
            ftc14607@gmail.com
          </a>{" "}
        </div>
      </Section>
    </React.Fragment>
  );
}

export default Contact;
