import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
   const [card, setCard] = useState([])

async function getApidata(){

      let a = await fetch("https://jsonplaceholder.typicode.com/posts");

      let data = await a.json();
      console.log(data)
      setCard(data);
}
      

   useEffect(() => {
   
    getApidata();
     
   }, [])
   
  return (
    <>
      <div id="container">
        
          {card.map(item=>{
            return(
              <div key={item.id} className='card'>
             <h5>{item.userId}</h5>  
             <h5>{item.userId}</h5> 
             <p>{item.title}</p>
             <p>{item.body}</p> 
             </div>
            )
          })}  
      </div>
    </>
  )

}
export default App

