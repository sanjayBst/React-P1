import ExpenseItem from './ExpenseItem';
import './css/ExpenseList.css';

const ExpenseList =(props)=>{

    if(props.items.length ===0){
        return <h1 className="expenseList">  No Items Found!  </h1>
    }

    return (
        <div  > 
                    {
                        props.items.map(expenses=><ExpenseItem  key={expenses.id}  date={expenses.date} title={expenses.title} amount={expenses.amount}/>)
                    }    
        </div>
    )
     
    
}


export default ExpenseList;