import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  roundCalculationMinus,
  roundCalculationPlus
} from "../../helpers/roundCalculation";
import {
  priceForItem,
  pushItemToBasket,
} from "../../store/actions/basket";
import ModalImage from "react-modal-image";

const CollectionProduct = props => {
  const prices = useSelector(state => state.basket.itemsPrices);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);

  const changeHandler = e => {
    setQuantity(e.target.value);
  };

  const minusHandler = () => {
    setQuantity(prev => roundCalculationMinus(prev));
  };

  const plusHandler = () => {
    setQuantity(prev => roundCalculationPlus(prev));
  };

  const offerHandler = () => {
    dispatch(
      pushItemToBasket([
        {
          id: props.id,
          artikul: props.artikul,
          image1: props.img,
          price: props.price,
          subcategory: props.subcategory,
          manufacturer: props.manufacturer,
          name: props.name,
          width: props.width,
          surface: props.surface,
          material: props.material,
          length: props.length,
          sum: price,
          count: quantity
        }
      ])
    );
    dispatch(priceForItem({ id: props.id, price: price }));
  };

  useEffect(() => {
    const sum = props.price * quantity;
    setPrice(sum.toFixed(1));
  }, [quantity]);

  return (
    <div className="collection-product">
      <div className="image-wrapper">
        <ModalImage
          small={props.img}
          large={props.img}
          alt="product"
          className="image-product"
        />
        {/*<img src={props.img} alt="product" className="image-product" />*/}
      </div>
      <div className="product-wrapper">
        <div className="type-wrapper">
          <div className="type-text">Артикул:</div>
          <div className="type">{props.artikul}</div>
        </div>
        <div className="type-wrapper">
          <div className="type-text">Тип:</div>
          <div className="type">{props.material}</div>
        </div>
        <div className="view-wrapper">
          <div className="view-text">Вид:</div>
          <div className="view">{props.surface}</div>
        </div>
        <div className="size-wrapper">
          <div className="size-text">Размер:</div>
          <div className="size">{`${props.width}x${props.length}`}</div>
        </div>
        <div className="dots"> </div>
        <div className="quantity-wrapper">
          <span className="quantity">Количество:</span>
          <button
            disabled={quantity <= 0}
            className="minus"
            onClick={minusHandler}
          >
            -
          </button>
          <input
            value={quantity}
            type="number"
            min={0}
            className="input-quantity"
            onChange={e => changeHandler(e)}
            step={0.01}
          />
          <button className="plus" onClick={plusHandler}>
            +
          </button>
          <span className="m">
            m<sup className="sup">2</sup>
          </span>
        </div>
        <div className="dots"> </div>
        <div className="price-wrapper">
          <div className="price-text">Цена:</div>
          <div className="price">
            <strong>{props.price}</strong>
            <span className="som">Сом</span>
          </div>
        </div>
        <div className="price-wrapper">
          <div className="price-text">Сумма:</div>
          <div className="price">
            {price}
            <span className="som">Сом</span>
          </div>
        </div>
        <button
          className="btn-offer"
          onClick={offerHandler}
          disabled={quantity <= 0}
        >
          оформить заказ
        </button>
      </div>
    </div>
  );
};

export default CollectionProduct;
