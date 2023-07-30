import React from 'react'
import { Routes,BrowserRouter,Route } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'
import Nav from './Nav'
import Teams from './Teams'
import Footer from './Footer'
const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/schedule' element={<Schedule/>}></Route>
        <Route path='/nav' element={<Nav/>}></Route>
        <Route path='/team' element={<Teams/>}></Route>
        <Route path='/foot' element={<Footer/>}></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}
export default App