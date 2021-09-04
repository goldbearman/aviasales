import React, { Component } from "react";

import FilterButtons from "./filter-buttons";
import Flight from "../flight/flight";
import FlightList from "../flight-list/flight-list";
import { Button } from "react-bootstrap";
import scss from "./main-container.module.scss";


const MainContainer = () => {

  console.log(scss);

  return (
    <div className={scss.mainContainer}>
      <FilterButtons/>
      <FlightList/>
      <Button className={scss.btnFiveTickets} variant="primary" size="lg">Показать еще 5 билетов!</Button>
    </div>
  );
};

export default MainContainer;