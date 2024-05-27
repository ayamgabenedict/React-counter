import React from 'react'


function Button({onClick, className, arithOperation}) {  
    return (
      <div>
        <button 
          onClick={onClick}
          className={`${className}`}
          > 
          {arithOperation}
        </button>
      </div>
    )
  }

export default Button