import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  // let  [name, setname] = useState("manish")
  const [form, setform] = useState({})
  
    const handleclick = (e)=>{
    //  console.log("button clicked",e);
    }
    function handlemouseover(e){
      // alert("mouse is over in box")
    }

    const handlechange = (e)=>{
      // setname(e.target.value)
      // console.log(e.target.value)
      setform({...form,[e.target.name]:e.target.value})
    }
  return(
    <>
    <h1 style={{ backgroundColor:"blue"}}> hello brother </h1>

    <button onClick={handleclick}> click me</button>
  

    <div id="area" style={{backgroundColor:"sandybrown" , width:"500px", height:"400px",textAlign:"center"}}  onMouseOver={handlemouseover}>
        i am box
    </div>


     <input type="text"  name='name' value={form.name?form.name:""} onChange={handlechange} />
     <input type="text"  name='phone' value={form.phone?form.phone:""} onChange={handlechange} />
    </>

  )

}
export default App

