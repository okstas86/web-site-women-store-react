import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import products from "../products";
import "./ProductScreen.scss";

function ProductScreen() {
  let { id } = useParams();

  const product = products.find((p) => p._id === id);

  return (
    <div className="m-3 p-3 ">
      <Row className=" ml-3 pl-3 content">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col className="description" md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Price: ${product.price}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Description: {product.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Выбериите размер:</p>
            </ListGroup.Item>
            <ListGroupItem>
              <div className="group-size">
                <div className="size">
                  <strong>XS</strong>
                </div>
                <div className="size">
                  <strong>S</strong>
                </div>
                <div className="size">
                  <strong>M</strong>
                </div>
                <div className="size">
                  <strong>L</strong>
                </div>
                <div className="size">
                  <strong>XL</strong>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <p>Выберите цвет:</p>
              <div className="group-size">
                <div className="size color brown"></div>
                <div className="size color grey"></div>
                <div className="size color pink"></div>
                <div className="size color orange"></div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className="m-3  price">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Цена:</strong>
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Статус:</strong>
                  </Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "В наличии" : "Нет в наличии"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <button to="/" className=" btn-light button" type="button">
                  <strong>Добавить в корзину</strong>
                </button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  to="/product"
                  className="btn-light button p-1 "
                  type="button"
                >
                  <strong>Назад в магазин</strong>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ProductScreen;
