import React , {useState} from "react";  
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: '',
    //});

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
        // setUserInput( (prevState) => {
        //     return {
        //         ...prevState, enteredTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
        // setUserInput( (prevState) => {
        //     return {
        //         ...prevState, enteredAmount: event.target.value
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
        // setUserInput( (prevState) => {
        //     return {
        //         ...prevState, enteredDate: event.target.value
        //     };
        // });
    };

    const onFormSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={onFormSubmitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label> 
                    <input type='number' value={enteredAmount}  min='0.01' step='0.01'  onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'  value={enteredDate} min='2019-01-01' max='2023-12-31'  onChange={dateChangeHandler}  />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">submit</button>
            </div>
        </form>

    );
}

export default ExpenseForm