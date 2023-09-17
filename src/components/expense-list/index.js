import React from 'react'
import "./expnse-list.css";
import Card from "./card";
import { useSelector } from 'react-redux';
import emptyIcon from "../../image/empty.webp";
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector(state => state.expenses)
  const notifySuccess = () => toast.success("Expense Deleted");
  const filterList = list.filter(item =>  item.title.includes(query))
  return <div className='expense-list'>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {filterList.length ? (
      filterList.map((item) => <Card item={item} notifySuccess={notifySuccess} />)
    ) : <div className='empty-expense-list'>
      <img src={emptyIcon} alt='Empty List' />  
      <label>Un Oh! Your expense list is empty</label>
    </div>}
  </div>
}

export default ExpenseList