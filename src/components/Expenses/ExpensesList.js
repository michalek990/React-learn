import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpsesList = (props) => {
  
  if (props.expenses.length === 0) {
    return (<h2 className="expenses-list__fallback">Expenses not found</h2>);
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpsesList;
