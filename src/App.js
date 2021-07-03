import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  handleGetAllKategoriActionCreator,
  handleGetAllSubCategoriesActionCreator,
} from "./store/actions/kategori";

import wats from "./assets/img/wats.svg";

import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Product from "./components/pages/Product";
import Basket from "./components/pages/Basket";
import Collection from "./components/pages/Collection";
import SubCategory from "./components/pages/SubCategory";
import Category from "./components/pages/Category";
import About from "./components/pages/About";
import Delivery from "./components/pages/Delivery";

import Header from "./components/layout/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllKategoriActionCreator());
    dispatch(handleGetAllSubCategoriesActionCreator());
  }, []);

  return (
    <div className="App" id="App">
      <div className="whatsapp-mobile">
        <a
          href="https://api.whatsapp.com/send?phone=+996555939993"
          target="_blank">
          <img src={wats} alt="watsapp" className="wats-icon" />
        </a>
      </div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
          <Route path="/basket" component={Basket} />
          <Route path="/collection/:id" component={Collection} />
          <Route path="/sub/:id" component={SubCategory} />
          <Route path="/category/:id" component={Category} />
          <Route path="/about" component={About} />
          <Route path="/delivery" component={Delivery} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
