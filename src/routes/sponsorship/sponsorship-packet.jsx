import React from "react";
import Section from "../../components/section";

function SponsorshipPacket() {
  return (
    <Section>
      <iframe
        src="/pdf/routes/sponsorship/sponsorship-packet.pdf"
        width="100%"
        height="2000px"
      >
        <div>
          <p className="text-xl">
            Your broswer does not support PDFS:{" "}
            <a
              href="/pdf/routes/sponsorship/sponsorship-packet.pdf"
              className="text-FTC_RED font-medium"
            >
              Download the PDF
            </a>
          </p>
        </div>
      </iframe>
    </Section>
  );
}

export default SponsorshipPacket;
