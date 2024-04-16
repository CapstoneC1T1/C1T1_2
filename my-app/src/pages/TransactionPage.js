import "../App.css";
import React from "react";
import TransactionList from "../components/TransactionList";
import Header from "../components/Header";
import PageTitle from "../components/PageInfo";
import Navigation from "./Navbar";
import AddTransaction from "../components/AddTransaction"

function TransactionPage() {

  console.log(JSON.parse(sessionStorage.getItem('transactions')))
  return (
    <>
      <div>
        <Header />
        <br></br>
        <div className="title-region" style={{ display: 'flex', alignItems: 'center' }}>
          <PageTitle title="Checking Account" amount="$1000" />
          <div style={{ marginLeft: 'auto' }}>
            {/* <AddTransaction /> */}
          </div>
        </div>
        <TransactionList />
      </div>
    </>
  );
}

export default TransactionPage;
