import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setnumber] = useState(false);
  const [character
    , setcharacter
  ] = useState(false);
  const [lenght, setLenght] = useState(8)
  let pass = "";
  const [passsword, setpasssword] = useState("");
  const [upercase, setUpercase] = useState(false);


  

  function setkaropass(){

    let str = "abcdefghijklmnopqrstuvwxyz"
    let p = str;
    let char = "!@#$%^&*()-_=+[]{}|;:',.<>/?`~"
    let num = "1234567890";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number){
      str+= num;
    console.log("num str is ",str)
    }
    if(character){
      str+=char;
      console.log("char str is ",str)
    }
    if(upercase){
       str+= upper;
    }
   for(let i = 0 ;i<lenght;i++){
       let ch = Math.floor(Math.random()*str.length+1);
       pass+= str[ch];
       
    }
    str = p;
  
    setpasssword(pass);
  }


  useEffect(()=>{
    // alert("use effect run ")
    setkaropass();
  },[number,character,upercase,lenght]);


  return (

    <>
      <h1>welcome to passsword manager</h1>
      <div id="main">
        <input className='text' type="text" value={passsword} readOnly />
        <div id="another-elem">
          <input type="range" value={lenght} min={8} max={100}
            onChange={(e) => {
              setLenght(e.target.value)
            }} />
          <label >Lenght{`(${lenght})`}</label>

          <input type="checkbox" defaultChecked={number}
            onChange={() => {
               setnumber(!number);
            }}
          />
          <label>Number</label>
          <input type="checkbox" defaultChecked={character
          }
            onChange={() => {
              setcharacter(!character);
            }}
          />
          <label>Character
          </label>
          <input type="checkbox" defaultChecked={upercase
          }
            onChange={() => {
              setUpercase(!upercase)
            }}
          />
          <label>Uppercases
          </label>


        </div>
      </div>
    </>
  )

}

export default App
