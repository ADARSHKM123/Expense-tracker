// import ExpenseTask from "./ExpenseTask";
import Expenseitem from "../Expenses/Expenseitem";
import '../Expenses/ExpenseList.css';

const ExpenseList = (props) => {
 if(props.item.length === 0){
   return <h2 className="expenses-list__fallback">Found no expenses.</h2>
 }
  return (
  <ul className="expenses-list">
   { props.item.map((expense) => (
      <Expenseitem
      key = {expense.id}
      title={expense.title}
      rate={expense.rate}
      thatDay={expense.thatDay}
      />
    
   ))
    }
  </ul>
  )
}
 
export default ExpenseList;