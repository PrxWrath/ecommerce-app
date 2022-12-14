import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="bg-secondary w-100 text-center text-light p-3">
        <h3 className="w-25 mx-auto p-1 pe-none border border-light">
          Latest Products ->
        </h3>
      </div>

        <h4 className="mx-auto bg-danger p-1 text-light w-25 text-center my-2">--Upcoming--</h4>
        <ListGroup className="w-50 my-2 p-1 mx-auto">
          <ListGroup.Item className="d-flex justify-content-between border border-danger">
            <h5>Dec. 16</h5>
            <h5 className="text-secondary">Iphone X</h5>
            <Button variant="primary" disabled>Pre-Order</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between border border-danger">
            <h5>Dec. 18</h5>
            <h5 className="text-secondary">One Piece Merch</h5>
            <Button variant="primary" disabled>Pre-Order</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between border border-danger">
            <h5>Dec. 24</h5>
            <h5 className="text-secondary">Asus Rog Series</h5>
            <Button variant="primary" disabled>Pre-Order</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between border border-danger">
            <h5>Dec. 28</h5>
            <h5 className="text-secondary">Apple Watch</h5>
            <Button variant="primary" disabled>Pre-Order</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between border border-danger">
            <h5>Jan. 15</h5>
            <h5 className="text-secondary">Nvidea RTX series</h5>
            <Button variant="primary" disabled>Pre-Order</Button>
          </ListGroup.Item>
        </ListGroup>
      
    </>
  );
};

export default Home;
