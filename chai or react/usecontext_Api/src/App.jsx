 import React,{useState} from "react"

 import Login from "./componet/Login.jsx"
 import Profile from "./componet/Profile.jsx"
 import UsercontextProvider from "./context/UsercontextProvider.jsx"
 import Usercontext from "./context/Usercontext.js"



function App() {
  const [user, setUser] = useState(null)
  
  return (
    // <UsercontextProvider>
    //   <h1> hello frome react</h1>
    //   <Login/>
    //   <Profile/>
    // </UsercontextProvider>

       <Usercontext.Provider value={{user,setUser}}>
        <h1>hello from react</h1>
        <Login/>
        <Profile/>
       </Usercontext.Provider>
  )
}

export default App
