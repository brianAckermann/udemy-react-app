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

  const filteredExpenses = props.expenses.filter((e) => {
    console.log("filter", yearFilter, e.date, e.date.getFullYear(),  e.date.getFullYear().toString() === yearFilter)
    return e.date.getFullYear().toString() === yearFilter
  })

  const hiddenYears = ["2019", "2020", "2021", "2022", "2023"]
    .filter((y) => { return y !== yearFilter })
    .join(", ");


  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter selectedYear={yearFilter} onFilterChange={filterChangeHandler}/>
        <p>Data for years {hiddenYears} is hidden</p>

        {filteredExpenses.length === 0 ? <p>No data to display...</p> : filteredExpenses.map((exp) => { 
          return (
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />)
        })
        
        }
      </Card>
    </div>
  );
}

export default Expenses;
