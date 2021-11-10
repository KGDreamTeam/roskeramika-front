import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "../axios/axios";

import {ClearInputIcon} from "../assets/img/clear-input";
import {SearchIcon} from "../assets/img/search-icon";

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
      <Link
        href={`/collection/${props.id}`}
        className="nav"
        onClick={handleClearInput}
      >
        <a className="nav">
        <div className="item">
          <span className="bold">{props.name}</span> {props.sub}
        </div>
        </a>
      </Link>
    );
  };

  return (
    <div className="search">
      <div className="search-div">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Я ищу..."
          value={input}
          onKeyDown={handleKeyPressed}
          onChange={e => handleChangeInput(e)}
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
