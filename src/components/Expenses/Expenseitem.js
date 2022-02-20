

import ExpenseDate from '../Expenses/ExpenseDate'
import '../Expenses/Expenseitem';
import Card from '../UI/card';
import '../Expenses/Expenseitem.css'

const Expenseitem = (props) => {

  return ( 
    <li>
    <Card className="expense-item"> 
      <ExpenseDate thatDay={props.thatDay}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.rate}</div>
      </div>
     
    </Card>
    </li>

   );
}
export default Expenseitem;