import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/landingPage/Home/Home'
import About from './components/About/About'
import Blog from './components/blog/Blog'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Admission from './components/admission/Admission'

function App() {
  

  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/ourteam' element={<Team/>}/>
    <Route path='/admission' element={<Admission/>}/>
   </Routes>
   </BrowserRouter>

     
     {/* <Home/> */}
     {/* <About/> */}
    {/* <Blog/> */}
    {/* <Team/> */}
    {/* <Contact/> */}
    </div>
  )
}

export default App
