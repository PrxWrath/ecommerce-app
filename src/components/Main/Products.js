import React, { useContext, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Context from "../../store/Context";
import ProductDetails from "./ProductDetails";

const Products = (props) => {
  const productsArr = [
    {
      id: "item1",
      title: "PlayStation5",
      price: 66000,
      imageUrl: require("../../resources/ps51.jpg"),
      rating: 8,
      desc: "A solid console experience with stable and fast performance",
    },

    {
      id: "item2",
      title: "Redmi k50i",
      price: 24000,
      imageUrl: require("../../resources/redmi.jpg"),
      rating: 8.5,
      desc: "A compact and powerful device enabled with 5g and optimized for heavy duty performance",
    },

    {
      id: "item3",
      title: "Boat Rockerz Pro",
      price: 1500,
      imageUrl: require("../../resources/boat.webp"),
      rating: 8.3,
      desc: "Excellent and focused sound experience with noise cancellation. Completely wireless",
    },

    {
      id: "item4",
      title: "AOT Merch",
      price: 1100,
      imageUrl: require("../../resources/AotMerch.jpg"),
      rating: 7.5,
      desc: "A delight for all AOT fans. Made with excellent material. Easily hand washable",
    },
    {
      id: "item5",
      title: "Bleach Merch",
      price: 1000,
      imageUrl: require("../../resources/bleachMerch.webp"),
      rating: 9,
      desc: "A delight for all Bleach fans. Made with excellent material. Easily hand washable",
    },
    {
      id: "item6",
      title: "Marvel Merch",
      price: 900,
      imageUrl: require("../../resources/marvelMerch.webp"),
      rating: 6.5,
      desc: "A delight for all Marvel fans. Made with excellent material. Easily hand washable",
    },
  ];

  const cartCtx = useContext(Context);
  const [product, setProduct] = useState(null);

  const addToCartHandler = (product) => {
    let item = {
      id: product.id,
      title: product.title,
      price: product.price,
      amount: Number(1),
      imageUrl: product.imageUrl,
    };
    cartCtx.addItem(item);
  };

  return (
    <Container>
      {product ? (
        <ProductDetails product={product} setProduct={setProduct} addToCart={addToCartHandler} />
      ) : (
        <div className="w-75 h-100 mx-auto my-1 d-flex flex-wrap">
          {productsArr.map((product) => {
            return (
              <Card
                className="shadow m-1"
                style={{ width: "20vw" }}
                key={product.id}
              >
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  style={{ width: "100%", height: "350px", cursor: "pointer" }}
                  onClick={() => {
                    setProduct(product);
                  }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="d-flex justify-content-between fw-bold">
                    {`Price: Rs.${product.price}`}
                    <Button onClick={() => {addToCartHandler(product);}} variant="outline-danger">
                      + Add to Cart
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
          <div className="mx-auto my-2">
            <Button variant="success" size="lg" onClick={()=>{props.setShowCart(true)}}>
              See Cart
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Products;
