import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-1 text-center 
      md:grid md:grid-cols-2
      lg:grid lg:grid-cols-3'>
        <div className='col-span-1 bg-slate-600 
        md:col-span-1
        lg:col-span-1'>
          01
        </div>
        <div className='col-span-1 bg-violet-600 
        md:col-span-1
        lg:col-span-1'>
          02
        </div>
        <div className='col-span-1 bg-emerald-600 
        md:col-span-2
        lg:col-span-1'>
          03
        </div>
      </div>
    </>
  )
}

export default App
