import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  return (
    <>
       <h1>welcome to my site {counter}</h1>
       <h2>counter value is {counter}</h2>
       <button onClick={()=>{
         setCounter(counter+1)
       }}>click me</button>
       
        <h2>foter {counter}</h2>
     
    </>
  )
}

export default App
