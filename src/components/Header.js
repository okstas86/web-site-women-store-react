import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import { LinkContainer } from "react-router-bootstrap";

function header() {
  return (
    <header>
      <Navbar bg="light" variant="light" expant="lg">
        <Container className="my-3">
          <LinkContainer to="/">
            <Navbar.Brand className="logo">
              <img src="/img/logo.png"></img>
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="me-auto nav">
            <LinkContainer to="/">
              <Nav.Link id="menu">Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link id="menu">Магазин</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product/about">
              <Nav.Link id="menu">О бренде</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product/contacts">
              <Nav.Link id="menu">Контакты</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="header-right">
            <Nav.Link id="menu" href="/brend">
              <img src="/img/telephone.png"></img>+7 (495) 823-54-12
            </Nav.Link>
            <LinkContainer to="/cart">
              <Nav.Link>
                <img src="/img/bag.png"></img>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default header;
