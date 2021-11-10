import React from "react";
import Link from 'next/link'

import {WhiteWatsIcon} from "../../assets/img/white-wats";
import {WhiteInstIcon} from "../../assets/img/white-inst";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <h4>Контактная информация:</h4>
          <a className="info-item" href="tel:+996555939993">
            Тел: +996 (555) 93-99-93
          </a>
          <br />
          <a className="info-item" href="mailto:rkaugrand@gmail.com">
            Email: rkaugrand@gmail.com
          </a>
          <div className="soc-icons">
            <a href="https://www.instagram.com/rosskeramika_official/" target="_blank">
              <WhiteInstIcon className="white-inst" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+996555939993"
              target="_blank"
            >
              <WhiteWatsIcon className="white-whats" />
            </a>
          </div>
        </div>
        <div className="info">
          <h4>Режим работы:</h4>
          <div className="info-item">с 9-00 до 18-00, без выходных.</div>
          <div className="info-item">
            Режим работы склада: с 9-00 до 17-00, суббота: c 9-00 до 16-00,
            воскресенье - выходной
          </div>
        </div>
        <div className="info">
          <h4>Каталог:</h4>
          <Link href="/sub/4" className="info-item">
            <a className="info-item">
              Плитка для ванной
            </a>
          </Link>
          <Link href="/sub/5" className="info-item">
            <a className="info-item">
            Плитка для кухни
            </a>
          </Link>
          <Link href="/sub/6" className="info-item">
            <a className="info-item">
            Фасад
            </a>
          </Link>
          <Link href="/category/1" className="info-item">
            <a className="info-item">
            Керамогранит
            </a>
          </Link>
          <Link href="/category/3" className="info-item">
            <a className="info-item">
            Теплый пол
            </a>
          </Link>
        </div>
        <div className="info">
          <h4>Общая информация:</h4>
          <Link href="/about" className="info-item">
            <a className="info-item">
            О нас
            </a>
          </Link>
          <Link href="/delivery" className="info-item">
            <a className="info-item">
            Оплата и доставка
            </a>
          </Link>
        </div>
      </div>
      <div className="last">
        <div className="container">Все права защищены © 2019</div>
      </div>
    </div>
  );
};

export default Footer;
