import ExpenseItem from './ExpenseItem';
import './css/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './css/ExpenseFilter.css';
import Card from '../UI/Card';
import { useState } from 'react';

const Expense = (props) => {
  console.log("expenses=======>", props.expense)
  const [year, setYear] = useState("2020");
  const yearSelect = (year) => {
    console.log("here at year select", year);
    setYear(year);
  }

  const filteredExpenses = props.expense.filter(expense => new Date (expense.date).getFullYear().toString() === year )

 


  return (
    <Card>
      <ExpenseFilter selected={year} onYearSelect={yearSelect} />
      <Card className="Expenses">
       {/*  {filteredExpenses.length ===0 && <p>No results found! </p>  } 
        {filteredExpenses.length >0 &&  filteredExpenses.map(expenses=><ExpenseItem  key={expenses.id}  date={expenses.date} title={expenses.title} amount={expenses.amount}
        />)} */}

    
      <ExpenseList  items ={filteredExpenses}  />

      </Card>
    </Card>
  );

}

export default Expense; 