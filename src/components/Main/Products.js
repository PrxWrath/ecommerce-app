import React, { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Context from "../../store/Context"

const Products = () => {
  const productsArr = [
    {
      id: 'item1',
      title: "PlayStation5",
      price: 66000,
      imageUrl:
        require("../../resources/ps51.jpg"),
    },

    {
      id: 'item2',
      title: "Redmi k50i",
      price: 24000,
      imageUrl:
        require("../../resources/redmi.jpg"),
    },

    {
      id: 'item3',
      title: "Boat Rockerz Pro",
      price: 1500,
      imageUrl:
        require("../../resources/boat.webp"),
    },

    {
      id: 'item4',
      title: "AOT Merch",
      price: 1100,
      imageUrl:
        require("../../resources/AotMerch.jpg"),
    },
    {
      id: 'item5',
      title: "Bleach Merch",
      price: 1000,
      imageUrl:
        require("../../resources/bleachMerch.webp"),
    },
    {
      id: 'item6',
      title: "Marvel Merch",
      price: 900,
      imageUrl:
        require("../../resources/marvelMerch.webp"),
    },
  ];

  const cartCtx = useContext(Context);

  const addToCartHandler = (product) => {
    let item = {
        id: product.id,
        title: product.title,
        price: product.price,
        amount: Number(1),
        imageUrl: product.imageUrl
    }
    cartCtx.addItem(item);
  }

  return (
    <Container>
      <div className="w-75 h-100 mx-auto my-1 d-flex flex-wrap">
        {productsArr.map((product) => {
          return (
            <Card
              className="shadow m-1"
              style={{ width: "20vw" }}
              key={product.id}
            >
              <Card.Img variant="top" src={product.imageUrl} style={{width:'100%', height:'350px'}}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="d-flex justify-content-between fw-bold">
                  {`Price: Rs.${product.price}`}
                  <Button onClick={()=>{addToCartHandler(product)}} variant="outline-danger">+ Add to Cart</Button>
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
