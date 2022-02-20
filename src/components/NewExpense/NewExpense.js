import NewExpenseForm from "../NewExpense/NewExpenseForm";
import '../NewExpense/NewExpense.css';
import { useState } from "react";

const NewExpense = (props) => {
  const [hidden, sethidden] = useState(false);


  const saveExpenseDataHandler=(enteredExpenses)=>{
   const expenseData = {
     ...enteredExpenses,
    //  id:Math.random().toString(),
    id:Date.now()
   };
  //  console.log(expenseData);
   props.onAddExpense(expenseData);
   sethidden(false);
  } 


  const hiddenRoom =(e)=>{
   sethidden(true);
  }
  const stopEditing=()=>{
    sethidden(false)
  }


  return ( 
    <div className="new-expense">
   {!hidden && <button onClick={hiddenRoom}>Add New Expenses</button>}
   {hidden && <NewExpenseForm onExpenseData={saveExpenseDataHandler} stoping={stopEditing}/>}
    </div>
   );
}
export default NewExpense;  