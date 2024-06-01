import { useState } from 'react'
import './App.css'
import {RecoilRoot, useRecoilValue, useRecoilState} from 'recoil'
import { todoAtomFamily } from './atoms'
import { useEffect } from 'react'
import axios from'axios'

function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id = {1} />
        <Todo id = {1} />
        <Todo id = {2} />
        <Todo id = {2} />
        <Todo id = {2} />

      </RecoilRoot>
      
    </>
  )
}

const Todo = ({id}) => {
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

  if(!todo){
    return <div>Loading...</div>;
  }

  // console.log(`in the todo component ${todo}`);
  return (
    <>
      <div key={id} >
        {todo.title}
        <br />
        {todo.description}
        <br ></br>
      </div>
    </>
  )

}


export default App
