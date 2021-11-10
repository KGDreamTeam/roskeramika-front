import React, { useState } from "react";

import {ShoppingBasket1Icon} from "../assets/img/shopping_basket1";
import {Edit1Icon} from "../assets/img/edit1";
import {CarIcon} from "../assets/img/car";
import {YellowTabFirstIcon} from "../assets/img/yellow-tab-first";
import {YellowTabSecondIcon} from "../assets/img/yellow-tab-second";
import {GreyTabFirst} from "../assets/img/grey-tab-first";
import {GreyTabSecondIcon} from "../assets/img/grey-tab-second";

import CustomTab from "../components/reusable/CustomTab";
import PanelWithBasketItems from "../components/reusable/PanelWithBasketItems";
import PanelWithOffer from "../components/reusable/PanelWithOffer";
import PanelWithDelivery from "../components/reusable/PanelWithDelivery";

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSelect = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="tabs-all">
      <div className="tabs-wrapper">
        <CustomTab
          Bg={tabIndex === 0 ? YellowTabFirstIcon : GreyTabFirst }
          Img={ShoppingBasket1Icon}
          text="Корзина"
          index={0}
        />
        <CustomTab
          Bg={tabIndex === 1 ? YellowTabSecondIcon  : GreyTabSecondIcon }
          Img={Edit1Icon}
          imgClass={"basket-page-icon-tab"}
          text="Оформление заказа"
          index={1}
        />
        <CustomTab
          Bg={tabIndex === 2 ? YellowTabSecondIcon  : GreyTabSecondIcon }
          Img={CarIcon}
          imgClass={"basket-page-icon-tab"}
          text="Доставка товара"
          index={2}
        />
      </div>
      <div className="panels">
        {tabIndex === 0 && (
          <PanelWithBasketItems handleSelect={handleSelect} index={1} />
        )}
        {tabIndex === 1 && (
          <PanelWithOffer handleSelect={handleSelect} index={2} />
        )}
        {tabIndex === 2 && <PanelWithDelivery />}
      </div>
    </div>
  );
};

export default Tabs;
