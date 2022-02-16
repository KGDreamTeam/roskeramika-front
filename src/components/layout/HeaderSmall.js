import React, {useState, useEffect} from "react";
import {slide as Menu} from "react-burger-menu";
import {useSelector} from "react-redux";
import Link from "next/link";
import axios from "../../axios/axios";
import SmallLink from "../reusable/SmallLink";

import {LogoIcon} from "../../assets/img/logo";
import {Logo2Icon} from "../../assets/img/logo-2";
import {ClearInputIcon} from "../../assets/img/clear-input";
import {SearchIcon} from "../../assets/img/search-icon";

const HeaderSmall = (props) => {
  const {categories} = useSelector((state) => ({
    categories: state.kategori.categories,
  }));

  const [items, setItems] = useState("");
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleClearInput = () => {
    setInput("");
    setShow(false);
    setItems("");
  };

  const handleClickSearch = () => {
    axios
      .get(`/apiv1/collection/?search=${input}`)
      .then((res) => {
        const data = res.data.sort((a, b) => a.name - b.name);
        setItems([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(true);
  };

  useEffect(() => {
    if (input.length === 0) {
      setShow(false);
      setItems("");
    }
  }, [input]);

  const handleOpenBurger = () => {
    props.setOpen(true);
  };

  const handleCloseBurger = () => {
    props.setOpen(false);
  };

  const menuProps = {
    disableAutoFocus: true,
    styles: styles,
    customCrossIcon: false,
    customBurgerIcon: false,
    isOpen: props.open,
    onOpen: handleOpenBurger,
    onClose: handleCloseBurger,
    width: "80%",
  };

  class MyLink extends React.Component {
    render () {
      const { onCustomClick, ...props } = this.props
      return <a {...props} onClick={this.handleClick} />
    }

    handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event)
      }

      if (this.props.onCustomClick) {
        this.props.onCustomClick(event)
      }
    }
  }

  const Item = (props) => {
    return (
      <Link
        href={`/collection/${props.id}`}
        className="nav-small"
      >
        <MyLink
          onClick={() => {
            handleClearInput();
            handleCloseBurger();
          }}
          className="nav-small"
        >
          <div className="item-small">
            <span className="bold-small">{props.name}</span> {props.sub}
          </div>
        </MyLink>
      </Link>
    );
  };

  return (
    <Menu {...menuProps}>
      <div className="inside-side-menu">
        <div className="searches">
          <div className="search">
            <div className="search-div">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Я ищу..."
                value={input}
                onChange={(e) => handleChangeInput(e)}
              />
              {input.length !== 0 ? (
                <ClearInputIcon
                  onClick={handleClearInput}
                  className="clear-input"
                />
              ) : null}
            </div>
            <button className="btn-search" onClick={handleClickSearch}>
              Найти
            </button>
          </div>
          <Link onClick={handleCloseBurger} href="/" className="logos">
            <a className="logos">
              <LogoIcon className="logo-main"/>
              <Logo2Icon className="logo-sec" />
            </a>
          </Link>
        </div>
        {show ? (
          <div className="searched-items-small">
            {items.length !== 0 ? (
              items.map((item) => (
                <Item
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  sub={item.subcategorieis.name}
                />
              ))
            ) : (
              <div className="nothing-small">Не удалось найти</div>
            )}
          </div>
        ) : null}
        <div className="navigation-small">
          {categories &&
          categories.map((item) => {
            return (
              <SmallLink
                handleCloseModal={handleCloseBurger}
                name={item.name}
                id={item.id}
                key={item.id}
              />
            );
          })}
          <Link
            href="/about"
            onClick={handleCloseBurger}
            className="item-link-small">
            <a className="item-link-small">
              О нас
            </a>
          </Link>
        </div>
      </div>
    </Menu>
  );
};

export default HeaderSmall;

const styles = {
  bmBurgerBars: {
    background: "#fff",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "white",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#393939",
  },
};
