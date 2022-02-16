import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function NavBar({ currentUser }) {
  let navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE'
    })
    navigate('/')
    alert('Logged Out!')
  }

  return (
    <Navbar>
      <Container>
        <div className="nav-div">
          <Navbar.Brand href="/">Infinite Spirit Records {" "}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="drop-down">

            <div class="container" className="nav-buttons">
              <Nav className="me-auto">
                <Nav.Link className="nav-but" href="/">Home</Nav.Link>
                <Nav.Link className="nav-but" href="/artists">Artists</Nav.Link>
                {currentUser ? <Nav.Link className="nav-but" href="/myaccount">My Account</Nav.Link> : null}
                {currentUser ? <Nav.Link className="nav-but" href="/" onClick={handleLogout} >Log Out</Nav.Link> : <Nav.Link className="nav-but" href="/login">Log In</Nav.Link>}
              </Nav>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar