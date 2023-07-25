import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react'


const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
];
  
function App() {


  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    //console.log("adding new expense data from form submit", expense);
    //console.log("prevExpenses", prevExpenses);
    setExpenses((prevExpenses) => {
      //return [expense, ...prevExpenses];

      var newExpenses = [...prevExpenses];
      console.log("newExpenses before", newExpenses);
      newExpenses.push(expense);
      console.log("newExpenses after", newExpenses);
      return newExpenses;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
