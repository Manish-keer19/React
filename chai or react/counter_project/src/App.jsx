import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 10;
  let [counter, setcounter] = useState(10);

  let addvalue = () => {
    // console.log(counter);
    if (counter < 20) {
      
      counter = counter + 1;
      setcounter(counter);
    }
   
 

  }
  let removevalue = () => {
    
    // console.log(counter);
    if (counter >= 1) {
      counter = counter - 1;
      setcounter(counter);
    }
    
  
  }

  return (
    <>
      <h1>welcome to my first react project {counter}</h1>
      <h3>counter {counter}</h3>
      <button onClick={addvalue}>addvalue  {counter}</button>
      <br />
      <button onClick={removevalue}>removevalue {counter}</button>
      <p> i am para  {counter}</p>
    </>
  )
}

export default App
