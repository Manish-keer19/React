import { useState } from 'react'
import './App.css'
import Card from './card'

function App() {

   let myobj = {
    name:"manish",
    age:21
   }
  return (
    <>
     <Card channle = "chaiaurcode" mydata =  {myobj} btntext = "click me" />
     <Card channle = "hitesh choudhry" mydata =  {myobj}  btntext = "visit me"/>
     <Card channle = "manish keer " mydata =  {myobj}  />
    
    </>
  )
}

export default App
