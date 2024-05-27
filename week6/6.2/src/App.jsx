import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './App.css';

// // // // // // // // // // // // // // // // // // // // 
// Create an app that does two things -                  //
//    1. Increase the counter by 1                       //
//    2. Let's user put a value in an input box(n)       //
//       and you need to show from 1-n                   //
// // // // // // // // // // // // // // // // // // // // 
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const inputHandler = (e) => {
    const n = parseInt(e.target.value, 10) || 0;
    // conle.log(typeof n);
    setInputValue(n);
  }

  const sum = useMemo( () => {
    const n = inputValue;
    return (n * (n+1)) / 2;
  }, [inputValue]);

  // function inputHandler(e) {
  //   const n = parseInt (e.target.value);
  //   // conle.log(typeof n);

  //   const sumOfN =  ( son * (n + 1) ) / 2;
  //   setInputValue(sumOfN);
  // }

  return (
    <>
      <button onClick={() => {setCounter(counter+1)}}>Counter {counter}</button>
      <br></br><br></br>
      <input type="number"  placeholder='number' onChange={inputHandler}/>
      <br></br>
      <div className='sum-of-n'>
          <h3><span>Sum is {sum}</span></h3>  
      </div>
      
      
    </>
  )
}

export default App;
