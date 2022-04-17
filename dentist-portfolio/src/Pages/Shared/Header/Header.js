import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="font-weight-bold"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Tooth Doctor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-white">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
