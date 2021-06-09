import React from "react";

const CollectionSmallImg = (props) => {
  const handleClick = () => {
    props.chooseImg(props.src);
  };
  return (
    <div
      onClick={handleClick}
      className={
        props.src === props.choosenImg
          ? "small-image-wrapper selected"
          : "small-image-wrapper"
      }>
      <img className="img" src={props.src} alt={props.src} />
    </div>
  );
};

export default CollectionSmallImg;
