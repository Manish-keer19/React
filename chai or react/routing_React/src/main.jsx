import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Layout from './Layout'
import Home from './component/Home'
import Contact from './component/Contact'

import About from './component/About'
import User from './component/User'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Github, { githubLoader } from './component/Github'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       },
//       {
//        path:"/about",
//        element:<About/>
//       }
//     ]

//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
   
     <Route path=''  element= {<Home/>}  />
     <Route path='about'  element= {<About/>}  />
     <Route path='contact'  element= {<Contact  />}  />
     <Route path='user/:userId'  element= {<User/>}  />
     <Route

    //   using loader we can perform fetch operation when we point the cursor to github:
    loader={githubLoader}
      path='github'  
     element= {<Github/>} 
      />

    </Route>


  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
