import React, { useState, useEffect } from "react";
import "../styles/TransactionItem.css";

function TransactionItem({ transaction, categories, addCategory }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    transaction.category || "Select Category",
  );
  const [notes, setNotes] = useState(transaction.notes || "");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categoryError, setCategoryError] = useState("");

  useEffect(() => {
    const savedNotes = sessionStorage.getItem(`notes-${transaction.id}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [transaction.id]);

  const handleSummaryClick = (event) => {
    event.stopPropagation(); // revent click from bubbling to expanded details
    setIsExpanded(!isExpanded);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
	console.log("1");
  };

  const handleAddNewCategoryClick = () => {
    setCategoryError("");
    setShowCategoryModal(true);
	console.log("2");
  };

  const handleCategoryNameChange = (event) => {
    const input = event.target.value;
 setNewCategoryName(input);
	  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSaveCategory = () => {
    sessionStorage.setItem(`category-${transaction.id}`, selectedCategory);
    alert("Category has been saved.");
	console.log("3");
  };

  const handleSaveNewCategory = () => {
    if (newCategoryName.trim() !== "" && newCategoryName.length <= 15) {
      addCategory(newCategoryName.trim());
      setNewCategoryName("");
      setShowCategoryModal(false); // close the modal
	  console.log(newCategoryName);
const data = {
		category: newCategoryName,
		buy_from: "Amazon",
		user_id: 1,
	};
       fetch("http://localhost:8000/api/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to store data in backend");
        }
      })
	  .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error storing data in backend:", error);
      });
	  console.log(JSON.stringify(data));

    } else {
      setCategoryError(
        "Please enter a valid category name (category name cannot be empty or too long).",
      );
    }
  };

  const handleSaveNotes = () => {
    sessionStorage.setItem(`notes-${transaction.id}`, notes);
    alert("Notes have been saved.");
  };

  return (
    <div className={`transaction-item ${isExpanded ? "expanded" : ""}`}>
      <div className="transaction-summary" onClick={handleSummaryClick}>
        <p className="transaction-name">{transaction.name}</p>
        <p className="transaction-date">
          {transaction.date} {transaction.time}
        </p>
        <div className="transaction-amount">${transaction.amount}</div>
      </div>
      {isExpanded && (
        <div
          className="transaction-details"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="transaction-category">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="Select Category" disabled>
                Select Category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {showCategoryModal && (
              <div className="modal">
                <div className="modal-content">
                  <span
                    className="close"
                    onClick={() => setShowCategoryModal(false)}
                  >
                    &times;
                  </span>
                  <label htmlFor="new-category-name">New Category Name:</label>
                  <input
                    id="new-category-name"
                    type="text"
                    value={newCategoryName}
                    onChange={handleCategoryNameChange}
                  />
                  <button onClick={handleSaveNewCategory}>
                    Save New Category
                  </button>
                  {categoryError && (
                    <p className="error-message">{categoryError}</p>
                  )}
                </div>
              </div>
            )}
            <button onClick={handleAddNewCategoryClick}>+ Add New</button>
            <button onClick={handleSaveCategory}>Save Category</button>
          </div>
          <div className="transaction-notes">
            <label htmlFor="notes">Notes: </label>
            <textarea
              id="notes"
              value={notes}
              onChange={handleNotesChange}
            ></textarea>
            <button onClick={handleSaveNotes}>Save Notes</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionItem;
