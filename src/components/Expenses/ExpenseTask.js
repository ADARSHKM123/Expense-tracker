import Expenseitem from "../Expenses/Expenseitem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";


const ExpenseTask = (props) => {
 const [filteredYear, setfilteredYear] = useState('');

 
 const filterCall = (selectedYear) => {
  setfilteredYear(selectedYear);
};
const filtered = props.Expdetails.filter(exp=>exp.thatDay.getFullYear().toString() === filteredYear);
console.log(filtered);

  

 return (
   <div>
            <div className='expenses'>
            <ExpenseFilter selected={filteredYear}  onChangeFilter={filterCall}/>
            <ExpenseChart expense={filtered}/>
             <ExpenseList  item={filtered}/>
            </div>
          </div>
        );
      }
      export default ExpenseTask;


      // selected={FilteredYear}