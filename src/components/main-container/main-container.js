import React, { Component } from "react";

import classes from "./main-container.scss";
import FilterButtons from "./filter-buttons";
import Flight from "../flight/flight";


const MainContainer = () => {

  return (
    <div className="main-container">
      <FilterButtons/>
      <Flight/>
    </div>
  );
};

export default MainContainer;