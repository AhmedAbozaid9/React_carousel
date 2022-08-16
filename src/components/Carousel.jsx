import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import { images } from "./ImagesData";
import "./Carousel.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  return (
    <section className="carousel">
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={() => {
          setCurrent(current === 0 ? length - 1 : current - 1);
        }}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={() => {
          setCurrent(current === length - 1 ? 0 : current + 1);
        }}
      />
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            {idx === current && <img src={image.image} alt={image.alt} />}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
