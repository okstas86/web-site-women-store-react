import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container>
        <div id="footer">
          <div className="footer-left">
            <img src="/img/logo.png"></img>
            <ul>
              <li>
                &copy; Все права защищены
                <li>Политика конфиденциальности</li>
                <li>Публичная оферта</li>
              </li>
            </ul>
          </div>
          <div className="footer-center">
            <div className="footer-center-up">
              <ul>
                <LinkContainer to="/">
                  <Link id="menu">Главная</Link>
                </LinkContainer>
                <LinkContainer to="/product">
                  <Link id="menu">Магазин</Link>
                </LinkContainer>
                <LinkContainer to="/product/about">
                  <Link id="menu">О бренде</Link>
                </LinkContainer>
                <LinkContainer to="/product/contacts">
                  <Link id="menu">Контакты</Link>
                </LinkContainer>
              </ul>
            </div>
            <div className="footer-center-down">
              <ul>
                <li>Пальто</li>
                <li>Свитшоты</li>
                <li>Кардиганы</li>
                <li>Толстовки</li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <p>+7 (495) 823-54-12</p>
            <p>hello@womazing.com</p>
            <div className="footer-img">
              <ul>
                <li>
                  <img src="/img/instagram.png"></img>
                </li>
                <li>
                  <img src="/img/facebook.png"></img>
                </li>
                <li>
                  <img src="/img/twitter.png"></img>
                </li>
              </ul>
              <img className="visa" src="/img/visa-mastercard.png"></img>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
