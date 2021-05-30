import { useState } from 'react';
import './css/ExpenseForm.css';
const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

/*     const [userInput, setUserInput] = useState({
      title : '',
      amount : '',
      date : '',
    }); */
    

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
 /*        setUserInput = (previousState) => {
          return {
            ...previousState,
            title: event.target.value,
          };
        }; */
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    /*       setUserInput({
            ...userInput,
            amount: event.target.value,
          }); */
    };
    
    const dateChangeHandler = (event) => {
        console.log("event====>",event.target.value);
        setDate(event.target.value);
/*           setDate({
            ...userInput,
            date: event.target.value,
          }); */
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
         const expenseData = {
           title: title,
           amount: amount,
           date: new Date(date),
         };

        setTitle("");
        setAmount("");
        setDate("");
         
       
       props.onExpenseSave(expenseData);
      props.registerExpense(false);

    }

    const onCancel =()=>{
      props.registerExpense(false);
    }

    return (
      <div>
        <form  className="expenseForm" onSubmit={onSubmitHandler}>
          <div>
            <label> Title </label>
            <input type="text" value={title} name="Title" onChange={titleChangeHandler} />
          </div>
          <div>
            <label> Amount </label>
            <input type="text" value={amount} name="Amount" onChange={amountChangeHandler} />
          </div>
          <div>
            <label> Date </label>
            <input type="date" name="Date" value={date} onChange={dateChangeHandler} />
          </div>
          <button type="submit" name="Add Expense">
              submit
          </button>
          <button type="cancel" name="Cancel"  onClick={onCancel}  >
              Cancel
          </button>
        </form>
      </div>
    );
}

export default ExpenseForm;