import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '/home/abeab/Development/code/P5/finale/client/src/Components/Images/recordlogo.png'

function NavBar() {


  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href="/">Infinite Spirit Records {" "}
          {/* <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="infinite spirit logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div class="container">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/artists">Artists</Nav.Link>
            <Nav.Link href="/merch">Merch</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/myaccount">My Account</Nav.Link>

          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar