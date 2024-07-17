import { useState } from 'react'
import './App.css'

function App() {
  let  [color, setcolor] = useState("darkblue");

  return (
    <>
      <div id="main"  style={{backgroundColor:color}}>
          <h1 style={{color:"white",  fontSize:"50px"}}> welcome to bg change website</h1>
        <div id="bgcontainer">
          <button  onClick={() => setcolor("red")}  className='btn' style={{ backgroundColor: "red" }}
            
          >red</button>
          <button className='btn' style={{ backgroundColor: "blue" }}
           onClick={() => setcolor("blue")}
          >blue</button>
          <button className='btn' style={{ backgroundColor: "green" }}
           onClick={() => setcolor("green")}
          >green</button>
          <button className='btn' style={{ backgroundColor: "yellow" }}
           onClick={() => setcolor("yellow")}
          >yellow</button>
          <button className='btn' style={{ backgroundColor: "pink" }}
           onClick={() => setcolor("pink")}
          >pink</button>
          <button className='btn' style={{ backgroundColor: "balck" }}
           onClick={() => setcolor("black")}
          >black</button>
          <button className='btn' style={{ backgroundColor: "brown" }}
           onClick={() => setcolor("brown")}
          >brown</button>
        </div>
      </div>
    </>
  )
}

export default App
