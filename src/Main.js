import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";

const Main = () => (
  <Router>
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          {" RAMP"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#addguide">Add Guide</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Route exact path="/" component={App} />
      // <Route exact path="/guide/:category" component={GuideView} />
      // <Route exact path="/:category" component={CategoryView} />
      // <Route exact path="/:category/:subcategory" component={GuideView} />
    </div>
  </Router>
);
