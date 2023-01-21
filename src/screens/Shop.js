import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

function Shop() {
  return (
    <div id="shop">
      <h1 className=" p-3 ">Магазин</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={8} lg={6} xl={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Shop;
