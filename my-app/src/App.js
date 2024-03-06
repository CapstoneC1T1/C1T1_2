import './App.css';
import React from 'react';
import TransactionList from './components/TransactionList';
import Header from './components/Header';
import PageTitle from './components/PageInfo';
import PagesRouter from './pages/PagesRouter';
import TransactionPage from './pages/TransactionPage';


function App() {
  return (
    <PagesRouter />
  );
}

export default App;
