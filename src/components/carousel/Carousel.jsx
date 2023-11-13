import React from "react";
import Marquee from "react-fast-marquee";
import "./carousel.css";

const Carousel = ({ CarouselImages }) => {
  return (
    <div className="carousel">
      <Marquee pauseOnHover={true} speed={120} loop={0}>
        {CarouselImages.map((image) => (
          <div className="carousel-images" key={image.id}>
            <img
              loading="lazy"
              alt="presentation"
              src={image.name}
              key={image.id}
            />
          </div>
        ))}
        {CarouselImages.map((image) => (
          <div className="carousel-images" key={image.id}>
            <img
              loading="lazy"
              alt="presentation"
              src={image.name}
              key={image.id}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
