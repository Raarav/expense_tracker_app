import React from 'react'
import "./expnse-list.css";
import Card from "./card";
import { useSelector } from 'react-redux';
import emptyIcon from "../../image/empty.webp";

const ExpenseList = () => {
  const {expense: list} = useSelector(state => state.expenses)
  
  return <div className='expense-list'>
    {list ? <>
      {list.map((item)=>{
        <Card item={item} />
      })}
    </> : <div className='empty-expense-list'>
      <img src={emptyIcon} alt='__blanck'/>  
      <label>Un Oh! Your expense list is empty</label>
    </div>}
  </div>
}

export default ExpenseList