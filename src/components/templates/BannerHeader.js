import React from "react";

const BannerHeader = props => {
  return (
    <div className="banner-header">
      <img alt="banner" className="banner-header-image" src={props.img} />
    </div>
  );
};

export default BannerHeader;
