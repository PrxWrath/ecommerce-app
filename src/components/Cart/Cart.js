import React from "react";
import { Modal, Button, ListGroup, Badge } from "react-bootstrap";

const Cart = (props) => {
  const cartItems = [
    {
      title: "PlayStation5",
      price: 66000,
      imageUrl: require("../../resources/ps51.jpg"),
    },

    {
      title: "Redmi k50i",
      price: 24000,
      imageUrl: require("../../resources/redmi.jpg"),
    },

    {
      title: "Boat Rockerz Pro",
      price: 1500,
      imageUrl: require("../../resources/boat.webp"),
    },

    {
      title: "AOT Merch",
      price: 1100,
      imageUrl: require("../../resources/AotMerch.jpg"),
    },
    {
      title: "Bleach Merch",
      price: 1000,
      imageUrl: require("../../resources/bleachMerch.webp"),
    },
    {
      title: "Marvel Merch",
      price: 900,
      imageUrl: require("../../resources/marvelMerch.webp"),
    },
  ];

  const handleCartClose = () => {
    props.setShowCart(false);
  };

  return (
    <Modal
      style={{ width: "75%", marginLeft: "45%" }}
      show={props.showCart}
      onHide={handleCartClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
        {cartItems.map((item,index)=>{
            return(
                <ListGroup.Item className="h-25">
                    <img src={item.imageUrl} alt='Product' className="w-25 mh-100"/>
                    <div className="w-75 d-flex justify-content-between">
                        <div className="w-75">
                            <h3>{item.title}</h3>
                            <p className='fw-bold'>{`Rs. ${item.price}`}</p>
                        </div>
                        <div className="d-flex justify-content-between h-25">
                            <h5><Badge className="mx-1 h-100 text-center" variant="secondary">x 1</Badge></h5>
                            <Button className="mx-1 h-50" variant="outline-danger">-</Button>
                            <Button className="mx-1 h-50" variant="outline-success">+</Button>
                        </div>
                    </div>
                </ListGroup.Item>
            )
        })}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCartClose} variant="outline-danger">
          Close
        </Button>
        <Button variant="success">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
