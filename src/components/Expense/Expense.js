import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import './ExpenseFilter.css';
import Card from '../UI/Card';
import { useState } from 'react';

const Expense = (props) => {
  let expenses = props.expense;
  const [year, setYear] = useState("2020");
  const yearSelect = (year) => {
    console.log("here at year select", year);
    setYear(year);
  }
  return (
    <Card>
      <ExpenseFilter selected={year} onYearSelect={yearSelect} />
      <Card className="Expenses">
        <ExpenseItem
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        />

        <ExpenseItem
          date={expenses[1].date}
          title={expenses[1].title}
          amount={expenses[1].amount}
        />
      </Card>
    </Card>
  );

}

export default Expense; 