import React, { useState, useEffect } from "react";
import {
  roundCalculationMinus,
  roundCalculationPlus
} from "../../helpers/roundCalculation";
import { getTotalPriceProduct } from "../../helpers/sizeManipulation";
import { useDispatch } from "react-redux";

import closeIcon from "../../assets/img/closeIcon.svg";
import { priceForItem, deleteItemBasket } from "../../store/actions/basket";

const BasketItem = props => {
  const [count, setCount] = useState(props.count);
  const [price, setPrice] = useState(props.sum);
  const dispatch = useDispatch();

  const minusHandler = () => {
    setCount(prev => roundCalculationMinus(prev));
  };

  const plusHandler = () => {
    setCount(prev => roundCalculationPlus(prev));
  };

  const handleDelete = () => {
    dispatch(deleteItemBasket(props.id));
  };

  useEffect(() => {
    setPrice(getTotalPriceProduct(props.price, count));
    dispatch(priceForItem({ id: props.id, price: price }));
  }, [count, price]);

  return (
    <div className="cart-item">
      <h2>
        {props.subname} {props.name} ({props.artikul})
      </h2>
      <div className="cart-item-infos">
        <div className="image-wrapper">
          <img
            src={props.image}
            className="cart-item-img"
            alt="product of cart"
          />
        </div>
        <div className="infos-wrapper">
          <div className="manufac-wrapper">
            <div className="manufac-text">Производитель:</div>
            <div className="manufac">{props.manufac}</div>
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
                onClick={minusHandler}
              >
                -
              </button>
              <input
                value={count}
                onChange={e => setCount(e.target.value)}
                type="number"
                className="input-count"
                type="number"
                min={0}
                step={0.01}
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
                <img src={closeIcon} alt="delete item" className="close-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
