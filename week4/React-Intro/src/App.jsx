import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    // {
    //   btnId: 0,
    //   title: 'title 1',
    //   description: 'description 1',
    //   completed: true,
    // },
    // {
    //   btnId: 1,
    //   title: 'title 2',
    //   description: 'description 2',
    //   completed: false,
    // },
  ]);

  const addTodo = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    setTodos([
      ...todos,
      {
        btnId: todos.length,
        title: title,
        description: description,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (btnId) => {
    setTodos(
      todos.map((todo) =>
        todo.btnId === btnId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className='card'>
        <input id='title' placeholder='title'></input>
        <br></br>
        <br></br>
        <input id='description' placeholder='description'></input>
        <br></br>
        <br></br>
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className='card'>
        {todos.map((todo) => (
          <TodoList
            key={todo.btnId}
            btnId={todo.btnId}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </>
  );
}

function TodoList({ btnId, title, description, completed, toggleTodo }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => toggleTodo(btnId)} id='btn'>
        {completed ? 'Done' : 'Mark as Done'}
      </button>
    </>
  );
}

export default App;
