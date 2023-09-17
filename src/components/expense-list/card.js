import React from 'react'
import moment from 'moment';
import del from "../../image/delete.svg";
import "./card.css";
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/action/expenses';

const Card = ({item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteExpense(item))
    notifySuccess();
  }
  return (
  <div className='card' 
    style={{ borderRight: `6px solid ${item.category.color}`}}
  >
    <div className='card-image-container'>
      <img src={item.category.icon.default}
          alt={item.category.title}
          className='card-image'
      />
    </div>
    <div className='card-info'>
      <label className='card-title'>{item.title}</label>
      <label className='card-time'>{time}</label>
    </div>
    <div className='card-right'>      
      <div>
        <label className='card-amount'>₹ {item.amount}</label>
        <img onClick={handleDelete} src={del} alt='delete'/>
      </div>
    </div>
  </div>
  )
}

export default Card;