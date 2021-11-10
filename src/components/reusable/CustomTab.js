import React from "react";

const CustomTab = ({Bg, Img, text, imgClass}) => {
  return (
    <div className={"tab-item"}>
      {/*<img src={Bg} alt="backgroundImage" className="bg-img" />*/}
      <Bg className="bg-img" />
      <Img className={imgClass} />
      <div className="text">{text}</div>
    </div>
  );
};

export default CustomTab;
