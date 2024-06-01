import { useState } from 'react'
import './App.css'
import {RecoilRoot, useRecoilValue} from 'recoil'
import { todoAtomFamily } from './atoms'
import { useEffect } from 'react'

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
  const todo = useRecoilValue(todoAtomFamily(id));
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
