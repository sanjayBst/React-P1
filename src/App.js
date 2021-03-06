// import ExpenseItem from "./components/ExpenseItem";
import Expense from './components/Expense/Expense';
import {useState} from 'react';
import './components/Expense/css/App.css'
import Card from './components/UI/Card';
import './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  let DUMMY_EXPENSES = [
    {
      id: 0,
      date: new Date(),
      title: "First title",
      amount: 200,
    },
    {
      id: 1,
      date: new Date(),
      title: "Second title",
      amount: 300,
    }
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);



  const newExpense = (newExpense) => {
    console.log("new Expense=======>", newExpense);
    setExpenses(previousState=>{
      return [newExpense, ...previousState]
    })
  }

  return (
    <Card>
      <h2 className = ' color' >Let's get started!</h2>
      <NewExpense onNewExpense={newExpense} />
      <Expense className="expenses" expense={expenses}></Expense>
    </Card>
  );
}

export default App;
