import React from 'react'

function Header() {
  return (
    <div  className='header-container'>
        <div className='header'>
            <div className='header-logo'>ExpenseList App</div> 
            <div style={{ width:"10%"}}>
              <i class="devicon-express-original colored"></i>
            </div>
        </div>
        <div className='header-button'>
            <a 
              href="https://github.com/Raarav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original colored"></i>
              Star
            </a>
        </div>
    </div>
  )
}

export default Header;