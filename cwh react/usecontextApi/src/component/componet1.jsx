import React from 'react'
import { counterContext } from './context/context'
import { useContext } from 'react';
function Component() {
    const value = useContext(counterContext);
  return (
    <div>
       <button onClick={()=>{
        value.setCounter(value.counter+1)

       }}>{"counter value is  "+value.counter}</button>
    </div>
  )
}

export default Component
