import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCart from "./HeaderCart";

const Header = (props) => {
  return (
    <>
      <Navbar expand="sm" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand href="/">TechStop.</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link><NavLink exact to="/" style={{textDecoration:'none', color:'#ffffff'}}>Home</NavLink></Nav.Link>
              <Nav.Link><NavLink exact to="/store" style={{textDecoration:'none', color:'#ffffff'}}>Store</NavLink></Nav.Link>
              <Nav.Link><NavLink exact to="/about" style={{textDecoration:'none', color:'#ffffff'}}>About</NavLink></Nav.Link>
            </Nav>
            <HeaderCart setShowCart = {props.setShowCart} />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
