import React, { useState, useEffect } from "react";
import "../styles/TransactionList.css";
import TransactionItem from "./TransactionItem";

/**
// placeholder transactions
const transactions = [
  { id: 1, name: "Amazon", date: "01/23/2024", time: "10:23", amount: 20 },
  { id: 2, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
  { id: 3, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
  { id: 4, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
  { id: 5, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
  { id: 6, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
  { id: 7, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
  { id: 8, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
  { id: 9, name: "Netflix", date: "01/29", time: "8:03pm", amount: 1 },
];
//let transactions = [];
//console.log(transactions);
**/

function TransactionList() {
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.category === selectedCategory,
        );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  useEffect(() => {
    fetch_cat_list();
    fetch_tran_list();
  }, []);

  const fetch_tran_list = async () => {
    fetch(`http://localhost:8000/api/v1/list`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Transaction list failed to load.");
        }
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        let lists = [];
        data.forEach((transaction) => {
          //console.log(transaction);
          const trimmed_tran = {
            id: transaction.user_id,
            name: transaction.buy_from,
            date: transaction.date,
            time: transaction.time,
            amount: transaction.amount,
          };
          lists.push(trimmed_tran);
        });
        //transactions = data;
        setTransactions(lists);
        //console.log(lists);
      })
      .catch((error) => {
        console.error("List.js file: ", error);
      });
  };

  const fetch_cat_list = async () => {
    fetch(`http://localhost:8000/api/v1/category_list`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Category list failed to load.");
        }
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        if (data == null)
          setCategories(["Default"]); //TODO:
        else {
          let category_list = [];
          data.forEach((category) => {
            category_list.push(category.name);
          });
          var string_to_remove = "Default";
          category_list = category_list.filter(function (item) {
            return item !== string_to_remove;
          });
          category_list.unshift(string_to_remove);
          setCategories(category_list);
        }
      })
      .catch((error) => {
        console.log("list.js category list: ", error);
      });
  };

  const addCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } else {
      alert("This category already exists.");
    }
  };

  return (
    <div className="transaction-page">
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            categories={categories}
            addCategory={addCategory}
          />
        ))}
      </div>
      <div className="category-sidebar">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
