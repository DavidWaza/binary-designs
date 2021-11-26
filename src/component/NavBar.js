import React from "react";
import "react-bootstrap";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar expand={false}>
        <Container>
          <Navbar.Brand href="#" className="NavBar">
            Menu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 NavBar">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action1">Pictures</Nav.Link>
                <Nav.Link href="#action2">NFT</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
