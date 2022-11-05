import React from "react";
import { CCarousel } from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Carrosel() {
  return (
    <CCarousel>
      <Carousel
        className="carousel"
        centerMode={true}
        autoPlay={true}
        interval={2000}
        transitionTime={1000}
        selectedItem={1}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        emulateTouch={true}
        stopOnHover={true}
        useKeyboardArrows={true}
      >
        <div>
          <img src="https://images.pexels.com/photos/5921494/pexels-photo-5921494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <p className="legend">Projeto Calculadora</p>
          <p>olá este é tese</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <p className="legend">Lista com cache</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <p className="legend">Cronômetro</p>
        </div>
      </Carousel>
    </CCarousel>
  );
}
