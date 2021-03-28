import React from "react";

import GreenCircle from "../../assets/img/iconfinder_circle.svg";

const CollectionInfo = props => {
  return (
    <div className="collection-info">
      <h2 className="collection-name">{props.name}</h2>
      <div className="content">
        <div className="photo-wrapper">
          <img src={props.img} className="photo" alt={`${props.name}`} />
        </div>
        <div className="all-info-wrapper">
          <div className="price-wrapper">
            <span className="price-text">Цена: </span>
            <span className="price">{props.price} сомов</span>
          </div>
          <div className="monufacturer-wrapper">
            <span className="manufacturer-text">Призводитель: </span>
            <span className="manufacturer">{props.manufacturer}</span>
          </div>
          <div className="size-wrapper">
            <span className="size-text">Размер: </span>
            <span className="size">{props.size}</span>
          </div>
          <div className="surface-wrapper">
            <span className="surface-text">Поверхность: </span>
            <span className="surface">{props.surface}</span>
          </div>
          <div className="style-wrapper">
            <span className="style-text">Стиль: </span>
            <span className="style">{props.material}</span>
          </div>
          <div className="dots"></div>
          <div className="post-wrapper">
            <div className="post">Поделиться:</div>
            <div className="collection-is-true">
              <img
                src={GreenCircle}
                alt="green-circle"
                className="green-circle"
              />
              <span className="dostupno">Коллекция доступна для заказа</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
