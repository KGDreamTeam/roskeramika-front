import React, { useState } from "react";
import useWindowDimension from "../../helpers/useWindowDimension";

import Navigation from "./Navigation";
import HeaderSmall from "./HeaderSmall";
import UpperHeader from "./UpperHeader";
import logoMain from "../../assets/img/logo.svg";
import Basket from "../../containers/Basket";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimension();

  return (
    <div className="header">
      {width > 600 ? (
        <>
          <UpperHeader />
          <Navigation />
        </>
      ) : (
        <div className="header-small">
          <HeaderSmall setOpen={setOpen} open={open} />
          <div className="head">
            <div onClick={() => setOpen(true)} className="burger-wrapper">
              <div className="burger-line"> </div>
              <div className="burger-line"> </div>
              <div className="burger-line"> </div>
            </div>
            <div className="logo-wrapper">
              <img src={logoMain} alt="ros keramika" className="logo-main" />
            </div>
            <Basket />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
