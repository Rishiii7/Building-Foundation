import React ,{ useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect( () => {
    setInterval( () => {
      fetch('https://sum-server.100xdevs.com/todos')
      .then( async (res) => {
        const resJson = await res.json();
        console.log("res json is :");
        // console.log([...todos, ...resJson.todos]);
        setTodos([...resJson.todos]);
      })
    }, 5000);
    
  }, []);

  // setInterval( ()=>{
  //   setCounter(counter + 1);
  // }, 10000);
  
  // send request every 10 sec
  // useEffect( () => {
  //   const interval = setInterval(() => {
  //     setCounter(counter + 1);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [counter]);  
  
  return (
    <>
      {/* <button>counter is {counter}</button>
      <br></br><br></br> */}
      <TodoList todos={todos}></TodoList>
    </>
  )
}


const TodoList = ({todos}) => {
  console.log(todos);
  return (
    <div className='todo-list'>
      {todos.map( (todo) => {
        return (
          <div key={todo.id} className='each-todo'>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        )
      })}
    </div>
  )
}



export default App