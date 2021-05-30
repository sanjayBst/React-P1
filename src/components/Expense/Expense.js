import ExpenseItem from './ExpenseItem';
import './css/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
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
  return (
    <Card>
      <ExpenseFilter selected={year} onYearSelect={yearSelect} />
      <Card className="Expenses">

        {props.expense.map(expenses=><ExpenseItem date={expenses.date} title={expenses.title} amount={expenses.amount}
        />)}

      </Card>
    </Card>
  );

}

export default Expense; 