import { useState, useEffect } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.data);
      });
  }, []);

  const handleToggleComplete = (id) => {
    fetch('http://localhost:3000/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    .then(async (res) => {
      const json = await res.json();
      console.log(json);
      // setTodos(json.data);
      });
    const updatedTodos = [...todos];
    
    updatedTodos.map( (todo) => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
      }
    })
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="card">
        <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
        <Todos todos={todos} onToggleComplete={handleToggleComplete}></Todos>
      </div>
    </>
  )
}

export default App
