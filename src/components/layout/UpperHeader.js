import React from "react";
import Link from "next/link";

import useWindowDimension from "../../helpers/useWindowDimension";
import {RosGrandIcon} from "../../assets/img/ros-grand";
import {IcDesignIcon} from "../../assets/img/ic_design";

import Search from "../../containers/Search";
import Basket from "../../containers/Basket";

const UpperHeader = () => {
  const { width } = useWindowDimension();

  return (
    <div className="upper-header">
      <div className="wrapper">
        <div className="grand-comfort">
          <Link href="/" className="a">
            <a className="a">
              <RosGrandIcon className="ros-grand" />
            </a>
          </Link>
        </div>
        <Search />
        {width > 770 ? (
          <div className="design">
            <IcDesignIcon className="ic-design" />
            Заказать бесплатный дизайн
          </div>
        ) : null}
        <Basket />
      </div>
    </div>
  );
};

export default UpperHeader;
