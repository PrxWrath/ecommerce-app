import React, {useContext} from "react";
import { Modal, Button, ListGroup} from "react-bootstrap";
import Context from "../../store/Context"
const Cart = (props) => {
  
  const cartCtx = useContext(Context);

  const handleCartClose = () => {
    props.setShowCart(false);
  };

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
                <ListGroup.Item className="h-25" key={item._id}>
                    <img src={item.imageUrl} alt='Product' className="w-25 mh-100"/>
                    <div className="w-75 d-flex justify-content-between">
                        <div className="w-75">
                            <h3>{item.title}</h3>
                            <p className='fw-bold'>{`Rs. ${item.price}`}</p>
                        </div>
                        <Button onClick={()=>{removeFromCartHandler(item)}} className="mx-1 h-50" variant="outline-danger">-</Button>
                    </div>
                </ListGroup.Item>
            )
        })}
        </ListGroup>
        <h4 className="my-2">{`Total Price: Rs. ${cartCtx.totalAmount}`}</h4>
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
