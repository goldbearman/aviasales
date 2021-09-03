import React, { Component } from "react";
import classes from "./filter-list.scss";


const FilterList = () => {

  return (
    <div className="filter-list">
      <h1>количество пересадок</h1>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox"/>
          <span className="check__box"></span>
          Все</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox"/>
          <span className="check__box"></span>
          Без пересадок</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox"/>
          <span className="check__box"></span>
          1 пересадка</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox"/>
          <span className="check__box"></span>
          2 пересадки</label>
      </div>
      <div className="filter-list__item">
        <label className="check option">
          <input className="check__input" type="checkbox"/>
          <span className="check__box"></span>
          3 пересадки</label>
      </div>
    </div>
  );
}

export default FilterList;