import React, {useEffect, useState} from "react";
import Link from "next/link";
import useWindowDimension from "../../helpers/useWindowDimension";

import Navigation from "./Navigation";
import HeaderSmall from "./HeaderSmall";
import UpperHeader from "./UpperHeader";
import {LogoIcon} from "../../assets/img/logo";
import Basket from "../../containers/Basket";
import {useRouter} from "next/router";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimension();

  const router = useRouter()

  const {pathname} = router

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="header">
      {width > 600 ? (
        <>
          <UpperHeader />
          <Navigation />
        </>
      ) : (
        <div className="header-small">
          <HeaderSmall setOpen={setOpen} open={open} />
          <div className="head">
            <div onClick={() => setOpen(true)} className="burger-wrapper">
              <div className="burger-line"> </div>
              <div className="burger-line"> </div>
              <div className="burger-line"> </div>
            </div>
            <div className="logo-wrapper">
              <Link href="/">
                <a>
                <LogoIcon className="logo-main" />
                </a>
              </Link>
            </div>
            <Basket />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
