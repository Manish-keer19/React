import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Header } from './components/index.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <Provider store={store}>
  <RouterProvider router={router}>


    <App />
  </RouterProvider>
  </Provider> 

)
