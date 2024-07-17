import { useState,useEffect } from "react"
import "./App.css"
import Navbar from "./component/navbar";


function App() {
   const [count, setCount] = useState(0);
   const [color, setColor] = useState(0)
   

   useEffect(()=>{
    alert("count was changed");
    setColor(color+1);
   },[count])

  return (

    <>
       {/* <Navbar  color = {"navy and blue "+color }/> */}
       <h1>count value is {count}</h1>
       <button onClick={()=>{
         setCount(count+1);
         }}>click me </button>

    
      
       
       
    </>
  )
}

export default App
