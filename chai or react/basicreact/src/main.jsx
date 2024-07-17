import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Greet(){

   return(
    <h1> hello good morning </h1>
   )
}



let customereact= {
    type:'a',
    props :{
         href: "https://google.com",
         target:"_black",

    }
    , 
    text :" click to visit the google website"

}


let anotherelem = "chai aur code";
let rectelem = React.createElement(
    'a',
     {href : "https://google.com", target:"_blank"},
     'click me to visit google',
     anotherelem
)

// rect at the end jo jsx ko function/ method me convert karta he:

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <Greet/>
    // customereact()   // it is wrong becau we can't use object as a function :
    // rectelem
  
)
