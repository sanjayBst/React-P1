import './css/ExpenseItem.css';

const ExpenseDate = (props) => {
    let date = props.date.getDate();
    let month = props.date.getMonth();
    let year = props.date.getFullYear();
    return (
      <div>
        <p className="expense-date__day">date: {date} </p>
        <p className="expense-date__month">month: {month} </p>
        <p className="expense-date__year">year: {year} </p>
      </div>
    );
}

export default ExpenseDate;