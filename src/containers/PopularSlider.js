import React from "react";
import Slider from "react-slick";

import NewSliderItem from "../components/slide/NewSliderItem";
import { useSelector } from "react-redux";

const PopularSlider = () => {
  const hitsItems = useSelector(state => state.sliders.hitsSliderArray);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: typeof window !== 'undefined' && window.innerWidth < 720 ? 1 : typeof window !== 'undefined' && window.innerWidth < 1000 ? 2 : 3,
    slidesToScroll: 1,
    className: "new-slider"
  };

  return (
    <div className="news-slider-main">
      <div className="container">
        <h2 className="title">Популярная коллекция:</h2>
        <h3 className="sub-title">Самые популярные товары!</h3>
        <Slider {...settings}>
          {hitsItems &&
            hitsItems.map(item => (
              <NewSliderItem
                key={item.id}
                img={item.image1}
                name={item.name}
                price={item.price}
                id={item.id}
                products={item.products}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularSlider;
