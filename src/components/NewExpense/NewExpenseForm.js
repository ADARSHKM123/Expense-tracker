import { useState } from 'react';
import '../NewExpense/NewExpenseForm.css'

 
 const NewExpenseForm = (props) => {

  const [inputtitle,setValueTitle] = useState('');
  const [amountChange,setAmountTitle] = useState('');
  const [dateChange,setDateTitle] = useState('');

  // const [userInput,setUserInput] =useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // })
   const titleChange=(event)=>{
    //  console.log(event.target.value);
    // setUserInput(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // });
    setValueTitle(event.target.value)
   }

   const amountChangeHandler =(event)=>{
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
    setAmountTitle(event.target.value)
   }
   const dateChangeHandler =(event)=>{
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
    setDateTitle(event.target.value)
  }
 const submitHandler = (e)=>{
  e.preventDefault();
  const expenseData ={
    title:inputtitle,
    rate:+amountChange,
    thatDay:new Date(dateChange)
  };
  props.onExpenseData(expenseData);
  setValueTitle('');
  setAmountTitle('');
  setDateTitle('');

  // console.log(expenseData);
  }

  return ( 

      <form  onSubmit={submitHandler}>
    
       <div className="new-expense__control">
         <div className="new-expense__control">
           <label >Title</label>
           <input type="text" value={inputtitle}  onChange={titleChange} />
         </div>

         <div className="new-expense__control">
           <label >Amount</label>
           <input type="number" min="0.01" step="0.01" value={amountChange}  onChange={amountChangeHandler}/>
         </div>

         <div className="new-expense__control">
           <label >Date</label>
           <input type="date" min="2019-01-01" max="2022-12-31" value={dateChange}   onChange={dateChangeHandler}/>
         </div>
       </div>
       <div className="new-expense__actions"></div>
       {/* </div> */}
       <button type="button" onClick={props.stoping}>Cancel</button>
       <button type="submit" >Add Expense</button>
      </form>

   );
}
 
export default NewExpenseForm;
