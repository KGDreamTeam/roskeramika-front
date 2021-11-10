import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {wrapper} from "../store/store";

import Footer from "../components/layout/Footer";
import {WatsIcon} from "../assets/img/wats";
import Header from "../components/layout/Header";
import {handleGetAllKategoriActionCreator, handleGetAllSubCategoriesActionCreator} from "../store/actions/kategori";

import '../assets/style/style.scss'

const CustomApp = ({Component, pageProps}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllKategoriActionCreator());
    dispatch(handleGetAllSubCategoriesActionCreator());
  }, []);

  return (
    <>
      <div className="whatsapp-mobile">
        <a
          href="https://api.whatsapp.com/send?phone=+996555939993"
          target="_blank">
          <WatsIcon className="wats-icon" />
        </a>
      </div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default wrapper.withRedux(CustomApp)
