import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';


function NavBar() {


  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand  href="/">Infinite Spirit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/artists">Artists</Nav.Link>
            <Nav.Link href="/merch">Merch</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/myaccount">My Account</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar