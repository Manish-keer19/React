import React from 'react'
import { useEffect,useState } from 'react'

function Navbar({color}) {

   
    // case 1; run on every render:
    useEffect(()=>{
       alert("hey i will run on every render");
    })
   // case 2: run on First render:
   useEffect(()=>{
   alert("hey i will run only first render");
   },[])

//    case 3: run only when certain value will be changed
   useEffect(()=>{
       alert("hey i am run only because color was changed");
   },[color]);


   // expamle of cleanup function :

    useEffect(() => {
      alert("hey welcom my page it is a first render");
    
      return () => {
         alert("component was unmounted");
      }
    }, [])
    

 




  return (
    <>
    
    </>
  )
}

export default Navbar
