import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

function ExpenseItem(props) {

  const [title, setTitle]=useState(props.title);
  const clickHandler = () => {
    setTitle("I am changed temporarily");
  }

  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <ExpenseDate  date={props.date}></ExpenseDate>
      <div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p>  </p>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler}> Click Here </button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ExpenseItem;
