import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false);
  const [todo, setTodo] = useState(
   [
    {
      title:"i am todo",
      desc:"i am best todo"
    },
    {
      title:" i am second todo",
      desc:" i am best todo tooo"
    },
    {
      title:" i am third todo",
      desc:" i am best todo third tooo too"
    }

   ]
  )

  return (
    <>

    {/*  how to render the list in react */}
  
    {showbtn?<button>showbtn is true </button>:<button>showbtn is false</button>}
   {/* {showbtn && <button>showbtn is true </button>} */}

   <br />
       <button  style={{margin:"20px"}} onClick={()=>{
        setshowbtn(!showbtn)
  }}> togle the btn </button>

  {todo.map(item=>{
     return (
      <div key={item.title}>

     <ul>
      <li>
        {item.title}
        {item .desc}
      </li>
     </ul>
      </div>
     )
  })}

    </>
  )
}

export default App
