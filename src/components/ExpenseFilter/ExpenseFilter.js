import '../ExpenseFilter/ExpenseFilter.css'


const ExpenseFilter = (props) => {

const  changeYear=(e)=>{
  e.preventDefault();
  // console.log(e.target.value);
  // console.log(e.target.value);  
  // console.log('changed');
  // setstate1(year1);
  
  props.onChangeFilter(e.target.value);
}

  return ( 
    <div className='expenses-filter'>
    <div className='expenses-filter__control'>
      <label>Filter by year</label>
      <select value={props.selected}  onChange={changeYear}>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </div>
  </div>
   );
}
 
export default ExpenseFilter;