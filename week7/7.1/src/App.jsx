import { memo, useMemo } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {

  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {

  return (
    <>
      <CountRenderer />
      <br /> <br /> 
      <Buttons />
      <br /> 
      <EvenCountRenderer />
    </>
    // 
  )

}


const CountRenderer = memo(() => {
  const count = useRecoilValue(countAtom);
  return (
    <>
      <button>Count is {count}</button>
    </>
  )
})

const Buttons = () => {

  const setCount = useSetRecoilState(countAtom);

  return (
    <div className='btns'>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  )

};


const EvenCountRenderer = () => {
  const isEven = useRecoilValue(evenSelector);


  return (
    <>
        <button>
          {isEven ? <>It is <b>even</b></> : ''}
        </button>
    </>
  )
}

export default App
