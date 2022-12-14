import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const Products = () => {
  const productsArr = [
    {
      title: "PlayStation5",
      price: 66000,
      imageUrl:
        require("../../resources/ps51.jpg"),
    },

    {
      title: "Redmi k50i",
      price: 24000,
      imageUrl:
        require("../../resources/redmi.jpg"),
    },

    {
      title: "Boat Rockerz Pro",
      price: 1500,
      imageUrl:
        require("../../resources/boat.webp"),
    },

    {
      title: "AOT Merch",
      price: 1100,
      imageUrl:
        require("../../resources/AotMerch.jpg"),
    },
    {
      title: "Bleach Merch",
      price: 1000,
      imageUrl:
        require("../../resources/bleachMerch.webp"),
    },
    {
      title: "Marvel Merch",
      price: 900,
      imageUrl:
        require("../../resources/marvelMerch.webp"),
    },
  ];
  return (
    <Container>
      <div className="w-75 h-100 mx-auto my-1 d-flex flex-wrap">
        {productsArr.map((product, index) => {
          return (
            <Card
              className="shadow-sm m-1"
              style={{ width: "20vw" }}
              key={index}
            >
              <Card.Img variant="top" src={product.imageUrl} style={{width:'100%', height:'350px'}}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="d-flex justify-content-between">
                  <p className="fw-bold">{`Price: Rs.${product.price}`}</p>
                  <Button variant="outline-danger">+ Add to Cart</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
        <div className="mx-auto my-2">
          <Button variant="success" size="lg">See Cart</Button>
        </div>
      </div>
    </Container>
  );
};

export default Products;
