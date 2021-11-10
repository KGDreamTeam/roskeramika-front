import React, {useState} from "react";
import {useSelector} from "react-redux";
import Link from "next/link";

import {UppArrIcon} from "../../assets/img/upArr";

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
          href={`/category/${props.id}`}
          className="to-navlink-small"
          onClick={props.handleCloseModal}>
          <a className="to-navlink-small">
            {props.name}
          </a>
        </Link>
        <UppArrIcon
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
                href={`/sub/${sub.id}`}
                key={sub.id}
                onClick={props.handleCloseModal}
                className="sub-item-small">
                <a className="sub-item-small">
                  {sub.name}
                </a>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SmallLink;
