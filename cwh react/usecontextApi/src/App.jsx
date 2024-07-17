
import { useState,useContext } from "react"
import Navbar from "./component/navbar";
import { counterContext } from "./component/context/context";

function App() {

 const [counter, setCounter] = useState(0);

//  usecontext hook ka use kiya jata he jab hame dusre component me data ko bhejana ho or vah component bahut andar ho to hum usecontext ka use karte he :
  return (
   <>
       <  counterContext.Provider  value={{counter,setCounter}}>
         <h1>hello jas</h1>
         <Navbar/>
         <br />
         <button onClick={()=>{
          setCounter(counter+1);
         }}>{"counter: "+ counter}</button>
       </counterContext.Provider>
  </>
  )
}

export default App
