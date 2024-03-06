import React, { useState } from 'react';
import '../styles/TransactionItem.css'; 

function TransactionItem({ transaction }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(transaction.category || 'Select Category');
  const [notes, setNotes] = useState(transaction.notes || '');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const handleSummaryClick = (event) => {
    event.stopPropagation(); // revent click from bubbling to expanded details
    setIsExpanded(!isExpanded);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddNewCategoryClick = () => {
    setShowCategoryModal(true);
  }

  const handleCategoryNameChange = (event) => {
    const input = event.target.value;
    if (input.length <= 15) {
      setNewCategoryName(input);
    } else {

    }
  }

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSaveCategory = () => {
  };

  const handleSaveNewCategory = () => {
    setShowCategoryModal(false);
  }

  const handleSaveNotes = () => {
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
              <option value="Food">Study</option>
              {/* Add more categories here */}
            </select>
            {showCategoryModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => setShowCategoryModal(false)}>&times;</span>
                  <label htmlFor="new-category-name">New Category Name:</label>
                  <input
                    id="new-category-name"
                    type="text"
                    value={newCategoryName}
                    onChange={handleCategoryNameChange}
                    maxLength={15} // This also ensures the input doesn't exceed 15 characters
                  />
                  <button onClick={handleSaveNewCategory}>Save New Category</button>
                  {/* Display error message if there is one */}
                  {categoryError && <p className="error-message">{categoryError}</p>}
                </div>
              </div>
            )}
            <button onClick={handleAddNewCategoryClick}>+ Add New</button>
            <button onClick={handleSaveCategory}>Save Category</button> 
          </div>
          <div className="transaction-notes">
            <label htmlFor="notes">Notes: </label>
            <textarea id="notes" value={notes} onChange={handleNotesChange}></textarea>
            <button onClick={handleSaveNotes}>Save Notes</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionItem;