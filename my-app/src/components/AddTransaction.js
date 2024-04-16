import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Image,
  CardGroup,
  Modal,
  Form,
} from "react-bootstrap";

function AddTransaction() {
  const [showModal, setShowModal] = useState(false);
  const [allTransactions, setAllTransactions] = useState(
    JSON.parse(sessionStorage.getItem("transactions")) || [],
  );
  const categoryValue = useRef();
  const amountValue = useRef();

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the input values
    const newTransaction = {
      category: categoryValue.current.value,
      amount: amountValue.current.value,
    };
    const updatedTransactions = [...allTransactions, newTransaction];
    sessionStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setAllTransactions(updatedTransactions); // Update the state with the updated transactions array

    // Reset the form and hide it
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={handleButtonClick} style={{backgroundColor: "#004a99", borderColor: "black"}}>Add Values</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Category">
              <Form.Label>Category:</Form.Label>
              <Form.Control type="text" ref={amountValue} />
            </Form.Group>
            <Form.Group controlId="Amount">
              <Form.Label>Amount:</Form.Label>
              <Form.Control type="text" ref={categoryValue} />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddTransaction;
