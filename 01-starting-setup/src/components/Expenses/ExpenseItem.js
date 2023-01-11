import React , { useState } from 'react'

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);


    const buttonClickHandler = () => { 
        console.log("clicked");
        setTitle(title + "!");
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">$ {props.amount}</div>
            <button  onClick={buttonClickHandler}>ChangeTitle</button>
        </Card>
    );
}

export default ExpenseItem;
