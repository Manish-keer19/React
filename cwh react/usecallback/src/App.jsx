import { useCallback, useState } from "react"
import "./App.css"
import Navbar from "./Navbar";


function App() {



  const [counter, setCounter] = useState(0)
  // const [adjective, setAdjective] = useState("good")
 

  const getAdjective = useCallback(
    () => {
      return "another"
    },
    [],
  )
  
   


  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective}/>
      <h1>hello bhai</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>{"counter" + counter}</button>
    </>
  )
}

export default App
