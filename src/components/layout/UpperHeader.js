import React from "react";
import Link from "next/link";

import {RosGrandIcon} from "../../assets/img/ros-grand";

import Search from "../../containers/Search";
import Basket from "../../containers/Basket";

const UpperHeader = () => {

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
        <Basket />
      </div>
    </div>
  );
};

export default UpperHeader;
