import React from "react";
import "../styles/Header.css";
import logo from "../images/Capital-One-Logo.png";
import Navigation from "../pages/Navbar";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";

function Header() {
  return (
    <Container className="header">
      <Row>
        <Col lg={12}>
          <Image src={logo} height={60} />
        </Col>
        <Col>
          <Navigation className="header "></Navigation>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
