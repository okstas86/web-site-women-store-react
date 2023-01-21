import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Contacts.scss";

function Contacts() {
  return (
    <div className="container">
      <Row className=" m-3 p-3 ">
        <h2>Контакты</h2>
        <div className="map">
          <img src="/img/map.png"></img>
        </div>
        <div className="list-contact">
          <div>
            <i class="fas fa-phone-alt"></i>
            <p>Телефон</p>
            <p>+7 (495) 823-54-12</p>
          </div>
          <div>
            <i class="fas fa-envelope"></i>
            <p>E-mail</p>
            <p>info@sitename.com</p>
          </div>
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <p>Адрес</p>
            <p>г. Москва, 3-я улица Строителей, 25</p>
          </div>
        </div>
        <div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Ваше имя"></input>
            </div>
            <div className="input-box">
              <input type="text" placeholder="E-mail"></input>
            </div>
            <div className="input-box">
              <input type="number" placeholder="Телефон"></input>
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Сообщение"></textarea>
            </div>
            <div className="button-send ">
              <input type="button" value="Отправить"></input>
            </div>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default Contacts;
