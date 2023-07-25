import React , {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const [yearFilter, setYearFilter] = useState('2022');

  const filterChangeHandler = (filterYear) => {
    console.log("recieved FilterChange update", filterYear);
    setYearFilter(filterYear);
  };

  console.log("expenses", props.expenses);

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter selectedYear={yearFilter} onFilterChange={filterChangeHandler}/>
        <p>Data for years 2019, 2020, 2022 is hidden</p>

        {props.expenses.map((exp) => { 
          return (
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />)
        })}
      </Card>
    </div>
  );
}

export default Expenses;
