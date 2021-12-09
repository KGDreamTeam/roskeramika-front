import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import {WatsIcon} from "../../assets/img/wats";
import BigLink from "../reusable/BigLink";

const Navigation = () => {
  const { categories } = useSelector(state => ({
    categories: state.kategori.categories
  }));

  return (
    <div className="nav">
      <div className="container">
        <div className="left">
          {categories &&
            categories.map(item => (
              <BigLink name={item.name} id={item.id} key={item.id} />
            ))}
          <Link href="/about" className="item-link">
            <a className="item-link">
            О нас
            </a>
          </Link>
        </div>
        <div className="right">
          <div className="watsapp">
            <a
              href="https://api.whatsapp.com/send?phone=+996555939993"
              target="_blank"
            >
              <WatsIcon className="wats-icon" />
              <div className="text">Напишите нам</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
