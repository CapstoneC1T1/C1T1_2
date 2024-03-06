import './App.css';
import React from 'react';
import TransactionList from './components/TransactionList';
import Header from './components/Header';
import PageTitle from './components/PageInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navbar />
	      <PageTitle title = "Checking Account" amount = "$1000"/>
        <TransactionList />
      </div>
    </>
  );
}

export default App;
