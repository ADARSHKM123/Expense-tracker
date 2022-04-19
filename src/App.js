import ExpenseTask from "./components/Expenses/ExpenseTask";
import './components/Expenses/ExpenseApp.css'
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES =[
  {id:'e1',thatDay: new Date('05 October 2021 14:48 UTC'),title:'Electricity',rate:397 },
  {id:'e2',thatDay: new Date('06 October 2012 14:48 UTC'),title:'Wifi',rate:500 },
  {id:'e3',thatDay: new Date('07 October 2021 14:48 UTC'),title:'Vegitables',rate:200 },
  {id:'e4',thatDay: new Date('08 October 2021 14:48 UTC'),title:'Mobile Prepaid',rate:200 },
  {id:'e5',thatDay: new Date('2 November 2021 14:48 UTC'),title:'others',rate:700 },

]

function App() {
  const [Expdetails, setExpdetails] = useState(DUMMY_EXPENSES)

const finalExpenseData =(datadetails)=>{
setExpdetails((prevExpenses)=>{
    return [datadetails ,...prevExpenses];
})
}
  return (

     <div>
      <NewExpense onAddExpense={finalExpenseData}/>
      <div className="expenses">
      <ExpenseTask Expdetails={Expdetails} />
      </div>

     </div>

  );
}

export default App;
