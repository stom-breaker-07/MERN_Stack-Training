import React from 'react'
import { lazy,Suspense } from 'react'
import NavBar from './NavBar'

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function Lazy() {
  return (
    <>
    <Suspense fallback={<div><h3>Loading...</h3></div>}>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </Suspense>       
    </>
  )
}

export default Lazy