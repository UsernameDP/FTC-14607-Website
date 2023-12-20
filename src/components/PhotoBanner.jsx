import React from "react";
import Marquee from "react-fast-marquee";

function PhotoBanner({ images }) {
  return (
    <section className="w-full py-10">
      <Marquee
        play={true}
        direction={"left"}
        speed={30}
        loop={0}
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={image}
              className="aspect-auto max-w-[200px] mx-7 object-cover"
            />
          );
        })}
      </Marquee>
    </section>
  );
}

export default PhotoBanner;
