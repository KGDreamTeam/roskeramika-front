import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import Link from "next/link";

import {BasketMiniIcon} from "../../assets/img/basket-mini";
import { getMinPriceOfArr, getPersentPrice } from "../../helpers/persentCalc";
import { handleGetProductsOfCollectionActionCreator } from "../../store/actions/collections";

const SalesSliderItem = props => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [pricePersent, setPricePersent] = useState(0);

  const handleToBasket = () => {
    dispatch(handleGetProductsOfCollectionActionCreator(props.id));
  };

  useEffect(() => {
    setPricePersent(getPersentPrice(props.sales, props.products).toFixed(2));
    setPrice(getMinPriceOfArr(props.products).toFixed(2));
  }, [props.price, props.sales]);

  return (
    <div className="sales-slider-item">
      <div className="sales-price">
        <div className="sales-procent">-{props.sales}%</div>
        <div className="p">Скидка</div>
      </div>
      <div className="content">
        <div className="image-wrapper">
          <Link href={`/collection/${props.id}`}>
            <a>
              <LazyLoad height={250} once offset={100}>
              <img
                src={props.img}
                alt="imageFrom props"
                className="sales-image"
              />
            </LazyLoad>
            </a>
          </Link>
          <div className="name-wrapper">
            <Link href={`/collection/${props.id}`} className="name">
              <a>
              {props.name}
              </a>
            </Link>
            <div className="to-basket" onClick={handleToBasket}>
              <BasketMiniIcon className="basket-mini" />
              в корзину
            </div>
          </div>
          <div className="fade"> </div>
        </div>
        <div className="price-wrapper">
          <div className="before-sales">
            <div className="price-pr">Цена:</div>
            <div className="price">от {price} C</div>
            <div className="red-line"> </div>
          </div>
          <div className="after-sales">
            <div className="price-p">Цена со скидкой:</div>
            <div className="price-with-sales">от {pricePersent} C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSliderItem;
