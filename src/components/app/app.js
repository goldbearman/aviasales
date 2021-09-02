import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import FilterList from "../filter-list/filter-list";
import MainContainer from "../main-container/main-container";
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  return (
    <div className="main-container">
      <Header className="header"></Header>
      <Container >

        <Row >
          <Col md={4}>
            <FilterList/>
          </Col>
          <Col md={8}>
            <MainContainer/>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
