import React from 'react'
import { memo } from 'react'

function Navbar({adjective,getAdjective}) {
  console.log("i am navbar");
  return (
    <div>
       <h1> i am {adjective} Navbar</h1>

       <button onClick={()=>{
        getAdjective()
       }}>{getAdjective()}</button>
      
       

    </div>
  )
}

export default memo(Navbar);
