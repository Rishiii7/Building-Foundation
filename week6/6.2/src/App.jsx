import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // const [todos, setTodos] = useState([]);
  
  // useEffect(() => {
  //   axios.get('https://sum-server.100xdevs.com/todos')
  //     .then((res) => {
  //       setTodos(res.data.todos);
  //     });
  // }, []);
  const [id, setId] = useState(1);
  const idArr = [1,2,3,4,5]

  function buttonHandler(id) {
    setId(id);
  }

  return (
    <>
      {
        idArr.map( (id) => {
          return ( 
          <button onClick={ () => buttonHandler(id)} key={id}>
            {id}
          </button> 
          )
        } )
      }
      <div className='todo-list'>
        {/* {
          todos.map((todo) => (
            <TodoGetById id={todo.id} key={todo.id} />
          ))
        } */}
        <TodoGetById id={id}></TodoGetById>
      </div>
    </>
  );
}

function TodoGetById({ id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((res) => {
        setTodo(res.data.todo);
      });
  }, [id]);

  return (
    <div key={id} className='each-todo'>
      <Todo
        title={todo.title}
        description={todo.description}
        completed={todo.completed}
      />
    </div>
  );
}

function Todo({ title, description, completed}) {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{completed ? 'Done' : 'Mark as Done'}</button>
    </>
  );
}

export default App;
