import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '/home/abeab/Development/code/P5/finale/client/src/Components/Images/recordlogo.png'

function NavBar() {


  return (
    <Navbar>
      <Container>
        <div className="nav-div">

        <Navbar.Brand href="/">Infinite Spirit Records {" "}
          {/* <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="infinite spirit logo" /> */}
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="drop-down">

        <div class="container" className="nav-buttons">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/artists">Artists</Nav.Link>
            <Nav.Link href="/merch">Merch</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/myaccount">My Account</Nav.Link>

          </Nav>
          </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar