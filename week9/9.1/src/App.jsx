import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [flag, setFlag] = useState(true);

  // useEffect( () => {
  //   setTimeout(()=>{
  //     // MyComponent should render for 10 s
  //     setFlag(r => !r);
  //   }, 5000);
  // }, []);


  return (
    <>
      {/* { flag ? <MyComponent /> : <></>} */}
      {/* <Component /> */}
    </>
  )
}

const Component = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
      setCount(count + 1);
  };

  const options = {
      threshold: 0.5
  };

  useEffect(() => {
      console.log('Effect ran');
      
      // Simulate some logic with options and handleClick
      if (options.threshold > 0.4) {
          handleClick();
      }
  }, [options, handleClick]);

  return (
      <div>
          <button onClick={handleClick}>Increment</button>
          <p>Count: {count}</p>
      </div>
  );
};


const MyComponent = () => {
  useEffect( () => {
    console.log("Inside useEffect");

    return () => {
      console.log("inside return => useEffect");
    }
  }, []);

  return (
    <>
      <div>
        Inside Mycomponent
      </div>
    </>
  )
}

export default App
