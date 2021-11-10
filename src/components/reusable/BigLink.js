import React from "react";
import {useSelector} from "react-redux";
import Link from 'next/link'

import {UppArrIcon} from "../../assets/img/upArr";

const BigLink = props => {
  const subCategories = useSelector(state => state.kategori.subCategories);

  return (
    <div className="item">
      <Link href={`/category/${props.id}`} className="link-wrapper">
        <a className="link-wrapper">
          <div className="to-navlink">{props.name}</div>
          <UppArrIcon className="arr"/>
        </a>
      </Link>
      <div className={"sub-items"}>
        {subCategories &&
        subCategories.map(sub => {
          if (sub.category === props.id) {
            return (
              <Link href={`/sub/${sub.id}`} key={sub.id} className="sub-item">
                <a className="sub-item">
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

export default BigLink;
