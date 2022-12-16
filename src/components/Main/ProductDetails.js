import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  let product = props.product;
  return (
    <Container>
      <Card className="w-75 mx-auto my-3 p-2 overflow-hidden">
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{width:'300px', height:'400px'}}
          className={`overflow-hidden mx-auto ${classes.zoom}`}
        />
        <Card.Title>{product.title}</Card.Title>
        <Card.Body>
          <Card.Text className="mx-auto">
            <h6>Rating: </h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="yellow"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            {product.rating}/10
          </Card.Text>

          <Card.Text>
            <h6>Description:</h6>
            {product.desc}
          </Card.Text>
          <div className="w-100 text-center">
            <Button onClick={() => { props.addToCart(product);}} variant="danger" size="md" className="mx-1">
              + Add to Cart
            </Button>
            <Button variant="outline-danger" size="md" onClick={()=>{props.setProduct(null)}}>
                X Close
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;
