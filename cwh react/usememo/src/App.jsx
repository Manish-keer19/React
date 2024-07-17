import { useState, useMemo} from "react"
import "./App.css"



const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index:i,
    ismagical: i===29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0);
  
  //   use memo ka use jab kiya jata he jab hame expensive computation karni hoti he 
  // jab state change hoti he to component wapas rerender hota he or bar bar wahi code computiont perform karta he iske liye hum usememo ka use karte he taki wah bar bar code run na ho sirf ek bar run ho 



    const [number, setNumber] = useState(nums)
  
  // find magical number :
  //  const magical = number.find(item=>{
  //   return  item.ismagical=== true;
  //  })

 const magical = useMemo(() =>number.find(item=> item.ismagical===true),[number]);
  return (

    <> 
    
    <h1> magical number is {magical.index}</h1>
    <button onClick={()=>{
      setCount(count+1);
      if(count==10){
        setNumber(new Array(10_000_000).fill(0).map((_,i)=>{
          return{
            index:i,
            ismagical: i===9_000_000
          }
        }))
      }
    }}>counter: {count} </button>
    </>
  )
}

export default App
