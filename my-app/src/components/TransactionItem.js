import React, { useState } from 'react';
import '../styles/TransactionItem.css'; 

function TransactionItem({ transaction }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(transaction.category || 'Select Category');
  const [notes, setNotes] = useState(transaction.notes || '');

  const handleSummaryClick = (event) => {
    event.stopPropagation(); // prevent click from bubbling to expanded details
    setIsExpanded(!isExpanded);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSave = () => {
    // Logic to save the new category and notes
    // This will likely involve updating the state in the parent component or a global state
  };

  return (
    <div className={`transaction-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="transaction-summary" onClick={handleSummaryClick}>
        <p className="transaction-name">{transaction.name}</p>
        <p className="transaction-date">{transaction.date} {transaction.time}</p>
        <div className="transaction-amount">
          ${transaction.amount}
        </div>
      </div>
      {isExpanded && (
        <div className="transaction-details" onClick={(e) => e.stopPropagation()}>
          <div className="transaction-category">
            <label htmlFor="category">Category: </label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="Select Category" disabled>Select Category</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food</option>
              {/* Add more categories here */}
            </select>
            <button onClick={() => {/* Logic to add a new category */}}>+ Add New</button>
          </div>
          <div className="transaction-notes">
            <label htmlFor="notes">Notes: </label>
            <textarea id="notes" value={notes} onChange={handleNotesChange} />
          </div>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
}

export default TransactionItem;