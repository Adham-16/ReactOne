import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Home} from './Component/Home/Home'
import { About } from './Component/About/About'
import { Portfolio } from './Component/Portfolio/Portfolio'
import { Contact } from './Component/Contact/Contact'
import  Layout  from './Component/layout/layout';

export function App() {
  let router =createBrowserRouter([
    {
      path:'' , element: <Layout/> , children:[
    { index:true , element: <Home/> },
    { path:'about' , element: <About/> },
    { path:'portfolio' , element: <Portfolio/> },
    { path:'contact' , element: <Contact/> },
    ]}
  ])
  return (
    <>

    <RouterProvider router={router}> </RouterProvider>

    </>
  )
}


