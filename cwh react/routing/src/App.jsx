
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './component/about';
import Navbar from './component/navbar';
import Contact from './component/contact';
import Home from "./component/home";



const router = createBrowserRouter([
  {
    path: "/Home",
    element:<>  < navbar/>  <Home/> </>  
  },
  {
    path: "/About",
    element:  <>  < navbar/>  <About/> </> 
  },
  {
    path: "/Contact",
    element: <>  < navbar/>  <Contact/> </> 
  }
]);

function App() {


  return (
  <>
  <h1 style={{textAlign:"center"}}>hello js</h1>
  <RouterProvider router={router} />
  </>
  )
}

export default App
