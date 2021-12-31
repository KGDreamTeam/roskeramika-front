import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

import NewSliderItem from "../components/slide/NewSliderItem";

const NewSlider = () => {
  const newsItems = useSelector(state => state.sliders.newsSliderArray);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: typeof window !== 'undefined' && window.innerWidth < 720 ? 1 : typeof window !== 'undefined' && window.innerHeight < 1000 ? 2 : 3,
    slidesToScroll: 1,
    className: "new-slider"
  };

  return (
    <div className="news-slider-main">
      <div className="container">
        <h2 className="title">Новинки:</h2>
        <h3 className="sub-title">Самые последние поступления:</h3>
        <Slider {...settings}>
          {!!newsItems.length &&
            newsItems.map(item => (
              <NewSliderItem
                key={item.id}
                img={item.image1}
                name={item.name}
                id={item.id}
                products={item.products}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewSlider;
