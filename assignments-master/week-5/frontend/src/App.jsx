import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BusinessCard } from '../../solutions/level-1/BusinessCard'

function App() {
  const [card, setCard] = useState({
    name : "rishikesh",
    description : "student",
    interests : ["Chess", "Gun range", "Hiking"],
    linkedin : "https://www.linkedin.com/in/rishikesh-solapure/",
    twitter : "https://github.com/Rishiii7",
    otherSocialMedia : {
      url : "https://github.com/Rishiii7",
      label : "Github"
    },
  })

  return (
    <>
      <div>
        <BusinessCard {...card}></BusinessCard>
      </div>
    </>
  )
}

export default App
