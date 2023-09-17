import React from 'react'
import Topfold from '../../Topfold'
import "./add-expense.css";
import AddFrom from "../../add-form/index"

function AddExpnse() {
  return <div className='add-expense'>
    <Topfold />
    <AddFrom />
  </div>
}

export default AddExpnse