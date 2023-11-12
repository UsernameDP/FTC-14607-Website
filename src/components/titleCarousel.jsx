import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TitleCarousel({ imgSrcs }) {
  return (
    <div className="max-w-[35rem] min-w-[18rem] flex">
      <Carousel
        interval={3000}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        swipeable={true}
        stopOnHover={true}
      >
        {imgSrcs.map((imgSrc, index) => {
          return (
            <img
              src={imgSrc}
              alt={imgSrc}
              key={index}
              className="max-w-2xl max-h-96 object-cover"
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default TitleCarousel;
