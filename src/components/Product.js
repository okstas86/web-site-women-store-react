import React from "react";
import { Card } from "react-bootstrap";
import products from "../products";
import { Link } from "react-router-dom";
import "./Product.scss";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded ">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Link id="title" to={`/product/${product._id}`}>
        <Card.Title as="div">{product.name}</Card.Title>
      </Link>
      <Card.Body>
        <Card.Text className="text-center" as="h6">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
