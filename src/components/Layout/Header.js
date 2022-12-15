import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCart from "./HeaderCart";

const Header = (props) => {
  return (
    <>
      <Navbar expand="sm" variant="dark" bg="dark" fixed="top">
        <Container>
            <Navbar.Brand href="/">TechStop.</Navbar.Brand>
            <Nav className="mx-auto">
              <><NavLink exact to="/" style={{textDecoration:'none', margin:'0.5rem', color:'#ffffff'}}>Home</NavLink></>
              <><NavLink exact to="/store" style={{textDecoration:'none', margin:'0.5rem', color:'#ffffff'}}>Store</NavLink></>
              <><NavLink exact to="/about" style={{textDecoration:'none', margin:'0.5rem', color:'#ffffff'}}>About</NavLink></>
              <><NavLink exact to="/contact" style={{textDecoration:'none', margin:'0.5rem', color:'#ffffff'}}>ContactUs</NavLink></>
            </Nav>
            <HeaderCart setShowCart = {props.setShowCart} />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
