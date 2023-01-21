import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../components/Product";
import "./HomeScreen.scss";

// import products from "../products.js";

function HomeScreen() {
  return (
    <div className="main-page">
      <div className="up">
        <div className="left-up-side">
          <h1>Новые поступления в этом сезоне</h1>
          <p>
            Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
            этом сезоне. Время исследовать.
          </p>
          <div>
            <button id="btn">Открыть магазин</button>
          </div>
        </div>
        <div className="right-up-side">
          <img className="foto1" src="/img/main.png"></img>
          <img className="foto2" src="/img/foto2.png"></img>
          <img className="foto3" src="/img/foto3.png"></img>
        </div>
      </div>
      <div className="  rounded middle">
        <h2>Новая коллекция</h2>
        <div className="cards-main-page">
          <div className="card">
            <img src="/img/tovar1.png"></img>
            <p>
              <b>Футболка USA</b>
            </p>
            <p>
              <strike>$229</strike> $129
            </p>
          </div>
          <div className="card">
            <img src="/img/tovar2.png"></img>
            <p>
              <b>Купальник Glow</b>
            </p>
            <p>$129</p>
          </div>
          <div className="card">
            <img src="/img/tovar3.png"></img>
            <p>
              <b>Свитшот Sweet Shot</b>
            </p>
            <p> $129</p>
          </div>
        </div>
      </div>
      <div className="div-button">
        <button id="button-shop">Открыть магазин</button>
      </div>
      <div>
        <h2>Что для нас важно</h2>
      </div>
      <div className="under-card">
        <div className="characteristics first">
          <img src="/img/quality.png"></img>
          <h4>Качество</h4>
          <p>
            Наши профессионалы работают на лучшем оборудовании для пошива одежды
            беспрецедентного качества
          </p>
        </div>
        <div className="characteristics">
          <img src="/img/speed.png"></img>
          <h4>Скорость</h4>
          <p>
            Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
            единиц продукции в наших собственных цехах
          </p>
        </div>
        <div className="characteristics third">
          <img src="/img/responseble.png"></img>
          <h4>Ответственность</h4>
          <p>
            Мы заботимся о людях и планете. Безотходное производство и
            комфортные условия труда - все это Womazing
          </p>
        </div>
      </div>
      <div>
        <h2>Команда мечты Womazing</h2>
      </div>
      <div className="team">
        <div className="foto-team">
          <img src="/img/team.png"></img>
        </div>
        <div className="text-team">
          <h5>Для каждой</h5>
          <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
          <p>
            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
            подчеркивают достоинства каждой девушки.
          </p>
          <a href="#">Подробнее о бренде</a>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
