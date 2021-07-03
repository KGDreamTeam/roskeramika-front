import React, { useEffect, useState } from "react";
// import Zoom from "react-img-zoom"
// import InnerImageZoom from "react-inner-image-zoom"
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import GreenCircle from "../../assets/img/iconfinder_circle.svg";
import CollectionSmallImg from "../reusable/CollectionSmallImg";

const CollectionInfo = (props) => {
  const [images, setImages] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(props.img[0]);
    const imagesFiltered = props?.img.filter((item) => item);
    setImages([...imagesFiltered]);
  }, [props.img]);

  const changeImageHandle = (url) => {
    setImage(url);
  };

  return (
    <div className="collection-info">
      <h2 className="collection-name">{props.name}</h2>
      <div className="content">
        <div className="images">
          <div className="photo-wrapper">
            <TransformWrapper
              defaultScale={1}
              defaultPositionX={100}
              defaultPositionY={200}>
              <TransformComponent>
                <img src={image} className="photo" alt={`${props.name}`} />
              </TransformComponent>
            </TransformWrapper>
            <div className="img-text">Прокрутка для увеличения</div>
          </div>
          <div className="small-images">
            {images &&
              images.map((item, index) => (
                <CollectionSmallImg
                  index={index}
                  choosenImg={image}
                  chooseImg={changeImageHandle}
                  key={item}
                  src={item}
                />
              ))}
          </div>
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
