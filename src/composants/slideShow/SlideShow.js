import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";


const SlideShow = (props) => {
  const images = props.images;
  const tabUrlImages = [];
  let indexImages = 0;
  images.forEach((img) => {
    let url = `url("${img}")`;
    tabUrlImages.push(url);
    })   
    let imagesSuperieur = () => {
      
        if (indexImages < tabUrlImages.length - 1) {
            indexImages += 1;
            console.log(indexImages);
            document.querySelector(".logement_slideShow").style.backgroundImage =
              tabUrlImages[indexImages];
              document.querySelector(".decompteSlide").innerHTML = `${indexImages + 1}/${tabUrlImages.length }`;
          } else {
          
              indexImages = 0;
            console.log(indexImages);
            document.querySelector(".logement_slideShow").style.backgroundImage =
              tabUrlImages[indexImages];
              document.querySelector(".decompteSlide").innerHTML = `${indexImages + 1}/${tabUrlImages.length }`;
          } 
          
      
    }

     let imagesInferieur = () => {
        if (indexImages > 0) {
            indexImages += -1
            document.querySelector(".logement_slideShow").style.backgroundImage =
            tabUrlImages[indexImages];
            document.querySelector(".decompteSlide").innerHTML = `${indexImages + 1}/${tabUrlImages.length }`;
        } else {
            indexImages = tabUrlImages.length -1
            document.querySelector(".logement_slideShow").style.backgroundImage =
            tabUrlImages[indexImages];
            document.querySelector(".decompteSlide").innerHTML = `${indexImages + 1}/${tabUrlImages.length }`;
        }
    }
    return (
      <div className="logement_slideShow" style={{backgroundImage: tabUrlImages[indexImages]}}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow_gauche"
          onClick={imagesInferieur}
        />
        <FontAwesomeIcon icon={faChevronRight}  className="arrow_droite" onClick={imagesSuperieur} />
        <div className="decompteSlide">{indexImages + 1} / {tabUrlImages.length}</div>
      </div>
    );
  };

export default SlideShow;
