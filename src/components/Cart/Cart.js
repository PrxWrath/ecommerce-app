import React, {useContext} from "react";
import { Modal, Button, ListGroup, Badge } from "react-bootstrap";
import Context from "../../store/Context"
const Cart = (props) => {
  
  const cartCtx = useContext(Context);

  const handleCartClose = () => {
    props.setShowCart(false);
  };

  const addToCartHandler = (item)=>{
    cartCtx.addItem(item);
  }

  const removeFromCartHandler = (item) => {
    cartCtx.removeItem(item);
  }

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
        {cartCtx.items.map((item)=>{
            return(
                <ListGroup.Item className="h-25" key={item.id}>
                    <img src={item.imageUrl} alt='Product' className="w-25 mh-100"/>
                    <div className="w-75 d-flex justify-content-between">
                        <div className="w-75">
                            <h3>{item.title}</h3>
                            <p className='fw-bold'>{`Rs. ${item.price}`}</p>
                        </div>
                        <div className="d-flex justify-content-between h-25">
                            <h5><Badge className="mx-1 h-100 text-center" bg="secondary">{`x ${item.amount}`}</Badge></h5>
                            <Button onClick={()=>{removeFromCartHandler(item)}} className="mx-1 h-50" variant="outline-danger">-</Button>
                            <Button onClick={()=>{addToCartHandler(item)}} className="mx-1 h-50" variant="outline-success">+</Button>
                        </div>
                    </div>
                </ListGroup.Item>
            )
        })}
        </ListGroup>
        <h4 className="my-2">{`Total Price: Rs. ${cartCtx.totalAmt}`}</h4>
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
