import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SlideShow = (props) => {
  const [indexImages, setIndexImages] = useState(0);

  const images = props.images;

  const tabUrlImages = images.map((img) => {
    return `url("${img}")`;
  });

  const imagesSuperieur = () => {
    setIndexImages((prevIndex) =>
      prevIndex < tabUrlImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  const imagesInferieur = () => {
    setIndexImages((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : tabUrlImages.length - 1
    );
  };

  if (images.length > 1) {
    return (
      <div
        className="logement_slideShow"
        style={{ backgroundImage: tabUrlImages[indexImages] }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow_gauche"
          onClick={imagesInferieur}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow_droite"
          onClick={imagesSuperieur}
        />
        <div className="decompteSlide">
          {indexImages + 1} / {tabUrlImages.length}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="logement_slideShow"
        style={{ backgroundImage: tabUrlImages[indexImages] }}
      ></div>
    );
  }
};

export default SlideShow;