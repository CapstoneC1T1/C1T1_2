import './App.css';
import React from 'react';
import TransactionList from './components/TransactionList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TransactionList />
    </div>
  );
}

export default App;
