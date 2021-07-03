import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import upArr from "../../assets/img/upArr.svg";

const SmallLink = (props) => {
  const subCategories = useSelector((state) => state.kategori.subCategories);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="to-small">
      <div className="link-wrapper">
        <Link
          to={`/category/${props.id}`}
          className="to-navlink-small"
          onClick={props.handleCloseModal}>
          {props.name}
        </Link>
        <img
          src={upArr}
          alt="arr-small"
          className={show ? "arr down" : "arr"}
          onClick={handleClick}
        />
      </div>
      <div className={show ? "sub-to-small show" : "sub-to-small"}>
        {subCategories &&
          subCategories.map((sub) => {
            if (sub.category === props.id) {
              return (
                <Link
                  to={`/sub/${sub.id}`}
                  key={sub.id}
                  onClick={props.handleCloseModal}
                  className="sub-item-small">
                  {sub.name}
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
};

export default SmallLink;
