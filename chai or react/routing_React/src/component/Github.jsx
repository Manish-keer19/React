import { data } from 'autoprefixer'
import React from 'react'
import { useState,useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    let data  = useLoaderData();
    // const [data, setdata] = useState();
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data);
    //     }).catch((e)=>{
    //         <h1>some error occure while fetch</h1>
    //     })
    // }, [])
    
  return (
    <div className=' bg-gray-700 text-white text-3xl  p-4 text-center'>
        
        folowers : {data.followers}
        <img src={data.bio} alt="github pic" /> 

      
    </div>
  )
}

export default Github

export const githubLoader = async ()=>{

    let responce = await fetch("https://api.github.com/users/hiteshchoudhary");
    return responce.json();

}
