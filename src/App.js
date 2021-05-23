// import ExpenseItem from "./components/ExpenseItem";
import Expense from './components/Expense/Expense';
import Card from './components/UI/Card';
import './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  let expenses = [
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
    },
  ];

  const newExpense = (newExpense) => {
    console.log("new Expense=======>", newExpense);
    expenses.push(newExpense);
  }

  return (
    <Card>
      <h2>Let's get started!</h2>
      <NewExpense onNewExpense={newExpense} />
      <Expense className="expenses" expense={expenses}></Expense>
    </Card>
  );
}

export default App;
