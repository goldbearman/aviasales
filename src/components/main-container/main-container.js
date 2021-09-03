import React, { Component } from "react";

import classes from "./main-container.scss";
import FilterButtons from "./filter-buttons";
import Flight from "../flight/flight";
import FlightList from "../flight-list/flight-list";
import { Button } from "bootstrap";


const MainContainer = () => {

  return (
    <div className="main-container">
      <FilterButtons/>
      <FlightList/>
      {/*<Button>Показать еще 5 билетов!</Button>*/}
    </div>
  );
};

export default MainContainer;