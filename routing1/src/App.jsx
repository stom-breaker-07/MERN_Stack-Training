import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Index from './Index'

function App() {
  return (
    <div>
      <h1>App Page</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App