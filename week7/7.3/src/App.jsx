import { useState } from 'react'
import './App.css'
import {RecoilRoot, useRecoilValue, useRecoilStateLoadable, useRecoilValueLoadable} from 'recoil'
import { todoAtomFamily } from './atoms'
import { useEffect } from 'react'
import axios from'axios'
import { Suspense } from 'react'

function App() {

  return (
    <>
    
      <RecoilRoot>
        <Suspense fallback={"loading ..."}>
          <TodoContainer />
        </Suspense>
      </RecoilRoot>
      
    </>
  )
}

const TodoContainer = () => {
  return (
    <>
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={3} />
    </>
  )
}

const Todo = ({id}) => {
  const todo = useRecoilValueLoadable(todoAtomFamily(id));

  if(todo.state === 'loading'){
    return <div>loading ...</div>
  }

  // console.log(`in the todo component ${todo}`);
  return (
    <>
      <div key={id} >
        {todo.contents.title}
        <br />
        {todo.contents.description}
        <br ></br>
      </div>
    </>
  )

}


export default App
