import React, { Component } from "react";

import classes from "./filter-list.scss";


const FilterList = () => {

  return (
    <div className="filter-list">
      <h1>количество пересадок</h1>
      <div className="filter-list__item">
        <input type="checkbox" id="rules" name="rules"/>
        <label htmlFor="rules">Без пересадок</label>
      </div>
      <div className="filter-list__item">
        <input type="checkbox" id="rules" name="rules"/>
        <label htmlFor="rules">1 пересадка</label>
      </div>
      <div className="filter-list__item">
        <input type="checkbox" id="rules" name="rules"/>
        <label htmlFor="rules">2 пересадки</label>
      </div>
      <div className="filter-list__item">
        <input type="checkbox" id="rules" name="rules"/>
        <label htmlFor="rules">3 пересадки</label>
      </div>
    </div>
  );
}

export default FilterList;