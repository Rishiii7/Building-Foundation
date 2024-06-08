import { memo, useEffect, useState } from 'react'
import './App.css'
import { CreateConnection } from './component/Chat';
import axios from 'axios'
import useSWR from 'swr'
import { Loading } from './component/Loading';



function App() {

  const fetcher = async function(url) {
    const resp = await axios.get(url);
    return resp.data;
  };

  const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
  console.log(data);

  if(error){
    return <div>Failed to load page</div>
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {data.todos.map( (todo, ind) => <Todo todo={todo} key={ind}/>)}
    </>
  )
}

const Todo = ({todo, ind}) => {
  return (
    <>
      <div key={ind}>
        <h3>{todo.title}</h3>
        <br ></br>
        <p>{todo.description}</p>
      </div>
    </>
  )
}

const useFetchTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(  () => {
    const fetchData = async () =>{
      const resp = await axios.get('https://sum-server.100xdevs.com/todos');
      setTodos(resp.data.todos);
    }

    const time = setInterval( ()=> fetchData(), 5000);

    return () => {
      console.log("unmounted");
      clearInterval(time);
    }
  }, []) ;

  return todos;
}

export default App
