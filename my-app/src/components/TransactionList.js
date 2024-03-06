import React, {useState} from 'react';
import '../styles/TransactionList.css';
import TransactionItem from './TransactionItem';

// placeholder transactions
const transactions = [
  { id: 1, name: 'Amazon', date: '01/23', time: '10:23pm', amount: 20 },
  { id: 2, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 },
  { id: 3, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 },
  { id: 4, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 },
  { id: 5, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 },
  { id: 6, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 },
  { id: 7, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 },
  { id: 8, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 },
  { id: 9, name: 'Netflix', date: '01/29', time: '8:03pm', amount: 1 }
];

function TransactionList() {
  const [categories, setCategories] = useState(['Entertainment', 'Food']); // Move category state here

  const addCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } else {
      alert("This category already exists.");
    }
  };

  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        // Pass addCategory to TransactionItem
        <TransactionItem key={transaction.id} transaction={transaction} categories={categories} addCategory={addCategory} />
      ))}
    </div>
  );
}

export default TransactionList;