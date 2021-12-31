import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";

import {BasketMiniIcon} from "../../assets/img/basket-mini";
import { getMinPriceOfArr } from "../../helpers/persentCalc";
import { handleGetProductsOfCollectionActionCreator } from "../../store/actions/collections";

const NewSliderItem = props => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  const handleToBasket = () => {
    dispatch(handleGetProductsOfCollectionActionCreator(props.id));
  };
  useEffect(() => {
    setPrice(getMinPriceOfArr([...props.products]).toFixed(2));
  }, [props.products]);

  return (
    <div className="new-slider-item">
      {props.burn ? <div className="burn-price">Горящая цена</div> : null}
      <div className="content">
        <div className="image-wrapper">
          <Link href={`/collection/${props.id}`}>
            <a>
              <img src={props.img} alt="imageFrom props" />
            </a>
          </Link>
        </div>
        <div className="name-wrapper">
          <Link href={`/collection/${props.id}`} className="name">
            <a className="name">
              {props.name}
            </a>
          </Link>
          <div className="to-basket" onClick={handleToBasket}>
            <BasketMiniIcon className="basket-mini" />
            в корзину
          </div>
        </div>
        <div className="price-wrapper">
          <div className="price-pr">Цена:</div>
          <div className="price">от {price} C</div>
        </div>
      </div>
    </div>
  );
};

export default NewSliderItem;
