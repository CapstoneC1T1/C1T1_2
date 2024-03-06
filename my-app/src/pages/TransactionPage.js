import '../App.css';
import React from 'react';
import TransactionList from '../components/TransactionList';
import Header from '../components/Header';
import PageTitle from '../components/PageInfo';
import Navigation from './Navbar';


function TransactionPage() {
  return (
    <>
      <div className="App">
        <Header />
	      <PageTitle title = "Checking Account" amount = "$1000"/>
        <TransactionList />
      </div>
    </>
  );
}

export default TransactionPage;