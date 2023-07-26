import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        //bubble it up a level.
        console.log("bubble up new expense data from form submit" , expenseData);
        props.onAddExpense(expenseData);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    ); 
};

export default NewExpense