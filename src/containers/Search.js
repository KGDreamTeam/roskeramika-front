import React, { useState, useEffect } from "react";
import axios from "../axios/axios";

import clearInput from "../assets/img/clear-input.svg";
import searchIcon from "../assets/img/search-icon.svg";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState("");
  const [show, setShow] = useState(false);

  const handleChangeInput = e => {
    setInput(e.target.value);
  };

  const handleClearInput = () => {
    setInput("");
    setShow(false);
    setItems("");
  };

  const handleKeyPressed = e => {
    if (e.keyCode === 13) {
      handleClickSearch();
    }
  };

  const handleClickSearch = () => {
    axios
      .get(`/apiv1/collection/?search=${input}`)
      .then(res => {
        const data = res.data.sort((a, b) => a.name - b.name);
        setItems([...data]);
      })
      .catch(err => {
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

  const Item = props => {
    return (
      <NavLink
        to={`/collection/${props.id}`}
        className="nav"
        onClick={handleClearInput}
      >
        <div className="item">
          <span className="bold">{props.name}</span> {props.sub}
        </div>
      </NavLink>
    );
  };

  return (
    <div className="search">
      <div className="search-div">
        <img src={searchIcon} className="search-icon" alt="search" />
        <input
          type="text"
          className="search-input"
          placeholder="Я ищу..."
          value={input}
          onKeyDown={handleKeyPressed}
          onChange={e => handleChangeInput(e)}
        />
        {input.length !== 0 ? (
          <img
            src={clearInput}
            className="clear-input"
            alt="clear input"
            onClick={handleClearInput}
          />
        ) : null}
      </div>
      <button className="btn-search" onClick={handleClickSearch}>
        Найти
      </button>
      {show ? (
        <div className="searched-items">
          {items.length !== 0 ? (
            items.map(item => (
              <Item
                key={item.id}
                name={item.name}
                sub={item.subcategorieis.name}
                id={item.id}
              />
            ))
          ) : (
            <div className="nothing">Не удалось найти</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
