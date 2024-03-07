import React from "react";
import Header from "../components/Header";
import "../styles/PageInfo.css";
import Card from "react-bootstrap/Card";
import "../styles/EasyMode.css";
import { Button, ButtonGroup, Container, Image } from "react-bootstrap";
import arrow from "../images/rightarrow.png";

function EasyMode() {
  return (
    <div>
      <Header />
      <div className="title-region">
        <p className="page-title">Personal Banking</p>
      </div>
      {/* Spacing here and on first page needs to be consistent. */}
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <Card className="card-left">
          <Card.Header as="h2" className="card-headers">
            Checking Account
          </Card.Header>
          <Card.Body className="card-body-1">
            <Card.Text style={{ margin: 0 }}>xxxxxxxx1234</Card.Text>
            <Card.Title>$1000</Card.Title>
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

        <Card className="card-right">
          <Card.Header as="h2" className="card-headers">
            Savings Account
          </Card.Header>
          <Card.Body className="card-body-1">
            <Card.Text style={{ margin: 0 }}>xxxxxxxx5678</Card.Text>
            <Card.Title>$10000</Card.Title>
          </Card.Body>
          <Card.Body className="card-body-2">
            <Card.Text style={{ margin: 0 }}>Recent Transactions</Card.Text>
          </Card.Body>
          <Card.Body className="card-body-3">
            {/* EDIT TO PUT SOME TRANSACTIONS!!!! */}
          </Card.Body>
        </Card>

        <Container style={{ width: "25%", marginRight: "6%" }}>
          <Card className="credit-card">
            <div>
              <Card.Header as="h2" className="card-headers">
                Credit Card
              </Card.Header>
              <Card.Body className="card-body-1">
                <Card.Text style={{ margin: 0 }}>xxxxx9101112</Card.Text>
                <Card.Title>Balance: $100.00</Card.Title>
              </Card.Body>
            </div>
            <div>
              <Button className="credit-card-button">Pay Now</Button>
            </div>
          </Card>

          <Card className="send-money">
            <Card.Header as="h2" className="card-headers">
              Send/Receive Money
            </Card.Header>
            <div className="payment-methods">
              <ButtonGroup>
                {/* <Button variant="success">Apple</Button>
                                <Button variant="success">Google</Button>
                                <Button variant="success">Zelle</Button>
                                <Button variant="success">Venmo</Button> */}
                <Button className="trans-button">Apple</Button>
                <Button className="trans-button">Google</Button>
                <Button className="trans-button">Zelle</Button>
                <Button className="trans-button">Venmo</Button>
              </ButtonGroup>
            </div>
          </Card>

          <Card className="deposit-money">
            <Card.Header as="h2" className="card-headers">
              Deposit Money
            </Card.Header>
            <Card.Body className="card-body-1">
              <Button className="deposit-button">Scan Cheque</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default EasyMode;
