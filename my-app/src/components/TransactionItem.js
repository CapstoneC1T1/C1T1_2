// src/components/TransactionItem.js
import React from 'react';
import '../styles/TransactionItem.css'; // Adjust the path if necessary

function TransactionItem({ transaction }) {
  return (
    <div className="transaction-item">
      <div className="transaction-details">
        <p className="transaction-name">{transaction.name}</p>
        <p className="transaction-date">{transaction.date} {transaction.time}</p>
      </div>
      <div className="transaction-amount">
        ${transaction.amount}
      </div>
    </div>
  );
}

export default TransactionItem;
