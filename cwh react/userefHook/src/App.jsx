import { useState, useEffect, useRef } from "react"
import "./App.css"



function App() {
  const [count, setCount] = useState(0);
  const a = useRef(0);
   
  //  use ref ka use kiya jata he elem ko refence dene ke liye use kiya jata he:
  //  another use of usreff is agar hum value ko sam rakhana chahate he to use ref ka use hota he 

  useEffect(() => {
    a.current = a.current + 1;
    console.log("rendering... " + a.current)
  }, [count])

  const btnRef = useRef();

  return (

    <>

      <h1>count value is {count}</h1>
      <button ref={btnRef} onClick={() => {
        setCount(count + 1);

      }}>click me </button>
  <br/>
      <button onClick={() => {
        btnRef.current.style.display = "none"
      }}>remove button</button>

      <br />
      <button onClick={() => {
        btnRef.current.style.display = "inline"
      }}>Add button</button>
      








    </>
  )
}

export default App
