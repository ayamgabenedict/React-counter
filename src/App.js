import { useState } from "react";
import Button from "./components/Button"


function App(){
  const [counter, setCounter] = useState(0);
  
  const addValue = () =>{
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1) 
  };
  
  const subtractValue = () => {
        setCounter(counter - 1)
  }


  return (
    <div>
      <h1 className="main-title">My Simple Counter: {counter}</h1>
      <h2 className="sub-title">Counter value: {counter}</h2>

      <div className="buttonsContainer">
          <Button 
            onClick={addValue}
            className={`button`}
            arithOperation={`Add Value`}
          /> 
          <Button 
            onClick={subtractValue}
            className={`button`}
            arithOperation={`Subtract Value`}
          />
      </div>

      <p className='footer'>Footer: {counter}</p> 
    </div>
  );
}

export default App;
