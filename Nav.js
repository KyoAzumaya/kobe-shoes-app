import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/logo.jpeg";

export default function NavBar() {
  return (
    <Navbar className="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width="10px" height="40px" />
          Kobe Classic Shoes
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shoes">
              Shoes
            </Nav.Link>
            <Nav.Link as={Link} to="/order">
              Your Order
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
