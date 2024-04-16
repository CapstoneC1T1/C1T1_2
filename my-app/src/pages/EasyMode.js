import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import "../styles/EasyMode.css";
import {
  Button,
  ButtonGroup,
  Container,
  Image,
  CardGroup,
} from "react-bootstrap";
import arrow from "../images/rightarrow.png";
import AddTransaction from "../components/AddTransaction";

function EasyMode() {
  console.log(JSON.parse(sessionStorage.getItem("transactions")));

  return (
    <div>
      <Header />
      <br></br>
      <div
        className="title-region"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p className="page-title">Personal Banking</p>
        <div style={{ marginLeft: "auto" }}>
          <AddTransaction />
        </div>
      </div>
      {/* Spacing here and on first page needs to be consistent. */}
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <Card className="card-left" border="dark border-2">
          <Card.Header as="h4" className="card-headers " text="white">
            Checking Account
          </Card.Header>
          <Card.Body className="card-body-1" style={{ height: "-2rem" }}>
            <Card.Text style={{ margin: 0 }}>xxxxxxxx1234</Card.Text>
            <Card.Text>$1000</Card.Text>
          </Card.Body>
          <Card.Body className="card-body-2">
            <Card.Text style={{ margin: 0 }}>Recent Transactions</Card.Text>
          </Card.Body>
          <Card.Body className="card-body-3">
            {/* EDIT TO PUT SOME TRANSACTIONS!!!! */}
          </Card.Body>
        </Card>

        <div className="button-div">
          <Button className="button">
            <Image
              src={arrow}
              alt="right-arrow"
              style={{ width: "100%", backgroundColor: "white" }}
            />
          </Button>
          <div></div>
          <Button className="button">
            <Image
              src={arrow}
              alt="right-arrow"
              style={{
                width: "100%",
                backgroundColor: "white",
                transform: "scaleX(-1)",
              }}
            />
          </Button>
        </div>

        <Card className="card-right" border="dark border-2">
          <Card.Header as="h4" className="card-headers">
            Savings Account
          </Card.Header>
          <Card.Body className="card-body-1">
            <Card.Text style={{ margin: 0 }}>xxxxxxxx5678</Card.Text>
            <Card.Text>$10000</Card.Text>
          </Card.Body>
          <Card.Body className="card-body-2">
            <Card.Text style={{ margin: 0 }}>Recent Transactions</Card.Text>
          </Card.Body>
          <Card.Body className="card-body-3">
            {/* EDIT TO PUT SOME TRANSACTIONS!!!! */}
          </Card.Body>
        </Card>

        <Container
          style={{ width: "25%", marginRight: "6%", paddingRight: "" }}
        >
          <CardGroup className="credit-card" border="dark border-2">
            <Card className="card-headers">
              <Card.Header as="h4" className="card-headers">
                Credit Card
              </Card.Header>
              <Card.Body>
                <Card.Text style={{ margin: 0 }}>xxxxx9101112</Card.Text>
                <Card.Text>Balance: $100.00</Card.Text>
              </Card.Body>
            </Card>
            <div style={{ alignContent: "center" }}>
              <Button className="credit-card-button" variant="light">
                Pay Now
              </Button>
            </div>
          </CardGroup>

          <Card className="send-money" border="dark border-2">
            <Card.Header as="h4" className="card-headers">
              Send/Receive Money
            </Card.Header>
            <div className="payment-methods">
              <ButtonGroup>
                <Button variant="light" className="trans-button">
                  Apple
                </Button>
                <Button variant="light" className="trans-button">
                  Google
                </Button>
                <Button variant="light" className="trans-button">
                  Zelle
                </Button>
                <Button variant="light" className="trans-button">
                  Venmo
                </Button>
              </ButtonGroup>
            </div>
          </Card>

          <Card className="deposit-money" border="dark border-2">
            <Card.Header as="h4" className="card-headers">
              Deposit Money
            </Card.Header>
            <Card.Body className="card-body-1">
              <Button className="deposit-button" variant="light">
                Scan Cheque
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default EasyMode;
