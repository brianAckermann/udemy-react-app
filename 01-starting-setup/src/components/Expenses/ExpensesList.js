import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css";

const ExpensesList = props => { 
  if (props.expenses.length === 0) {
    return (<h2 className="expenses-list__fallback">No data to display...</h2>);
  }

  return (
    props.expenses.map((exp) => { 
      return (
          <ul className="expenses-list" >
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />
          </ul>)
        })
  );
};

export default ExpensesList