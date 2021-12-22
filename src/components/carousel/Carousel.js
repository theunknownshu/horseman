import React from "react";
import img_intro from "../../assets/images/img_intro.jpg";
import Slider from "react-slick";
import { Grid, Paper, Button } from "@mui/material";
import { carousel_imagename, carousel_baseURL } from "../../constant/_helper";
import "./Carousel.css";
function Customcarousel() {
  const imageUrlArray = [];

  for (let i = 1; i <= 57; i++) {
    imageUrlArray.push(
      <div className="">
        <img
          src={carousel_baseURL + "carousel_img (" + i.toString() + ").png"}
          style={{ width: "100%" }}
        ></img>
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="">
      <img className="img-fluid" src={img_intro} style={{ width: "100%" }} />
      <div className=" text-center text-dark" style={{ overflow: "hidden" }}>
        <div className="row slider-content" style={{ flexDirection: "column" }}>
          <Slider {...settings}>{imageUrlArray}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Customcarousel;
