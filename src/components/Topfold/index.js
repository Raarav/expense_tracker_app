import React, { useState } from 'react'
import "./topfold.css"
import search from "../../image/search-icon.svg"
import addIcon from "../../image/add-button-svgrepo-com.svg";
import leftBackIcon from "../../image/left-navigation-back-svgrepo-com.svg";
import cancelIcon from "../../image/cancel-button-svgrepo-com.svg";
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/action/expenses';

const iconsStyle = {
    "width": "20px",
    "height": "20px",
    "margin": "5px"
}
function Topfold() {
  const [querry, setQuerry] = useState("");
  const dispatch = useDispatch();
  const handleQuerry = (e) => {
    setQuerry(e.target.value)
    dispatch(searchExpense(e.target.value))
  }
  return (    
    <div className='topfold'>
        {window.location.pathname === "/" ? 
        <div className='home-topfold'>
            <div className='searchbar'>
                <img style={iconsStyle} src={search} />
                <input
                    value={querry}
                    onChange={(e)=>handleQuerry(e)} 
                    placeholder='Search for expense'
                />
            </div>
            <Link to="/add-expense">
                <div className='add-button'>
                    <img style={iconsStyle} src={addIcon} />Add
                </div>
            </Link>
        </div>
        :
        <div className='add-topfold'>
            <Link to="/">
                <div className='add-topfold-button'>
                    <img style={iconsStyle} src={leftBackIcon} />
                    Back
                </div>
            </Link>
            <Link to="/">
                <div className="add-topfold-button" >
                    <img style={iconsStyle} src={cancelIcon} />
                    Cancel
                </div>
            </Link>
        </div>
        }
    </div>
  )
}

export default Topfold