import React, { Component } from "react";

import classes from "./main-container.scss";
import FilterButtons from "./filter-buttons";


const MainContainer = () => {

  return (
    <div className="main-container">
      <FilterButtons/>
    </div>
  );
};

export default MainContainer;