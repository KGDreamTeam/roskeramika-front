import React from "react";
import Slider from "react-slick";
import useWindowDimension from "../helpers/useWindowDimension";

import SalesSliderItem from "../components/slide/SalesSliderItem";

import { useSelector } from "react-redux";

const SalesSlider = () => {
  const { width } = useWindowDimension();
  const salesItems = useSelector(state => state.sliders.salesSliderArray);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: width < 720 ? 1 : width < 1000 ? 2 : 3,
    slidesToScroll: 1,
    className: "sales-slider"
  };
  return (
    <div className="sales-slider-main">
      <div className="container">
        <h2 className="title">Скидки:</h2>
        <h3 className="sub-title">Самые выгодные предложения!</h3>
        <Slider {...settings}>
          {salesItems &&
            salesItems.map(item => (
              <SalesSliderItem
                id={item.id}
                key={item.id}
                img={item.image1}
                name={item.name}
                sales={item.discount}
                products={item.products}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SalesSlider;
