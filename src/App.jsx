import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { createContext, useState } from 'react'
import Aboutus from './components/Aboutus'
import Blog from './components/Blog'
import Resources from './components/Resources'
import Firstfooter from './components/Firstfooter'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Casestudies from './components/Casestudies'
import Industries from './components/Industries'
import Footer from './components/Footer'
import CartItem from './components/CartItem'
import Store from './components/Store'


  const newcontext=createContext();
  const seccontext=createContext();

  function App() {
 
  const[objdata,setobjdata]=useState({name:'',email:'',phone:'',password:''});
  const[profiledata,setprofiledata]=useState([]);


  return (
<div>
  <seccontext.Provider value={{objdata,setobjdata}}>
  <newcontext.Provider value={{profiledata,setprofiledata}}>
  <BrowserRouter>
    <Nav/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/industries' element={<Industries/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/casestudies' element={<Casestudies/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/cartItem' element={<CartItem/>}/>
      <Route path='/store' element={<Store/>}/>
    </Routes>
    <Firstfooter/>
    {/* <Footer/> */}
  </BrowserRouter>
  </newcontext.Provider>
  </seccontext.Provider>
</div>
  )
}

export default App;
export {newcontext};
export {seccontext};
