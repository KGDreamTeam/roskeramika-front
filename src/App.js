import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  handleGetAllKategoriActionCreator,
  handleGetAllSubCategoriesActionCreator
} from "./store/actions/kategori";

import wats from "./assets/img/wats.svg";

const Home = React.lazy(() => import("./components/pages/Home"))
const Footer = React.lazy( () => import("./components/layout/Footer"))
const Product = React.lazy(() => import("./components/pages/Product"))
const Basket = React.lazy(() => import("./components/pages/Basket"))
const Collection = React.lazy(() => import("./components/pages/Collection"))
const SubCategory = React.lazy(() => import("./components/pages/SubCategory"))
const Category = React.lazy(() => import("./components/pages/Category"))
const About = React.lazy(() => import("./components/pages/About"))
const Delivery = React.lazy(() => import("./components/pages/Delivery"))

const Header = React.lazy(() => import("./components/layout/Header"))


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
          target="_blank"
        >
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
