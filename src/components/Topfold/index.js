import React, { useState } from 'react'
import "./topfold.css"
import search from "../../image/search-icon.svg"
import addIcon from "../../image/add-button-svgrepo-com.svg";
const iconsStyle = {
    "width": "20px",
    "height": "20px",
    "margin": "5px"
}
function Topfold() {
  const [querry, setQuerry] = useState("");

  const handleQuerry = (e) => {
    setQuerry(e.target.value)
  }
  return (    
    <div className='topfold'>
        <div className='home-topfold'>
            <div className='searchbar'>
                <img style={iconsStyle} src={search} />
                <input
                    value={querry}
                    onChange={(e)=>handleQuerry(e)} 
                    placeholder='Search for expense'
                />
            </div>
            <div className='add-button'>
                <img style={iconsStyle} src={addIcon} />Add
            </div>
        </div>
    </div>
  )
}

export default Topfold