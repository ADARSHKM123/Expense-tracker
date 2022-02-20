import '../Expenses/Expenseitem.css';
import '../Expenses/ExpenceDate.css'

const ExpenseDate  = (props) => {

 const month =props.thatDay.toLocaleString('en-US',{month:'long'});
 const year =props.thatDay.toLocaleString('en-US',{day:'2-digit'});
 const day =props.thatDay.getFullYear();

  return ( 
    <div className="Date">
    <div  className="expense-date__month">{month}</div>
    <div  className="expense-date__year">{year}</div>
    <div  className="expense-date__day">{day}</div>
    </div>
   );
}
 
export default ExpenseDate;