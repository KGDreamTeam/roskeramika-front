import React from "react";
import useWindowDimension from "../../helpers/useWindowDimension";
import { NavLink } from "react-router-dom";

import rosGrand from "../../assets/img/ros-grand.svg";
import icDesign from "../../assets/img/ic_design.svg";

import Search from "../../containers/Search";
import Basket from "../../containers/Basket";

const UpperHeader = () => {
  const { width } = useWindowDimension();

  return (
    <div className="upper-header">
      <div className="wrapper">
        <div className="grand-comfort">
          <NavLink to="/" className="a">
            <img alt="rosGrand" className="ros-grand" src={rosGrand} />
          </NavLink>
        </div>
        <Search />
        {width > 770 ? (
          <div className="design">
            <img alt="design" src={icDesign} className="ic-design" />
            Заказать бесплатный дизайн
          </div>
        ) : null}
        <Basket />
      </div>
    </div>
  );
};

export default UpperHeader;
