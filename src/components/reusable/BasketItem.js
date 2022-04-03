import React, { useState, useEffect } from "react";
import {
  roundCalculationMinus,
  roundCalculationPlus,
} from "../../helpers/roundCalculation";
import { getTotalPriceProduct } from "../../helpers/sizeManipulation";
import { useDispatch } from "react-redux";

import {CloseIcon} from "../../assets/img/closeIcon";
import {
  priceForItem,
  deleteItemBasket,
  deleteItemsPrice,
} from "../../store/actions/basket";
import ModalImage from "react-modal-image";

const BasketItem = (props) => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const minusHandler = () => {
    setCount((prev) => roundCalculationMinus(prev));
  };

  const plusHandler = () => {
    setCount((prev) => roundCalculationPlus(prev));
  };

  const handleDelete = () => {
    dispatch(deleteItemBasket(props.id));
    dispatch(deleteItemsPrice(props.id));
  };

  useEffect(() => {
    setCount(props.count);
    setPrice(props.price);
  }, [props.count, props.price]);

  useEffect(() => {
    dispatch(priceForItem({ id: props.id, price: price }));
  }, [count, price])

  useEffect(() => {
    setPrice(getTotalPriceProduct(props.price, count));
  }, [props.count, props.price, count])

  return (
    <div className="cart-item">
      <h2>
        {props.subname} {props.name} ({props.artikul})
      </h2>
      <div className="cart-item-infos">
        <div className="image-wrapper">
          <ModalImage
            small={props.image}
            large={props.image}
            alt="product"
            className="image-product"
          />
        </div>
        <div className="infos-wrapper">
          <div className="manufac-wrapper">
            <div className="manufac-text">Производитель:</div>
            <div className="manufac">{props.manufac.country_name}</div>
          </div>
          <div className="size-wrapper">
            <div className="size-text">Размер:</div>
            <div className="size">{`${props.width}x${props.length}`}</div>
          </div>
          <div className="surface-wrapper">
            <div className="surface-text">Поверхность:</div>
            <div className="surface">{props.surface}</div>
          </div>
          <div className="dots"> </div>
          <div className="count-wrapper">
            <div className="count-text">Количество</div>
            <div className="count-logic">
              <button
                disabled={count <= 0}
                className="minus"
                onClick={minusHandler}>
                -
              </button>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
                className="input-count"
                type="number"
                min={0}
                step={0.1}
              />
              <button className="minus" onClick={plusHandler}>
                +
              </button>
            </div>
            <span>
              m<sup>2</sup>
            </span>
          </div>
          <div className="dots"> </div>
          <div className="item-total-price-wrapper">
            <div className="price-text">Цена:</div>
            <div className="price">
              {`${price}`}
              <span>Сом</span>
              <button className="delete-item-btn" onClick={handleDelete}>
                <CloseIcon className="close-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
