import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Nav>
          <Nav.Link as={Link} to="/" style={{ paddingRight: 10 }}>
            Home
          </Nav.Link>
          {/* <br></br> */}
          <Nav.Link as={Link} to="/easy-mode">
            Easy Mode Page
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
