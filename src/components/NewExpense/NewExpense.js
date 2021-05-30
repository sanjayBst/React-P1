import ExpenseForm from './ExpenseForm';
import './css/ExpenseForm.css';
import { useState } from 'react';

const NewExpense = (props) => {

  const [registerExpense, setRegisterExpense] = useState(false);

  const expenseSaver = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random()
    }
    props.onNewExpense(expenseData);
  }

  const onClickHandler = () => {
    setRegisterExpense(true)
  }

  const registerExpenseHandler=(value)=>{
    setRegisterExpense(value);
  }

  return (
    <div>

      {registerExpense !== true &&  <div className="addNew" >
        <input className="addNewButton" onClick={onClickHandler} type="button" value="Add new Item" />
      </div>}
     
      {registerExpense === true &&  <div>
      <ExpenseForm onExpenseSave={expenseSaver}  registerExpense={registerExpenseHandler} />
      </div>}
     

    </div>
  );
}

export default NewExpense;