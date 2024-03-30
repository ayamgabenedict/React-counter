import App from '../App';
import '../App.css'
import React from 'react';
import { useState } from 'react'

function Counter(){
    const [counter, setCounter] = useState(0);

    const addValue = () =>{
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        
    }

    const subtractValue = () => {
        setCounter(counter - 1)
    }

    return (
        <div className='main-body'> 
            <App counter={counter} />
            
            <button onClick={addValue} className='button'>Add value</button> {"   "}
            <button onClick={subtractValue} className='button'>Subtract value</button>
            
            <p className='footer'>Footer: {counter}</p>
        </div>
	)
}

export default Counter;