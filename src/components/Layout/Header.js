import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCart from "./HeaderCart";

const Header = () => {
  return (
    <>
      <Navbar expand="sm" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand href="/">The Generics.</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Store</Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
            <HeaderCart />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
