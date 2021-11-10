import React, { useState, useEffect } from "react";
import Link from 'next/link'
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import { getMinPriceOfArr } from "../../helpers/persentCalc";
import { handleGetProductsOfCollectionActionCreator } from "../../store/actions/collections";

import {BasketMiniIcon} from "../../assets/img/basket-mini";

const Collection = props => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  const handleToBasket = () => {
    dispatch(handleGetProductsOfCollectionActionCreator(props.id));
  };

  useEffect(() => {
    setPrice(getMinPriceOfArr(props.products).toFixed(2));
  }, []);

  return (
    <div className="collection-for-page-wrapper">
      <div className="image-wrapper">
        <Link className="link-to-collection" href={`/collection/${props.id}`}>
          <a className="link-to-collection">
            <img
              src={props.img}
              alt="image of Collection"
              className="collection-image"
            />
          </a>
        </Link>
      </div>
      <div className="collection-information">
        <div className="collection-information-name-wrapper">
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
        <div className="collection-information-price-wrapper">
          <div className="price-text">Цена</div>
          <div className="price">от {price} C</div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Collection;
