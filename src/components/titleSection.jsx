import React from "react";
import Section from "./section";
import Carousel from "./titleCarousel";
import TitleCarousel from "./titleCarousel";

function TitleSection({ name, content, images }) {
  return (
    <Section>
      <section className="flex flex-col-reverse md:flex-row w-full h-3/6 mx-auto py-12 px-10 align-middle gap-0 md:gap-10 xl:gap-28">
        <section className="text-left flex flex-col gap-5">
          <h2 className="text-5xl xl:text-6xl font-Roboto font-medium max-w-lg pt-14">
            {name}
          </h2>
          <p className="max-w-lg text-base xl:text-lg text-FTC_GREY font-light">
            {content}
          </p>
        </section>
        <section
          className={`relative flex-col justify-center items-center flex`}
        >
          {images !== undefined ? (
            !Array.isArray(images) ? (
              <img
                src={images}
                alt={images}
                className="aspect-auto w-full max-w-[35rem] min-w-[18rem]"
              />
            ) : (
              <TitleCarousel imgSrcs={images} />
            )
          ) : null}
        </section>
      </section>
    </Section>
  );
}

export default TitleSection;
