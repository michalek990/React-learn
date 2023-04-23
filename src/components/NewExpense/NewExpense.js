import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpensedData) =>{
    const expenseData = {
        ...enteredExpensedData,
        id: Math.random.toString
    };
    props.onAddExpenses(expenseData);
};
  return (
    <div className='new-expense'>
      <ExpenseForm onEnteredExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;