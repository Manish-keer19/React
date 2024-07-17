import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,multiply } from './counterslice'

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const power = useSelector((state)=> state.counter.power);
 const dispatch = useDispatch();

  return (
     <div>

        <button onClick={()=>dispatch(decrement())}>-</button>
       <h2> counter value is: {count}</h2>
       <h1>power value is {power}</h1>
       <button onClick={()=>{
        dispatch(incrementpower)
       }}>increment power</button>
       <button onClick={()=>
         dispatch(increment())
       }>+</button>
       <button onClick={()=>{
         dispatch(multiply())
       }}>*</button>
       <br />
       <button onClick={()=>{
        dispatch(incrementByAmount(5))
       }}>incrementByAmount</button>
     </div>
  )
}

export default Counter;