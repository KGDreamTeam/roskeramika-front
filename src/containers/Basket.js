import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import {IcBasketIcon} from "../assets/img/ic_bascket";
import { setTotalPrice } from "../store/actions/basket";

const Basket = () => {
  const [show, setShow] = useState(false);
  const basket = useSelector(state => state.basket);
  const prices = useSelector(state => state.basket.itemsPrices);
  const totalSum = useSelector(state => state.basket.totalPriceToBuy);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
      total += parseInt(prices[i].price);
    }
    dispatch(setTotalPrice(total));
  }, [prices]);

  return (
    <div className="basket" onClick={() => setShow(!show)}>
      <IcBasketIcon className="ic-basket" />
      {basket.items.length !== 0 ? (
        <div className="ic-basket-count">{basket.items.length}</div>
      ) : null}
      <div className="total-sum">{totalSum.toFixed(2)} сом</div>
      {show ? (
        <div className="basket-dropdown">
          {basket.items.length !== 0 ? (
            basket.items.map(item => (
              <BasketMiniItem
                key={item.name}
                image={item.image1}
                name={item.name}
                artikul={item.artikul}
              />
            ))
          ) : (
            <div>ничего нету</div>
          )}
          {basket.items.length !== 0 ? (
            <Link href="/basket" className="offer">
              <a className="offer">
              оформить заказ
              </a>
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

const BasketMiniItem = props => {
  return (
    <div className="basket-dropdown-item">
      <div className="cart-img-wrapper">
        <img src={props.image} alt="carts item" className="cart-img" />
      </div>
      <span className="text">
        {props.name} {props.artikul}
      </span>
    </div>
  );
};

export default Basket;
