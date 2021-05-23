import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const expenseSaver = (newExpense) => {
        const expenseData = {
            ...newExpense,
            id : Math.random()
        }
        props.onNewExpense(expenseData);
        
    }

    return (
      <div>
        <ExpenseForm onExpenseSave={expenseSaver} />
      </div>
    );
}

export default NewExpense;