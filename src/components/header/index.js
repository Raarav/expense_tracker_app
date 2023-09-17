import React from 'react'
import "./header.css";

function Header() {
  return (
    <div  className='header-container'>
        <div className='header'>
            <div className='header-logo'>ExpenseList App
              <div style={{ width:"10%"}}>
                <i class="devicon-express-original colored"></i>
              </div>
            </div>         
            <div className='header-button'>
              <a 
                href="https://github.com/Raarav/expense_tracker_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="devicon-github-original colored"></i>
                Star
              </a>
            </div>
        </div>
    </div>
  )
}

export default Header;